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

    // {{{ constructor

    /**
     * コンストラクタ
     */
    constructor : function(o) {

        var me = this,
            config = o || {};

        if(config.trick && Ext.isString(config.trick)) {
            me.addMethods(eval('Ext.trick.trick.' + config.trick.capitalize()));
        }

        // スーパークラスメソッドコール 
        Ext.trick.TrickPanel.superclass.constructor.apply(me, arguments);
    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     *
     * @return void
     */
    initComponent : function() {

        var me = this;

        // トリックトリガー
        me.tricktrigger.apply(me, arguments);

        // スーパークラスメソッドコール
        Ext.trick.TrickPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ tricktrigger

    /**
     * トリックトリガー抽象メソッド
     *
     * 適用されたトリックを開始します。
     */
    tricktrigger : Ext.emptyFn,

    // }}}
    // {{{ addMethods

    /**
     * メソッド追加メソッド
     *
     * @param o 追加オブジェクト
     * @return void
     */
    addMethods : function(o) {

        Ext.apply(Ext.trick.TrickPanel.prototype, o);
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
