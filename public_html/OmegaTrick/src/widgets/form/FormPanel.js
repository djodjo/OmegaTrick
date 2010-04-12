/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.form'
);

// }}}
// {{{ Ext.trick.form.FormPanel

Ext.trick.form.FormPanel = Ext.extend(Ext.form.FormPanel, {

    // {{{ defaultType

    defaultType: 'container',

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this;

        me.setDeepLayout(me.initialConfig.items);

        // スーパークラスメソッドコール
        Ext.trick.form.FormPanel.superclass.initComponent.apply(me, arguments);

        // フォームオブジェクト初期化
        me.forms = {};

        // フォームアイテムスキャン
        me.scanFormItems(me.items);
    },

    // }}}
    // {{{ setDeepLayout

    setDeepLayout : function(items) {

        var me = this;

        Ext.each(items, function(item, cnt, items) {

            if(!item.layout) {
                item.layout = 'form';
            }

            if(item.items && item.items.length > 0) {
                me.setDeepLayout(item.items);
            }
        }, me);

   },

    // }}}
    // {{{ scanFormItems

    /**
     * フォームアイテムスキャンメソッド
     *
     * @return void
     */
    scanFormItems : function(items) {

        var me = this;

        items.each(function(item, index, length) {
            if(item instanceof Ext.form.Field) {
                me.forms[item.name || item.id] = item;
            }

            if(item.items && item.items.getCount() > 0) {
                me.scanFormItems(item.items);
            }
        }, me);
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('advform', Ext.trick.form.FormPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

