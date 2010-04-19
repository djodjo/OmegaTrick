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

            // スタイル設定
            style: {
                borderBottom: '1px solid #D0D0D0'
            },

            items:[{
          xtype: 'compositefield',
          fieldLabel: 'Full Name',
          items: [
              {xtype: 'textfield', name: 'title',     width: 40},
              {xtype: 'textfield', name: 'firstName', flex : 1},
              {xtype: 'textfield', name: 'lastName',  flex : 2}
          ]
}]

        });

        me.cls = me.cls || '';
        me.cls += ' tx-searchdetail';

/*
        Ext.apply(me, {

            // レイアウト設定
            layout:'hbox',

            // レイアウトコンフィグ
            layoutConfig: {
                align : 'stretch',
                pack  : 'start',
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
          xtype: 'compositefield',
          fieldLabel: 'Full Name',
          items: [
              {xtype: 'textfield', name: 'title',     width: 40},
              {xtype: 'textfield', name: 'firstName', flex : 1},
              {xtype: 'textfield', name: 'lastName',  flex : 2}
          ]
},{
                    html:"3"
                }],

                // サイズ設定
                width: 500

            },{
                flex:1
            }]
*/
//        });

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

