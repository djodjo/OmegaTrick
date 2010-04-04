/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/// {{{ Namespace

Ext.ns(
    'Ext.trick'
);

// }}}
// {{{ Ext.trick.ScreenPanel

/**
 * Ext.trick.ScreenPanel
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.ScreenPanel = Ext.extend(Ext.Panel,{

    // {{{ initComponent

    initComponent: function() {
    
        // スーパークラスメソッドコール
        Ext.trick.ScreenPanel.superclass.initComponent.call(this);
    },

    // }}}
    // {{{ add

    add : function(comp) {

        var me = this;

        me.initItems();
        var args = arguments.length > 1;
        if(args || Ext.isArray(comp)){
            var result = [];
            Ext.each(args ? arguments : comp, function(c, num){
                if(num == me.activeItem || c.id == me.activeItem) {
                    me.items = false;
                    result.push(me.add(c));
                }
            }, me);
            return result;
        }

        var c = me.lookupComponent(me.applyDefaults(comp));
        var index = this.items.length;
        if(me.fireEvent('beforeadd', me, c, index) !== false && me.onBeforeAdd(c) !== false){


            me.items.add(c);
            c.onAdded(me, index);
            me.onAdd(c);
            me.fireEvent('add', me, c, index);
        }

        return c;
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('screen', Ext.trick.ScreenPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

