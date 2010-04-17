/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.SearchPanel

/**
 * Ext.trick.parts.SearchPanel Class for enhancing
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.SearchPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    /**
     * コンポーネント初期化
     */
    initComponent : function() {

        var me = this;

        // コンフィグ適用
        Ext.applyIf(me, {

            // レイアウト設定
            layout: 'screen',

            // アクティブアイテム設定
            activeItem: 0,

            // ボーダー設定
            border: false,

            // デフォルト設定
            defaults: {

                // ボーダー設定
                border: false
            },

            // アイテム設定
            items: [{

                // レイアウト設定
                layout: 'border',

                // スクリーン固定設定
                fix: true,

                // デフォルト設定
                defaults: {

                    // ボーダー設定
                    border: false

                },

                // アイテム設定
                items: [{

                    // リージョン設定
                    region: 'north',

                    // 表示設定
                    hidden: true

                },{
                    // xtype設定
                    xtype: 'trick',

                    // トリック設定
                    trick: 'list',

                    // リージョン設定
                    region: 'center'
                }]
            }]
        });

        // スーパークラスコンストラクタコール
        Ext.trick.parts.SearchPanel.superclass.initComponent.call(me);
    }

    // }}}

});

// {{{ Register xtype

Ext.reg('trick-search', Ext.trick.parts.SearchPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

