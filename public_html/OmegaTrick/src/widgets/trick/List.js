/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.trick'
);

// }}}
// {{{ Ext.trick.trick.List

/**
 * Ext.trick.trick.List Class for enhancing
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.trick.List = {

    // {{{ trickInit

    trickInit : [
        '_initList'
    ],

    // }}}
    // {{{ _initList

    /**
     * Ext.trick.trick.List初期化メソッド
     */
    _initList : function(o) {

        var me = this;

        // トリックパーツへの設定適用
        Ext.apply(me, me.trickConfig);

        // 設定適用
        Ext.applyIf(me, {

            // レイアウト設定
            layout: 'fit',

            // アイテム設定
            items: [{
                xtype: 'trick-list',
                trickConfig: o.trickConfig.list
            }]

        });

    },

    // }}}
    // {{{ initConfig

    /**
     * コンフィグ初期化メソッド
     */
    initConfig : function() {

        var me = this,
            args = arguments;

        Ext.each(me.trickInit, function(item, cnt, items){
            eval('me.' + item + '.apply(me, args);');
        }, me);
    },

    // }}}
    // {{{ tricktrigger

    /**
     * トリックトリガーメソッド
     *
     * 仕掛けの設置を開始します。
     */
    tricktrigger : function() {

        var me = this;




    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

