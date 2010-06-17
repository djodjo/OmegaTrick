/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns('Ext.ux');

// }}}

if(Ext.ux.Portal) {

// {{{ Ext.trick.Portal

/**
 * Ext.trick.Portal
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.Portal = Ext.extend(Ext.ux.Portal, {

    // {{{ initComponent

    initComponent: function() {

        var me = this;

        me.on('afterrender', me.onAfterRender, me);
        Ext.trick.Portal.superclass.initComponent.call(this);
    },

    // }}}
    // {{{ onAfterRender

    onAfterRender : function() {

        var me = this;
        var delay = 500;

        me.items.each(function(col){
            col.items.each(function(portlet){
                if (portlet.height) {
                    (function(){
                        portlet.setHeight(portlet.height);
                        portlet.doLayout();
                    }).defer(delay,me);
                }
            }, me);
            (function(){
                col.doLayout();
            }).defer(delay,me);
        }, me);

        (function(){
            me.ownerCt.doLayout();
        }).defer(delay,me);

    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick-portal', Ext.trick.Portal);

// }}}

}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
