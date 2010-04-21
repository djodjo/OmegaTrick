/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.Unit

/**
 * Ext.trick.parts.Unit Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.ListUnitPanel = Ext.extend(Ext.Panel, {

    // {{{ initConfig

    /**
     * 設定オブジェクト初期化
     */
    initConfig : function() {

        var me = this,
            config = me.trickConfig || {};

    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this,
            config = me.trickConfig || {};

        // ID設定
        Ext.applyIf(me, {id: Ext.id()});

        // コンフィグ初期化
        me.initConfig();


        var tempConfig = Ext.clone(config);

        // テンポラリコンフィグ設定
        var tempConfig = {

            // レイアウト設定
            layout: 'screen',

            // CSSクラス設定
            cls: 'tx-unit',

            // xtype
            xtype: 'container',

            // アクティブアイテム設定
            activeItem: 0,

            // ボーダー設定
            border: false,

            // アイテム設定
            items: [{

                // 固定設定
                fix: true,

                // ボーダー設定
                border: false,

                // xtype設定
                xtype: 'trick-list',

                // トリックコンフィグ設定
                trickConfig: config.list || {}

            },{

                html: 'b'
            }]

            // アイテム設定
//            items:[gridConfig]

        };

        // コンフィグ適用
        Ext.applyIf(me, tempConfig);

        // スーパークラスメソッドコール
        Ext.trick.parts.ListUnitPanel.superclass.initComponent.call(me);
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick-listunit', Ext.trick.parts.ListUnitPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

