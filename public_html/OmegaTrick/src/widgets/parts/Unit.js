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

    // {{{ initConfig

    initConfig : function() {

        var me = this,
            config = me.trickConfig;

        Ext.applyIf(me, config);

        if(Ext.isObject(me.tbar)) {
            me.tbar = [me.tbar];
        } else if(Ext.isArray(me.tbar)) {
            me.tbar = me.tbar;
        } else {
            me.tbar = [];
        }

        me.tbar = me.tbar.concat([{

            // テキスト設定
            text: '一覧へ戻る',

            // アイコンクラス設定
            iconCls: 'tx-icon-backlist',

            // ハンドラ設定
            handler: function() {
                me.fireEvent('backlist');
            },

            // スコープ
            scope: me
        }]);

    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化
     */
    initComponent : function() {

        var me = this;

        // コンフィグ初期化
        me.initConfig();

        Ext.applyIf(me, {
            cls: 'tx-unit'
        });

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

