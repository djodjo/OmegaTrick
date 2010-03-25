/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Ext.trick.layout.ScreenLayout

/**
 * Ext.trick.layout.ScreenLayout
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.layout.ScreenLayout = Ext.extend(Ext.layout.FitLayout, {

    // {{{ props

    deferredRender : false,
    layoutOnCardChange : false,
    renderHidden : true,

    // }}}
    // {{{ constructor

    constructor: function(config) {
        Ext.trick.layout.ScreenLayout.superclass.constructor.call(this, config);
    },

    // }}}
    // {{{ setActiveItem

    setActiveItem : function(item) {

        var me = this, ai = me.activeItem, oi = item;

        item = me.container.getComponent(item);

        if(!item) {

            me.container.activeItem = oi;
            delete me.container.items;
            me.container.items = me.container.initialConfig.items;
            item = me.container.add(me.container.initialConfig.items);
            item = item.pop();
        }

        if(ai != item) {

            if(ai) {
                ai.destroy();
            }

            var layout = item.doLayout && (me.layoutOnCardChange || !item.rendered);
            this.activeItem = item;

            if(item) {
                item.show();
            }

            me.layout();

            if(item && layout) {
                item.doLayout();
            }

            item.fireEvent('activate', item);
        }
    },

    // }}}
    // {{{ renderAll

    renderAll : function(ct, target){

        var me = this;

        if(me.deferredRender){
            me.renderItem(me.activeItem, undefined, target);
        }else{
            Ext.trick.layout.ScreenLayout.superclass.renderAll.call(me, ct, target);
        }
    }

    // }}}

});

// }}}
// {{{ Register Layout

Ext.Container.LAYOUTS['screen'] = Ext.trick.layout.ScreenLayout;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
