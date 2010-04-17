/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Ext.trick.TrickPanel

/**
 * Ext.trick.TrickPanel Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.TrickPanel = Ext.extend(Ext.Panel, {

    // {{{ trick

    /**
     * トリックタイプ設定
     */
    trick : null,

    // }}}
    // {{{ trickConfig

    /**
     * トリック設定
     */
    trickConfig: {},

    // }}}
    // {{{ trickPartsConfig

    /**
     * トリックパーツ設定
     */
    trickPartsConfig: {},

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     *
     * @return void
     */
    initComponent : function() {

        var me = this;

        if(me.trick) {

            var parts = me.trickPartsConfig;

            Ext.applyIf(parts, {
                xtype: 'trick-' + (me.initialConfig.trick || me.trick),
                trickConfig: me.trickConfig
            });

            // アイテム設定
            Ext.applyIf(me, {
                layout: 'fit',
                border: false,
                items: parts
            });

        }

        // スーパークラスメソッドコール
        Ext.trick.TrickPanel.superclass.initComponent.call(me);
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick', Ext.trick.TrickPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

