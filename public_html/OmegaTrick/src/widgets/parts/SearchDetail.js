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
            height: 100,

            // パディング設定
            padding: 10,

            // アイテム設定
            items: [{

                xtype: 'textfield',
                fieldLabel: 'タイトル'

            }]

        });

        Ext.apply(me, {

            // ベースクラス設定
            baseCls: 'x-plain',

            // スタイル設定
            style: {
                borderBottom: '1px solid #D0D0D0'
            },

        });

        // スーパークラスメソッドコール
        Ext.trick.parts.SearchDetailPanel.superclass.initComponent.call(me);
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

