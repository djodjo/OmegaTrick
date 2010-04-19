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

                    // アイテムID設定
                    itemId: 'caption',

                    // xtype設定
                    xtype: 'textfield',

                    // フィールドラベル設定
                    fieldLabel: 'タイトル',

                    // アンカー設定
                    anchor: '100%'

                },{

                    // アイテムID設定
                    itemId: 'modified',

                    // xtype設定
                    xtype: 'compositefield',

                    // フィールドラベル設定
                    fieldLabel: '更新日時',

                    // アイテム設定
                    items: [{

                        // アイテムID設定
                        itemId: 'fromDate',

                        // xtype設定
                        xtype: 'datefield',

                        // サイズ設定
                        width: 100
                    },{

                        // アイテムID設定
                        itemId: 'fromHour',

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Hour,

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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

                        // アイテムID設定
                        itemId: 'fromMinute',

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Minute,

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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
                        // アイテムID設定
                        itemId: 'fromSecond',

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Second,

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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

                        // アイテムID設定
                        itemId: 'toDate',

                        // xtype設定
                        xtype: 'datefield',

                        // サイズ設定
                        width: 100
                    },{
                        // アイテムID設
                        itemId: 'toHour',

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Hour,

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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
                        // アイテムID設定
                        itemId: 'toMinute',

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Minute,

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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
                        // アイテムID設定
                        itemId: 'toSecond',

                        // xtype設定
                        xtype: 'combo',

                        // ストア設定
                        store: Ext.trick.store.Second,

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

                        // サイズ設定
                        width: 40
                    }]
                },{

                    // アイテムID設定
                    itemId: 'created',

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

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField: 'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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

                        // テンプレート設定
                        tpl: [
                            '<tpl for=".">',
                                '<div class="x-combo-list-item">',
                                '<tpl if=display.length &gt; 1>{display}</tpl>',
                                '<tpl if=display.length == 0>&nbsp;</tpl>',
                                '</div>',
                            '</tpl>'
                        ].join(''),

                        // 編集設定
                        editable: false,

                        // 表示フィールド設定
                        displayField:'display',

                        // 値フィールドラベル設定
                        valueField: 'value',

                        // モード設定
                        mode: 'local',

                        // 強制選択設定
                        forceSelection: true,

                        // トリガーアクション設定
                        triggerAction: 'all',

                        // フォーカス時選択設定
                        selectOnFocus:true,

                        // 値設定
                        value: '',

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
                        text: '検索',

                        // ハンドラ設定
                        handler: me.onBtnSearch,

                        // スコープ設定
                        scope: me
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

        me.forms.caption.setValue('');
        me.forms.modified.reset();
        me.forms.created.reset();

    },

    // }}}
    // {{{ onBtnSearch

    onBtnSearch : function() {

        var me = this,
            store = me.searchStore,
            lastOptions = store.lastOptions;

        var query = {};

        if(me.forms.caption.getValue().length > 0) {
            query.caption = me.forms.caption.getValue();
        }/* else if(
            
        ) {
        
        
        
        }
*/
console.log(me.forms);
        var hasQuery = false;
        Ext.iterate(query, function(){
            hasQuery = true;
            return false;
        });

        if(!hasQuery) {
            query = '';
        }
        if(!lastOptions.params) {
            lastOptions.params = Ext.clone(store.baseParams);
        }
        Ext.apply(lastOptions.params, {
            query: query
        });
        store.reload(lastOptions);
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

