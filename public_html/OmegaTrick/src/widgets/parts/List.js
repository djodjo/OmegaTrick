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
            remoteSort: config.store.remoteSotr || false,

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
        var store = new storeCls(config.store);

        // コンフィグ適用
        Ext.applyIf(me, {

            // ストア設定
            store: store,

            // カラムモデル設定
            colModel: new colModelCls(config.colModel)
        });

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

