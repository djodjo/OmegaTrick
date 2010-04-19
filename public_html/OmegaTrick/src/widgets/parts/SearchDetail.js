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
Ext.trick.parts.SearchDetailPanel = Ext.extend(Ext.trick.form.FormPanel, {

    // {{{ initComponent

    /**
     * コンポーネント初期化
     */
    initComponent : function() {

        var me = this;

        // コンフィグ適用
        Ext.applyIf(me, {

            // サイズ設定
            height: 135,

            // パディング設定
            padding: 10,

            // スタイル設定
            style: {
                borderBottom: '1px solid #D0D0D0'
            },

            // レイアウト設定
            layout:'hbox',

            // レイアウトコンフィグ
            layoutConfig: {
                align : 'stretch',
                pack  : 'start'
            },

            // アイテム設定
            items: [{

                // レイアウト設定
                layout: 'form',

                // アイテム設定
                items: [{

                    // xtype設定
                    xtype: 'textfield',

                    // フィールドラベル設定
                    fieldLabel: 'タイトル',

                    // アンカー設定
                    anchor: '100%'

                },{

                    // xtype設定
                    xtype: 'compositefield',

                    // フィールドラベル設定
                    fieldLabel: '更新日時',
                    items: [{

                        // xtype設定
                        xtype: 'datefield',

                        // サイズ設定
                        width: 100
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Hour,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'hour',

                        // 値フィールドラベル設定
                        valueField: 'hour',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '00',

                        // サイズ設定
                        width: 40
                    },{

                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Minute,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'minute',

                        // 値フィールドラベル設定
                        valueField: 'minute',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '00',

                        // サイズ設定
                        width: 40
                    },{
                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Second,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'second',

                        // 値フィールドラベル設定
                        valueField: 'second',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '00',

                        // サイズ設定
                        width: 40
                    },{

                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: '〜',

                        // サイズ設定
                        width: 10
                    },{

                        // xtype設定
                        xtype: 'datefield',

                        // サイズ設定
                        width: 100
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Hour,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'hour',

                        // 値フィールドラベル設定
                        valueField: 'hour',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '23',

                        // サイズ設定
                        width: 40
                    },{

                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Minute,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'minute',

                        // 値フィールドラベル設定
                        valueField: 'minute',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '59',

                        // サイズ設定
                        width: 40
                    },{
                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Second,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'second',

                        // 値フィールドラベル設定
                        valueField: 'second',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '59',

                        // サイズ設定
                        width: 40
                    }]
                },{

                    // xtype設定
                    xtype: 'compositefield',

                    // フィールドラベル設定
                    fieldLabel: '作成日時',

                    // アイテム設定
                    items: [{

                        // xtype設定
                        xtype: 'datefield',

                        // サイズ設定
                        width: 100
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Hour,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'hour',

                        // 値フィールドラベル設定
                        valueField: 'hour',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '00',

                        // サイズ設定
                        width: 40
                    },{

                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Minute,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'minute',

                        // 値フィールドラベル設定
                        valueField: 'minute',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '00',

                        // サイズ設定
                        width: 40
                    },{
                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Second,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'second',

                        // 値フィールドラベル設定
                        valueField: 'second',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '00',

                        // サイズ設定
                        width: 40
                    },{

                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: '〜',

                        // サイズ設定
                        width: 10
                    },{

                        // xtype設定
                        xtype: 'datefield',

                        // サイズ設定
                        width: 100
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Hour,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'hour',

                        // 値フィールドラベル設定
                        valueField: 'hour',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '23',

                        // サイズ設定
                        width: 40
                    },{

                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Minute,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'minute',

                        // 値フィールドラベル設定
                        valueField: 'minute',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '59',

                        // サイズ設定
                        width: 40
                    },{
                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ':',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Second,

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'second',

                        // 値フィールドラベル設定
                        valueField: 'second',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '59',

                        // サイズ設定
                        width: 40
                    }]
                },{

                    // ボーダー設定
                    border: false,

                    // ベースクラス設定
                    baseCls: 'x-plain',

                    // スタイル設定
                    style: 'padding-top: 10px;',

                    // アイテム設定
                    items: [{

                        // xtype設定
                        xtype: 'button',

                        // スタイル設定
                        style: 'float: right',

                        // サイズ設定
                        width: 100,

                        // テキスト設定
                        text: '検索'
                    },{

                        // xtype設定
                        xtype: 'displayfield',

                        // 値設定
                        value: ' ',

                        // スタイル設定
                        style: 'float:right',

                        // サイズ設定
                        width: 5
                    },{

                        // xtype設定
                        xtype: 'button',

                        // スタイル設定
                        style: 'float: right',

                        // サイズ設定
                        width: 100,

                        // テキスト設定
                        text: 'クリア',

                        // ハンドラ設定
                        handler: me.onBtnReset,

                        // スコープ設定
                        scope: me
                    }]
                }],

                // サイズ設定
                width: 635

            },{
                flex:1
            },{
            }]

        });

        me.cls = me.cls || '';
        me.cls += ' tx-searchdetail';

        // スーパークラスメソッドコール
        Ext.trick.parts.SearchDetailPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ onBtnReset

    onBtnReset : function() {
        var me = this;
    console.log(me.forms);
    alert('aaa');
    }

    // }}}
});

// }}}
// {{{ Register xtype

Ext.reg('trick-searchdetail', Ext.trick.parts.SearchDetailPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

