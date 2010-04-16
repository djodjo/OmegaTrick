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

    // {{{ constructor

    /**
     * コンストラクタ
     */
    constructor : function() {

        var me = this,
            args = arguments;

        if(!args[0]) {
            args.push({});
        }

        // コンフィグ適用
        Ext.applyIf(args[0], {

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
                    xtype: 'trick-list',

                    // トリックコンフィグ設定
                    trickConfig: {},

                    // リージョン設定
                    region: 'center'

                }]
            }]
        });

        // スーパークラスメソッドコール
        Ext.trick.parts.SearchPanel.superclass.constructor.apply(me, args);

    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化
     */
    initComponent : function() {

        var me = this;





        /*
        me.items = [{
            title: 'test'
        },{
            title: 'hoge'
        }]
*/

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

