/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.SigninDialog

/**
 * Trick.SigninDialog Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 0.5.0
 */
Trick.SigninDialog = Ext.extend(Ext.Component, {

    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this;

        // 初期設定適用
        Ext.applyIf(me, {

            // ID設定
            id: Ext.id(),

            // ベースCSSクラス設定
            baseCls: 'tx-signin',

            // 持続時間設定
            duration: 0.3,

            // 移動距離設定
            distance: 75

        });

        // レイヤー生成
        me.layer = new Ext.Layer({

            // ID設定
            id: me.id,

            // CSSクラス設定
            cls: me.baseCls

        });

        // プロパティ設定
        Ext.apply(me, {

            // ID設定
            id: Ext.id(),

            // ボディーラッパーCSSクラス設定
            bwrapCls: me.baseCls + '-bwrap',

            // ボディーCSSクラス設定
            bodyCls: me.baseCls + '-body',

            // インナーCSSクラス設定
            innerCls: me.baseCls + '-inner',

            // アイテムCSSクラス設定
            itemsCls: me.baseCls + '-items',

            // アイテム内部CSSクラス設定
            itemsInnerCls: me.baseCls + '-items-inner',

            // ヘッダーCSSクラス設定
            headerCls: me.baseCls + '-header',

            // コンテンツCSSクラス設定
            contentCls: me.baseCls + '-content',

            // レンダリング先設定
            renderTo: me.layer

        });

        // ウィンドウリサイズイベント追加
        Ext.EventManager.onWindowResize(me.onWindowResize, me);

        // スーパークラスメソッドコール
        Trick.SigninDialog.superclass.initComponent.call(me);

    },

    // }}}
    // {{{ initEvents

    /**
     * イベント初期化メソッド
     *
     * @return void
     */
    initEvents : function(){

    },

    // }}}
    // {{{ onRender

    // private
    onRender : function(ct, position) {

        var me = this,
            dh = Ext.DomHelper;

        // スーパークラスメソッドコール
        Trick.SigninDialog.superclass.onRender.call(me, ct, position);

        var el = me.el;

        // ラッパークラス追加
        el.addClass(me.bwrapCls);

        // テンプレート生成
        var t = new Ext.Template(
            '<div class="{bodyCls}">',
            '   <div class="{innerCls}">',
            '       <div class="clearfix">',
            '           <div class="{headerCls}">',
            '               <div class="title">{title}</div>',
            '           </div>',
            '           <div class="{itemsCls} clearfix">',
            '               <div class="{itemsInnerCls} clearfix">',
            '                   <div class="{contentCls}">',
            '                       <div class="form">',
            '                           <div class="mail">',
            '                               <div class="label"></div>',
            '                           </div>',
            '                           <div class="textfield space" id="{emailId}"></div>',
            '                           <div class="pass">',
            '                               <div class="label"></div>',
            '                           </div>',
            '                           <div class="textfield space" id="{passId}"></div>',
            '                        </div>',
            '                        <div class="autologin clearfix">',
            '                            <div class="auto" id="{checkboxId}"></div>',
            '                            <div class="btn_siginin" id="{submitId}"></div>',
            '                        </div>',
            '                        <div class="fogetpass clearfix">',
            '                            <a href="{forgetUrl}" class="fogetpass">{msgFogetPass}</a>',
            '                        </div>',
            '                    </div>',
            '                </div>',
            '           </div>',
            '       </div>',
            '   </div>',
            '</div>'
        );
        me.body = t.append(el, {
            bodyCls: me.bodyCls,
            innerCls: me.innerCls,
            itemsCls: me.itemsCls,
            itemsInnerCls: me.itemsInnerCls,
            headerCls: me.headerCls,
            title: Trick.SigninDialog.msg.signin.title,
            contentCls: me.contentCls,
            emailId: el.id + '_FIELD_EMAIL',
            passId: el.id + '_FIELD_PASSWORD',
            checkboxId: el.id + '_FIELD_CHECKBOX',
            submitId: el.id + '_FIELD_SUBMIT',
            msgFogetPass: 'forget',//Ext.trick.SigninWindow.msg.signin.fogetpass,
            forgetUrl: ''//me.forgetUrl
        });
        me.body = Ext.get(me.body);
        me.bodyInner = Ext.get(me.body.down('.' + me.innerCls));
        me.bodyItems = Ext.get(me.body.child('.' + me.itemsCls));
        me.header = Ext.get(me.body.child('.' + me.headerCls));

        // レンダリングフラグ設定
        this.rendered = true;

        // イベント初期化
        me.initEvents();
    },

    // }}}
    // {{{ show

    /**
     * 表示メソッド
     *
     * @return void
     */
    show : function() {

        var me = this,
            cp = me.getCenterPosition();

        // 初期位置設定
        me.layer.setLeft(cp.x + me.distance);
        me.layer.setTop(cp.y);
        me.layer.setOpacity(0);
        me.layer.show();

        // ボディ要素透明度設定
        me.body.setOpacity(.5);

        // 内部アイテム要素透明度設定
        me.bodyItems.setOpacity(0);

        // 表示アニメーション開始
        me.layer.shift({
            x: cp.x,
            easing: 'easeOutStrong',
            opacity: 1,
            duration: me.duration,
            callback: function() {

                // ボディ要素透明度設定
                me.body.setOpacity(1);

                // 内部アイテム要素フェードイン
                me.bodyItems.fadeIn({
                    duration: me.duration,
                    callback: function() {

                        /*
                           me.email.enable();
                           me.password.enable();

                        // メールアドレスにフォーカス設定
                        me.email.focus();

*/
                        // イベント発火
                        me.fireEvent('show', me);
                    }
                });
            }
        });
    },

    // }}}
    // {{{ getCenterPosition

    /**
     * 画面中央位置取得取得メソッド
     */
    getCenterPosition : function() {

        var me = this,
            vs = Ext.getDoc().getViewSize();

        return {
            x: (vs.width - me.layer.getWidth()) / 2,
            y: (vs.height - me.layer.getHeight()) / 2
        };
    },

    // }}}
    // {{{ onWindowResize

    /**
     * ウィンドウリサイズイベントハンドラ
     */
    onWindowResize : function(w, h) {

        var me = this,
            vs = Ext.getDoc().getViewSize(),
            cwp = (vs.width - me.layer.getWidth()) / 2,
            chp = (vs.height - me.layer.getHeight()) / 2;

        if (me.isVisible) {
            me.layer.setLeft(cwp);
            me.layer.setTop(chp);
        }

    }

    // }}}

});

// }}}
// {{{ Setting Messages

/**
 * メッセージ設定
 */
Trick.SigninDialog.msg = {
    signin: {
        title: 'サインイン'
    }
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
