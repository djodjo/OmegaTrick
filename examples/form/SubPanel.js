/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ SubPanel

SubPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this;

        Ext.apply(me, {
            title: 'SubPanel',
            padding: 20,
            xitems: [
                'Field1',
                'Field2',
                'CompositeField1'
            ]
        });

        // スーパークラスメソッドコール
        SubPanel.superclass.initComponent.call(me);
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('subpanel', SubPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
