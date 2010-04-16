/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.trick'
);

// }}}
// {{{ Ext.trick.trick.Search

/**
 * Ext.trick.trick.Search Class for enhancing
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.trick.Search = {

     // {{{ trickInit

    trickInit : [
        '_initSearch'
    ],

    // }}}
    // {{{ _initSearch

    /**
     * Ext.trick.trick.Search初期化メソッド
     */
    _initSearch : function(o) {

        var me = this,
            partsConfig = {};

        // トリックパーツへの設定適用
        Ext.apply(partsConfig, o.trickPartsConfig);
        Ext.applyIf(partsConfig, {

            // xtype設定
            xtype: 'trick-search',

            // ボーダー設定
            border: false,

            // トリックコンフィグ設定
            trickConfig: o.trickConfig

        });

        // 設定適用
        Ext.applyIf(me, {

            // レイアウト設定
            layout: 'fit',

            // アイテム設定
            items: [partsConfig]

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

