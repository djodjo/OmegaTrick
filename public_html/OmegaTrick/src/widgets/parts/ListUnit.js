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
Ext.trick.parts.ListUnitPanel = Ext.extend(Ext.trick.ScreenPanel, {

    // {{{ initConfig

    /**
     * 設定オブジェクト初期化
     */
    initConfig : function() {

        var me = this;
        var config = me.trickConfig || {};
        config.list = config.list || {};
        config.unit = config.unit || {};
        var listConfig = config.list;
        var unitConfig = config.unit;

        // リストコンフィグ初期化
        if(listConfig.tbar) {

            if(Ext.isObject(listConfig.tbar)) {
                listConfig.tbar = [listConfig.tbar];
            } else if(Ext.isArray(listConfig.tbar)) {
                listConfig.tbar = listConfig.tbar;
            }

        } else {
            listConfig.tbar = [];
        }

        if(config.mode === 'view') {

            listConfig.tbar = listConfig.tbar.concat([{

                // アイテムID設定
                itemId: 'btnView',

                // テキスト設定
                text: '詳細表示',

                // アイコンクラス設定
                iconCls: 'tx-icon-detailview',

                // 無効化設定
                disabled: true,

                // ハンドラ設定
                handler: me.onBtnView,

                // スコープ設定
                scope: me

            }]);

            // オブジェクト初期化
            listConfig.grid = listConfig.grid || {};
            listConfig.grid.sm = listConfig.grid.sm || {};

            Ext.applyIf(listConfig.grid, {

                // リスナー設定
                listeners: {
                    dblclick: {
                        fn: me.onBtnView,
                        scope: me
                    }
                }
            });

            // セレクションモデルコンフィグオプション設定
            Ext.applyIf(listConfig.grid.sm, {

                // シングル選択設定
                singleSelect: true,

                // リスナー設定
                listeners: {
                    rowselect: {
                        fn : function() {
                            var list = me.getComponent('listpanel');
                            var btnView = me.panels.list.getTopToolbar().getComponent('btnView');
                            var grid = me.panels.list.panels.grid;
                            var sm = grid.getSelectionModel();
                            var selection = sm.getSelections();

                            // 詳細表示ボタン制御
                            if(selection && Ext.isArray(selection) && selection.length > 0) {
                                btnView.enable();
                            }
                        },
                        scope: me
                    },
                    rowdeselect: {
                        fn: function() {
                            var list = me.getComponent('listpanel');
                            var btnView = me.panels.list.getTopToolbar().getComponent('btnView');
                            var grid = me.panels.list.panels.grid;
                            var sm = grid.getSelectionModel();
                            var selection = sm.getSelections();

                            // 詳細表示ボタン制御
                            if(selection && Ext.isArray(selection) && selection.length === 0) {
                                btnView.disable();
                            }

                        }
                    }
                }
            });
        }

        // ユニットコンフィグ設定
        Ext.applyIf(unitConfig, {



        });

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

        var tempConfig = config;

        // テンポラリコンフィグ設定
        tempConfig = {

            // CSSクラス設定
            cls: 'tx-unit',

            // xtype
            xtype: 'screen',

            // ボーダー設定
            border: false,

            // アイテム設定
            items: [{

                // アイテムID設定
                itemId: 'listpanel',

                // リファレンス設定
                ref: 'panels.list',

                // 固定設定
                fix: true,

                // ボーダー設定
                border: false,

                // xtype設定
                xtype: config.listXType || 'trick-list',

                // トリックコンフィグ設定
                trickConfig: config.list

            },{

                // ID設定
                id: me.id + '_UNIT',

                // アイテムID設定
                itemId: 'unitpanel',

                // リファレンス設定
                ref: 'panels.unit',

                // ボーダー設定
                border: false,

                // xtype設定
                xtype: config.unitXType || 'trick-unit',

                // リスナー設定
                listeners: {
                    'backlist': {
                        fn: function() {
                            me.layout.setActiveItem(0);
                        },
                        scope: me
                    },
                    'show': {
                        fn: me.onShowDetail,
                        scope: me
                    }
                },

                // トリックコンフィグ設定
                trickConfig: config.unit
            }]

        };

        // コンフィグ適用
        Ext.applyIf(me, tempConfig);

        // スーパークラスメソッドコール
        Ext.trick.parts.ListUnitPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ onBtnView

    onBtnView: function() {

        var me = this;

        me.layout.setActiveItem(me.id + '_UNIT');


    },

    // }}}
    // {{{ onShowDetail

    onShowDetail: function(p) {

        var me = this,
            grid = me.panels.list.panels.grid,
            sm = grid.getSelectionModel();

        p.loadData(sm.getSelected());

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

