/**
 * @class Ext.List
 * @extends Ext.DataView
 * @xtype list
 * A mechanism for displaying data using a list layout template. List uses an {@link Ext.XTemplate}
 * as its internal templating mechanism, and is bound to an {@link Ext.data.Store}
 * so that as the data in the store changes the view is automatically updated to reflect the changes.  The view also
 * provides built-in behavior for many common events that can occur for its contained items including itemtap, containertap,
 * etc. as well as a built-in selection model. <b>In order to use these features, an {@link #itemSelector}
 * config must be provided for the DataView to determine what nodes it will be working with.</b>
 * @constructor
 * Create a new List
 * @param {Object} config The config object
 */
Ext.List = Ext.extend(Ext.DataView, {
    cmpCls: 'x-list',

    pinHeaders: true,

    /**
     * @cfg {Boolean/Object} indexBar
     * True to render an alphabet IndexBar docked on the right.
     * This can also be a config object that will be passed to {@link Ext.IndexBar}
     * (defaults to false)
     */
    indexBar: false,

    /**
     * @cfg {Boolean} grouped
     * True to group the list items together by first letter (defaults to false).
     */
    grouped: false,

    groupTpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="x-list-group x-group-{id}">',
                '<h3>{group}</h3>',
                '<div class="x-list-group-items">',
                    '{items}',
                '</div>',
            '</div>',
        '</tpl>',
        {compile: true}
    ),

    // @private
    initComponent : function() {
        if (this.scroll !== false) {
            this.scroll = {
                direction: 'vertical',
                scrollbars: false
            };
        }

        if (Ext.platform.isAndroidOS && this.initialConfig.pinHeaders === undefined) {
            this.pinHeaders = false;
        }

        if (this.grouped) {
            this.itemTpl = this.tpl;
            if (Ext.isString(this.itemTpl) || Ext.isArray(this.itemTpl)) {
                this.itemTpl = new Ext.XTemplate(this.itemTpl);
            }
            this.tpl = this.groupTpl;
        }
        else {
            this.indexBar = false;
        }

        if (this.indexBar) {
            var indexBarConfig = Ext.apply({}, Ext.isObject(this.indexBar) ? this.indexBar : {}, {
                xtype: 'indexbar',
                dock: 'right',
                overlay: true,
                alphabet: true
            });
            this.indexBar = new Ext.IndexBar(indexBarConfig);
            this.dockedItems = this.dockedItems || [];
            this.dockedItems.push(this.indexBar);
        } else if (this.scroll) {
            this.scroll.scrollbars = true;
        }

        Ext.List.superclass.initComponent.call(this);

        this.on('deactivate', this.onDeactivate, this);
    },

    // @private
    onDeactivate : function() {
        this.clearSelections();
    },

    // @private
    afterRender : function() {
        Ext.List.superclass.afterRender.call(this);
        if (!this.grouped) {
            this.el.addClass('x-list-flat');
        }

        this.getTemplateTarget().addClass('x-list-parent');
    },

    // @private
    initEvents : function() {
        Ext.List.superclass.initEvents.call(this);

        if (this.pinHeaders && this.scroll) {
            this.mon(this.scroller, {
                scrollstart: this.onScrollStart,
                scroll: this.onScroll,
                scope: this
            });
        }

        if (this.indexBar) {
            this.mon(this.indexBar, {
                index: this.onIndex,
                scope: this
            });
        }

        this.pageBox = this.body.getPageBox();
    },

    // @private
    onScrollStart : function() {
        this.pageBox = this.body.getPageBox();
    },

    // @private
    onScroll : function(scroller, pos, options) {
        var node = this.getActiveGroupNode();
        if (!node) {
            return;
        }

        var header = node.down('h3'),
            headerY, next;

        if (this.activeHeader != header) {
            if (this.activeHeader) {
                this.activeHeader.setStyle('-webkit-transform', 'translate3d(0px, 0px, 0px)');
            }
            next = node.next();
            this.nextGroupY = next ? (next.dom.offsetTop - header.dom.offsetHeight) : null;
            this.activeOffsetY = header.dom.offsetTop;
            this.activeHeader = header;
        }

        headerY = ((-1 * pos.y) - this.activeOffsetY);
        if (this.nextGroupY && -1 * pos.y >= this.nextGroupY) {
            headerY -= (-1 * pos.y - this.nextGroupY);
        }

        if (headerY != 0) {
            header.setStyle('-webkit-transform', 'translate3d(0, ' + headerY + 'px, 0)');
        }
    },

    // @private
    onIndex : function(record, target, index) {
        var key = record.get('key').toLowerCase(),
            groups = this.store.getGroups(),
            ln = groups.length,
            group, i, closest;

        for (i = 0; i < ln; i++) {
            group = groups[i].name.toLowerCase();
            if (group === key || group > key) {
                closest = group;
                break;
            }
            else {
                closest = group;
            }
        }

        closest = this.body.down('.x-group-' + closest);
        if (closest) {
            this.scroller.scrollTo({x: 0, y: closest.getOffsetsTo(this.scrollEl)[1]}, false, null, true);
        }
    },

    // @private
    getActiveGroupNode : function() {
        var x = this.pageBox.left + (this.pageBox.width / 2),
            y = this.pageBox.top + 0,
            target = Ext.Element.fromPoint(x, y);
        return target.findParent('.x-list-group', null, true);
    },

    // @private
    collectData : function(records, startIndex) {
        // true to suppress event
        this.store.sort(null, null, true);

        if (!this.grouped) {
            return Ext.List.superclass.collectData.call(this, records, startIndex);
        }

        var results = [],
            groups = this.store.getGroups(),
            ln = groups.length,
            children, cln, c,
            group, i;

        for (i = 0, ln = groups.length; i < ln; i++) {
            group = groups[i];
            children = group.children;
            for (c = 0, cln = children.length; c < cln; c++) {
                children[c] = children[c].data;                
            }
            results.push({
                group: group.name,
                id: group.name.toLowerCase(),
                items: this.itemTpl.apply(children)
            });
        }

        return results;
    },

    // Because the groups might change by an update/add/remove we refresh the whole dataview
    // in each one of them

    // @private
    onUpdate : function(ds, record) {
        this.refresh();
    },

    // @private
    onAdd : function(ds, records, index) {
        this.refresh();
    },

    // @private
    onRemove : function(ds, record, index) {
        this.refresh();
    }
});

Ext.reg('list', Ext.List);
