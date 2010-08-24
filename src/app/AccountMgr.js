/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.app.AccountMgr

/**
 * Trick.app.AccountMgr Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 0.5.0
 */
Trick.app.AccountMgr = function(){

    // {{{ public

    return {

        // {{{ msg

        /**
         * メッセージオブジェクト
         *
         * 言語設定でオーバーライドできるように、あえてクロージャーにしない
         */
        msg : {
            text : '認証中...'
        },

        // }}}
        // {{{ auth

        /**
         * 認証メソッド
         *
         * @param o コンフィグオプション
         */
        auth : function(o) {

            o = o || {};
            var me = this;
            var lm = Application.LoadingMask;

            // 初期値設定
            Ext.applyIf(o, {

                // ローディングテキスト設定
                text: me.msg.text

            });

            // ローディングマスクテキスト更新
            lm.setText(o.text);

            // サインイン状態確認
            o.directFn.isSignin(function(ret) {

                if(ret) {

                    // ローディングマスク解除
                    lm.remove();

                } else {

                }

            });
            /*
            o.directFn.auth('omega', 'trick', function(ret) {

                alert(ret);

            });
            */

        }

        // }}}

    }

    // }}}

}();

// }}}
// {{{ Shorthand

Application.Account = Trick.app.AccountMgr;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
