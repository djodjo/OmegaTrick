/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.List

/**
 * Ext.trick.parts.List Class for enhancing
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.ListPanel = Ext.extend(Ext.grid.GridPanel, {

    // {{{ initConfig

    /**
     * 設定オブジェクト初期化
     */
    initConfig : function() {

        var me = this,
            config = me.trickConfig;

        Ext.applyIf(config, {
            store: {},
            colModel: {}
        });

        // ストア設定
        Ext.applyIf(config.store, {

            // Ext.Direct関数設定
            directFn: config.store.directFn || OmegaTrick_List.readData,

            // レストフル設定
            restful: config.store.restful || true,

            // 自動読み込み設定
            autoLoad: config.store.autoLoad || true,

            // パラメータ順設定
            paramOrder: config.store.paramOrder || 'start|limit|sort|dir|query',

            // リモートソート設定
            remoteSort: config.store.remoteSotr || true,

            // パラメータハッシュ設定
            paramsAsHash: config.store.paramsAsHash || false,

            // IDプロパティ設定
            idProperty: config.store.idProperty || 'id',

            // ルート設定
            root: config.store.root || 'items',

            // ベースパラメーター設定
            baseParams: config.store.baseParams || {

                // 開始
                start: 0,

                // リミット
                limit: 50,

                // ソート
                sort: 'modified',

                // 並び順
                dir: 'DESC',

                // クエリー設定
                query: ''

            },

            // フィールド設定
            fields: config.store.fields || [

                // ID
                'id',

                // キャプション
                'caption',

                // 更新日時
                {name: 'modified', type: 'date', dateFormat: 'Y-m-d h:i:s'},

                // 作成日時
                {name: 'created', type: 'date', dateFormat: 'Y-m-d h:i:s'}
           ]

        });

        // カラムモデル設定
        Ext.applyIf(config.colModel, {

            // デフォルト設定
            defaults: config.colModel.defaults || {

                // 幅設定
                width: 120,

                // ソート設定
                sortable: true
            },

            // カラム設定
            columns: config.colModel.columns || [
                {header: 'タイトル', width: 200, sortable: true, dataIndex: 'caption'},
                {header: '更新日時', width: 200, sortable: true, dataIndex: 'modified',renderer: Ext.util.Format.dateRenderer('Y/m/d H:i:s')},
                {header: '作成日時', width: 200, sortable: true, dataIndex: 'created' ,renderer: Ext.util.Format.dateRenderer('Y/m/d H:i:s')}
            ]

        });

        // ページングツールバー設定
        if(config.ptbar) {

            Ext.applyIf(config.ptbar, {

                // ページサイズ設定
                paseSize: 50,

                // ツールバー情報表示設定
                displayInfo: true,

                // 情報メッセージ設定
                displayMsg: '表示中のアイテム: {2} 件中 {0} - {1} 件',

                // 空メッセージ
                emptyMsg: '表示するアイテムがありません。'
            });
        }

    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this,
            config = me.trickConfig,
            storeCls = config.storeCls || Ext.data.DirectStore,
            colModelCls = config.colModelCls || Ext.grid.ColumnModel;

        // コンフィグ初期化
        me.initConfig();

        // ストア生成
        store = new storeCls(config.store);

        // テンポラリコンフィグ設定
        var tempConfig = {

            // ストア設定
            store: store,

            // カラムモデル設定
            colModel: new colModelCls(config.colModel)
        };

        // ページングツールバー生成
        if(config.ptbar) {

            // ストア設定
            Ext.applyIf(config.ptbar, {
                store: store
            });

            var pos = config.ptbar.position;

            if(pos === 'top') {
                tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);
            } else if(pos == 'bottom') {
                tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);
            } else {

                if(pos.both && Ext.isObject(pos.both)) {
                    if(pos.both.top === true && pos.both.bottom !== true) {

                        config.ptbar.listeners = config.ptbar.listeners || {};
                        config.ptbar.listeners.change = {
                            fn: function() {
                                var pt = me.getTopToolbar(),
                                    bbar = me.getBottomToolbar(),
                                    count = pt.store.getCount(),
                                    info = bbar.getComponent('ptbar_info');

                                    var msg = count == 0 ? pt.emptyMsg : String.format(
                                        pt.displayMsg,
                                        pt.cursor+1, pt.cursor+count, pt.store.getTotalCount()
                                    );
                                    info.setText(msg);
                            }
                        };

                        tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);

                        if(!me.bbar) {
                            me.bbar = [];
                        }

                        me.bbar.push('->');
                        me.bbar.push({
                             // xtype設定
                            xtype: 'tbtext',

                            // アイテムID
                            itemId: 'ptbar_info'
                        });

                    } else if(pos.both.top !== true && pos.both.bottom === true) {

                        config.ptbar.listeners = config.ptbar.listeners || {};
                        config.ptbar.listeners.change = {
                            fn: function() {
                                var pt = me.getBottomToolbar(),
                                    tbar = me.getTopToolbar(),
                                    count = pt.store.getCount(),
                                    info = tbar.getComponent('ptbar_info');

                                    var msg = count == 0 ? pt.emptyMsg : String.format(
                                        pt.displayMsg,
                                        pt.cursor+1, pt.cursor+count, pt.store.getTotalCount()
                                    );
                                    info.setText(msg);
                            }
                        };

                        tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);

                        if(!me.tbar) {
                            me.tbar = [];
                        }

                        me.tbar.push('->');
                        me.tbar.push({
                             // xtype設定
                            xtype: 'tbtext',

                            // アイテムID
                            itemId: 'ptbar_info'
                        });

                    } else {
                        tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);
                        tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);
                    }
                } else {
                    tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);
                    tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);
                }
            }
        }

        // コンフィグ適用
        Ext.applyIf(me, tempConfig);

        // スーパークラスメソッドコール
        Ext.trick.parts.ListPanel.superclass.initComponent.call(me);

     }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick-list', Ext.trick.parts.ListPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

