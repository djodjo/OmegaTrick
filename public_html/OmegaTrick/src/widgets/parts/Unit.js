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
Ext.trick.parts.UnitPanel = Ext.extend(Ext.trick.form.FormPanel, {

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

        Ext.apply(me, {
            cls: 'tx-unit'
        });

        Ext.applyIf(me, {

            // パディング設定
            padding: 20,

            // アイテム設定
            items: [{

                // アイテムID設定
                itemId: 'caption',

                // xtype設定
                xtype: 'displayfield',

                // ラベル設定
                fieldLabel: 'タイトル'
            },{

                // アイテムID設定
                itemId: 'modified',

                // xtype設定
                xtype: 'displayfield',

                // ラベル設定
                fieldLabel: '更新日時'
            },{

                // アイテムID設定
                itemId: 'created',

                // xtype設定
                xtype: 'displayfield',

                // ラベル設定
                fieldLabel: '作成日時'
            }]

        });

        // スーパークラスメソッドコール
        Ext.trick.parts.UnitPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ initEvents

    initEvents : function() {

        var me = this;

        // スーパークラスメソッドコール
        Ext.trick.parts.UnitPanel.superclass.initEvents.apply(me, arguments);
    },

    // }}}
    // {{{ loadData

    loadData : function(r) {

        var me = this;

        me.ownerCt.body.mask();

        OmegaTrick_List.getUnit(r.id, function(ret) {

            // データ設定
            me.forms.caption.setValue(ret.caption);
            me.forms.modified.setValue(ret.modified);
            me.forms.created.setValue(ret.created);
        
            me.ownerCt.body.unmask();
        }, me);

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

