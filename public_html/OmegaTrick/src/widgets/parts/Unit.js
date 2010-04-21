/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.UnitPanel

/**
 * Ext.trick.parts.UnitPanel
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.UnitPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    /**
     * コンポーネント初期化
     */
    initComponent : function() {

        var me = this;

Ext.util.Observable.capture(me, function() {

console.log(arguments);
});
me.html = 'UnitPanel';
        // スーパークラスメソッドコール
        Ext.trick.parts.UnitPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ initEvents

    initEvents : function() {

        var me = this;

        me.on('show', me.onShowPanel, me);

        // スーパークラスメソッドコール
        Ext.trick.parts.UnitPanel.superclass.initEvents.apply(me, arguments);
    },

    // }}}
    // {{{ onShowPanel

    onShowPanel : function(p) {


    }

    // }}}

});

// {{{ Register xtype

Ext.reg('trick-unit', Ext.trick.parts.UnitPanel);

// }}}




/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

