/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// CustomSearchDetail

CustomSearchDetail = Ext.extend(Ext.trick.form.FormPanel,{

    // {{{ initComponent

    initComponent: function() {

        var me = this;

        Ext.apply(me, {

            // パディング設定
            padding: 10,

            // スタイル設定
            style: {
                borderBottom: '1px solid #D0D0D0'
            },

            // サイズ設定
            height: 100,

            // HTML設定
            html: 'カスタム詳細検索パネル'

        });

        // スーパークラスメソッドコール
        CustomSearchDetail.superclass.initComponent.call(me);
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick-customsearchdetail', CustomSearchDetail);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

