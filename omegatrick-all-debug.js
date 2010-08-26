/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ OmegaTrick

Trick = {};

(function(){

    // バージョン情報
    var trick = {
        version : '0.5.0',
        versionDetail : {
            major : 0,
            minor : 5,
            patch : 0
        }
    };

    // OmegaTrick適用フラグ
    var isOmegaTrick = true;

    // SenchaTouch有効フラグ
    var isSenchaTouch = Ext.TouchEventManager ? true : false;

    // Ext Core有効フラグ
    var isExtCore = (!isSenchaTouch && !Ext.ComponentMgr) ? true : false;

    // Ext JS有効フラグ
    var isExtJS = (!isSenchaTouch && !isExtCore) ? true : false;

    // Extオブジェクトに適用
    Ext.apply(Ext, {
        isOmegaTrick : isOmegaTrick,
        trick: trick
    });
    Ext.applyIf(Ext, {
        isSenchaTouch : isSenchaTouch,
        isExtCore : isExtCore,
        isExtJS : isExtJS
    });

    // グローバルオブジェクトへリンク
    Trick = Ext.trick;

    Ext.applyIf(Trick, {
        isSenchaTouch : isSenchaTouch,
        isExtCore : isExtCore,
        isExtJS : isExtJS
    });

})();

Ext.apply(Trick, {

    // {{{ テスティングフレームワーク設定

    testingFramework : {
        name: 'yui'
    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Ext.emptyFn

// for Ext Core
if(Ext.isExtCore && !Ext.emptyFn) {
    Ext.emptyFn = function(){};
}

// }}}
// {{{ Ext.Loader

if(!Ext.Loader) {

    Ext.Loader = Ext.apply({}, {

        load: function(fileList, callback, scope, preserveOrder) {
            var scope       = scope || this,
            head        = document.getElementsByTagName("head")[0],
            fragment    = document.createDocumentFragment(),
            numFiles    = fileList.length,
            loadedFiles = 0,
            me          = this;

            var loadFileIndex = function(index) {
                head.appendChild(
                    me.buildScriptTag(fileList[index], onFileLoaded)
                );
            };

            var onFileLoaded = function() {
                loadedFiles ++;

                if (numFiles == loadedFiles && typeof callback == 'function') {
                    callback.call(scope);
                } else {
                    if (preserveOrder === true) {
                        loadFileIndex(loadedFiles);
                    }
                }
            };

            if (preserveOrder === true) {
                loadFileIndex.call(this, 0);
            } else {
                Ext.each(fileList, function(file, index) {
                    fragment.appendChild(
                        this.buildScriptTag(file, onFileLoaded)
                    );
                }, this);

                head.appendChild(fragment);
            }
        },

        buildScriptTag: function(filename, callback) {
            var script  = document.createElement('script');
            script.type = "text/javascript";
            script.src  = filename;

            if (script.readyState) {
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = callback;
            }

            return script;
        }
    });

}

// }}}
// {{{ Function.prototype.createCallback

// for Sencha Touch
if(Ext.isSenchaTouch && !Function.prototype.createCallback) {

    Ext.apply(Function.prototype, {

        createCallback : function(/*args...*/){

            var args = arguments,
            method = this;

            return function() {
                return method.apply(window, args);
            };

        }

    });

}

// }}}
// {{{ Function.createSequence

// for Ext Core and Sencha Touch
if((Ext.isExtCore || Ext.isSenchaTouch) && !Function.prototype.createSequence) {

    Ext.apply(Function.prototype, {

        createSequence : function(fcn, scope){
            var method = this;
            return (typeof fcn != 'function') ?
                this :
                    function(){
                var retval = method.apply(this || window, arguments);
                fcn.apply(scope || this || window, arguments);
                return retval;
            };
        }

    });

}

// }}}
// {{{ Ext expand methods

/**
 * Ext expand methods
 */
Ext.applyIf(Ext,{

    // {{{ getMaxZindex

    /**
     * DOMツリー内のzindex最大値を取得します。
     *
     * @return zindex最大値
     */
    getMaxZindex : function() {

        var ret = 0;
        Ext.select('*').each(function(el){

            var zIndex = el.getStyle('z-index');
            if(Ext.isNumber(parseInt(zIndex, 10)) && ret < zIndex) {
                ret = zIndex;
            }

        }, this);

        return ret;
    },

    // }}}
    // {{{ getScrollPos

    /**
     * スクロール位置取得
     *
     * @return Object x:x位置 y:y位置
     */
    getScrollPos: function() {

        var y = (document.documentElement.scrollTop > 0) ? document.documentElement.scrollTop : document.body.scrollTop;
        var x = (document.documentElement.scrollLeft > 0) ? document.documentElement.scrollLeft : document.body.scrollLeft;

        return {
            x: x,
            y: y
        };

    }

    // }}}

});

// }}}


/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// for Ext Core
if(Ext.isExtCore) {

    Ext.Element.addMethods({

        getSize : function(contentSize){
            return {width: this.getWidth(contentSize), height: this.getHeight(contentSize)};
        }

    });

}

// for Ext Core and Sencha Touch
if(Ext.isExtCore || Ext.isSenchaTouch) {

    Ext.Element.addMethods({

        setLeftTop : function(left, top){
            var me = this,
            style = me.dom.style;
            style.left = me.addUnits(left);
            style.top = me.addUnits(top);
            return me;
        },

        getStyles : function(){
            var ret = {};
            Ext.each(arguments, function(v) {
               ret[v] = this.getStyle(v);
            },
            this);
            return ret;
        }

    });

}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// for Ext Core and Sencha Touch
if(Ext.isExtCore || Ext.isSenchaTouch) {

    Ext.util.TextMetrics = function(){
        var shared;
        return {
            measure : function(el, text, fixedWidth){
                if(!shared){
                    shared = Ext.util.TextMetrics.Instance(el, fixedWidth);
                }
                shared.bind(el);
                shared.setFixedWidth(fixedWidth || 'auto');
                return shared.getSize(text);
            },

            createInstance : function(el, fixedWidth){
                return Ext.util.TextMetrics.Instance(el, fixedWidth);
            }
        };
    }();

    Ext.util.TextMetrics.Instance = function(bindTo, fixedWidth){
        var ml = new Ext.Element(document.createElement('div'));
        document.body.appendChild(ml.dom);
        ml.position('absolute');
        ml.setLeftTop(-1000, -1000);
        ml.hide();

        if(fixedWidth){
            ml.setWidth(fixedWidth);
        }

        var instance = {

            getSize : function(text){
                ml.update(text);
                var s = ml.getSize();
                ml.update('');
                return s;
            },

            bind : function(el){
                ml.setStyle(
                    Ext.fly(el).getStyles('font-size','font-style', 'font-weight', 'font-family','line-height', 'text-transform', 'letter-spacing')
                );
            },

            setFixedWidth : function(width){
                ml.setWidth(width);
            },

            getWidth : function(text){
                ml.dom.style.width = 'auto';
                return this.getSize(text).width;
            },

            getHeight : function(text){
                return this.getSize(text).height;
            }
        };

        instance.bind(bindTo);

        return instance;
    };

    Ext.Element.addMethods({
        getTextWidth : function(text, min, max){
            return (Ext.util.TextMetrics.measure(this.dom, Ext.value(text, this.dom.innerHTML, true)).width).constrain(min || 0, max || 1000000);
        }
    });
}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Namespaces

Ext.ns(
    'Trick.app',
    'Trick.util',
    'Trick.test',
    'Trick.test.unit',
    'Trick.test.case',
    'Trick.test.case.core',
    'Trick.test.case.touch'
);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.util.clone

Trick.util.clone = function(obj) {

    // {{{ doClone

    function doClone(o) {

        if (!o || 'object' !== typeof o) {
            return o;
        }

        if ('function' === typeof o.clone) {
            return o.clone();
        }

        if (o.hasOwnProperty('__clonedTo')) {
            return o.__clonedTo;
        }

        var c = '[object Array]' === Object.prototype.toString.call(o) ? [] : {};

        o.__clonedTo = c;

        var p, v;

        for (p in o) {

            if ((p !== '__clonedTo') && o.hasOwnProperty(p)) {

                v = o[p];

                if (v && 'object' === typeof v) {
                    c[p] = doClone(v);
                } else {
                    c[p] = v;
                }
            }
        }

        return c;
    }

    // }}}
    // {{{ finalizeClone

    function finalizeClone(o) {

        if (o.hasOwnProperty('__clonedTo')) {

            delete o.__clonedTo;

            var p, v;

            for (p in o) {

                if (o.hasOwnProperty(p)) {

                    v = o[p];

                    if (v && 'object' === typeof v) {
                        finalizeClone(v);
                    }
                }
            }
        }
    }

    // }}}

    var clone = doClone(obj);
    finalizeClone(obj);

    return clone;
};

// }}}
// {{{ Shorthand

Trick.clone = Trick.util.clone;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.test.unit.TestCase

/**
 * Trick.test.unit.TestCase
 *
 * テストケースクラス
 */
Trick.test.unit.TestCase = function(o) {

    var me = this,
        ret;

    switch(Trick.testingFramework.name) {

        // {{{ YUI Test

        case 'yui':

            // テストケース生成
            ret = new YAHOO.tool.TestCase(o);

            // assetメソッドショートハンド
            ret.assert = YAHOO.util.Assert;

            break;

        // }}}

    }

    return ret;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.test.unit.TestLogger

/**
 * Trick.test.unit.TestLogger
 *
 * テストロガークラス
 */
Trick.test.unit.TestLogger = function(id) {

    var me = this,
        ret;

    switch(Trick.testingFramework.name) {

        // YUI Test
        case 'yui':

            // テストロガークラス生成
            ret = new YAHOO.tool.TestLogger(id);

            break;
    }

    return ret;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.test.unit.Runner

/**
 * Trick.test.unit.TestRunner
 *
 * テストランナークラス
 */
Trick.test.unit.TestRunner = function() {

    var me = this,
        runner;

    return {

        // {{{ _runner

        _runner : function() {

            if(!runner) {

                // テストランナーオブジェクト生成
                switch(Trick.testingFramework.name) {

                    // YIU Test
                    case 'yui':
                        runner = YAHOO.tool.TestRunner;
                    break;
                }

            }

            return runner;
        },

        // }}}
        // {{{ add

        /**
         * テストケース/スイート追加メソッド
         *
         * @param t Ext.trick.unit.TestCase/Ext.trick.unit.TestSuite テストランナーに追加するオブジェクトを設定します。
         * @return void
         */
        add : function (t) {

            var me = this;

            switch(Trick.testingFramework.name) {

                // YUI Test
                case 'yui':
                    me._runner().add(t);
                    break;
            }
        },

        // }}}
        // {{{ run

        /**
         * テスト実行メソッド
         *
         * @return void
         */
        run : function() {

            var me = this;

            switch(Trick.testingFramework.name) {

                // YUI Test
                case 'yui':
                    me._runner().run();
                    break;
            }
        }

        // }}}
    };

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.test.unit.TestSuite

/**
 * Trick.test.unit.TestSuite
 *
 * テストスイートクラス
 */
Trick.test.unit.TestSuite = function(name) {

    var me = this,
        ret;

    switch(Trick.testingFramework.name) {

        // YUI Test
        case 'yui':

            // テストケース生成
            ret = new YAHOO.tool.TestSuite(name);

            break;
    }

    return ret;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.app.App

/**
 * Trick.app.App Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 0.5.0
 */
Trick.app.App = function() {

    var me = this,
        setupConfig = {};

    return {

        // {{{ setup

        /**
         * setup
         *
         * セットアップメソッド
         */
        setup : function(config) {

            setupConfig = Trick.util.clone(config);
            config.onReady = config.onReady || Ext.emptyFn;

            // Ext.Directプロバイダ設定
            if(Ext.isExtJS && config.directProvider) {
                Ext.Direct.addProvider(config.directProvider);
            }

            // エントリーポイント設定
            if(Ext.isSenchaTouch) {
                Ext.setup(config);
            } else {
                Ext.onReady(
                    config.onReady,
                    config.scope || window,
                    config.onReadyOption
                );
            }

            Trick.app.App.setupConfig = setupConfig;

        }

        // }}}

    };

}();

// }}}
// {{{ Shorthand

Application = Trick.app.App;
Trick.setup = Trick.app.App.setup;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.app.LoadingMaskMgr

/**
 * Trick.app.LoadingMaskMgr Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 0.5.0
 */
Trick.app.LoadingMaskMgr = function(){

    return {

        // {{{ remove

        /**
         * ローディングマスク削除メソッド
         *
         * @param o フェードアウトコンフィグオブジェクト
         */
        remove : function(o) {

            o = o || {};

            var mask = Ext.get('OMEGATRICK_LOADINGMASK'),
                logo = Ext.get('OMEGATRICK_LOADING_LOGO'),
                progress = Ext.get('OMEGATRICK_LOADING_PROGRESS');

            if(logo) {
                logo.fadeOut(o);
            }

            if(progress) {
                progress.fadeOut({
                    callback: function() {
                        progress.remove();
                        if(mask) {
                            mask.fadeOut(0);
                        }
                    }
                });
            }

        },

        // }}}
        // {{{ setText

        /**
         * テキスト設定メソッド
         *
         * @param text 設定文字列
         */
        setText : function(text, iconWidth) {

            iconWidth = iconWidth || 32;
            var wrap = Ext.get('OMEGATRICK_LOADING_PROGRESS'),
                to = Ext.get('OMEGATRICK_LOADING_PROGRESS_MSG'),
                tm = Ext.util.TextMetrics.createInstance(wrap),
                width = tm.getWidth(text)+iconWidth;

            wrap.setWidth(width);
            wrap.setStyle({
                marginLeft: '-' + (width/2) + 'px'
            });

            to.update('<span>' + text + '</span>');

        },

        // }}}
        // {{{ showText

        /**
         * ローディングテキスト表示メソッド
         *
         * @param o コンフィグオブジェクト
         * @return void
         */
        showText : function(o) {

            var wrap = Ext.get('OMEGATRICK_LOADING_PROGRESS'),
                config = o || {};

            if(config.anim === false) {
                wrap.show();
            } else {
                wrap.fadeIn(config);
            }
        },

        // }}}
        // {{{ hideText

        /**
         * ローディングテキスト非表示メソッド
         *
         * @param o コンフィグオブジェクト
         * @return void
         */
        hideText : function(o) {

            var wrap = Ext.get('OMEGATRICK_LOADING_PROGRESS'),
                config = o || {};

            if(config.anim === false) {
                wrap.hide();
            } else {
                wrap.fadeOut(config);
            }
        }

        // }}}

    };

}();

// }}}
// {{{ Shorthand

Application.LoadingMask = Trick.app.LoadingMaskMgr;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
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
            text : '認証中...',
            complete : '認証完了'
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
                dialog: Trick.SigninDialog
            });

            // ローディングマスクテキスト更新
            lm.setText(me.msg.text);

            // サインイン状態確認
            o.directFn.isSignin(function(ret) {

                if(ret) {

                    // ローディングマスクテキスト更新
                    lm.setText(me.msg.complete);

                    // ローディングマスク解除
                    lm.remove();

                } else {

                    // 自動サインイン処理




                    // ダイアログ表示
                    me._showDialog(o);

                }

            });
            /*
            o.directFn.auth('omega', 'trick', function(ret) {

                alert(ret);

            });
            */

        },

        // }}}
        // {{{ _showDialog

        _showDialog : function (o) {

            o = o || {};
            var me = this;
            var lm = Application.LoadingMask;
            var dlg = new o.dialog();

            // ローディングテキスト非表示
            lm.hideText({
                callback : function() {

                    dlg.show();

                }
            });

        }

        // }}}

    }

    // }}}

}();

Ext.apply(Trick.app.AccountMgr, new Ext.util.Observable());

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
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */


/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
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

            // フォームオブジェクト
            forms: {},

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
            '                       <table class="form">',
            '                       <tbody>',
            '                       <tr>',
            '                           <th>{labelUserId}</th>',
            '                           <td class="userid"></td>',
            '                       </tr>',
            '                       <tr>',
            '                           <th>{labelPassword}</th>',
            '                           <td class="passwd"></td>',
            '                       </tr>',
            '                       <tr>',
            '                           <th>&nbsp;</th>',
            '                           <td class="auto-signin"></td>',
            '                       </tr>',
            '                       <tr>',
            '                           <th>&nbsp;</th>',
            '                           <td class="btn-signin"></td>',
            '                       </tr>',
            '                       </tbody>',
            '                       </table>',
            '                    </div>',
            '                </div>',
            '            </div>',
            '        </div>',
            '    </div>',
            '</div>',
            '<div class="forget">',
            '    <a href="{forgetUrl}">{msgForgetPass}</a>',
            '</div>'
        );
        t.append(el, {
            bodyCls: me.bodyCls,
            innerCls: me.innerCls,
            itemsCls: me.itemsCls,
            itemsInnerCls: me.itemsInnerCls,
            headerCls: me.headerCls,
            contentCls: me.contentCls,
            title: Trick.SigninDialog.msg.signin.title,
            labelUserId: Trick.SigninDialog.msg.signin.labels.userid,
            labelPassword: Trick.SigninDialog.msg.signin.labels.password,
            msgForgetPass: Trick.SigninDialog.msg.signin.forget.text,
            forgetUrl: Trick.SigninDialog.msg.signin.forget.url
        });
        me.body = Ext.get(el.child('.' + me.bodyCls));
        me.bodyInner = Ext.get(me.body.child('.' + me.innerCls));
        me.bodyItems = Ext.get(me.body.child('.' + me.itemsCls));
        me.header = Ext.get(me.body.child('.' + me.headerCls));
        me.forget = Ext.get(el.child('.forget'));

        me.forget.setOpacity(0);

        // フォームレンダリング
        me._renderForms();

        // レンダリングフラグ設定
        this.rendered = true;

        // イベント初期化
        me.initEvents();
    },

    // }}}
    // {{{ _renderForms

    _renderForms : function() {

        var me = this;
        var useridContainer = Ext.get(me.body.child('.form .userid'));
        var passwdContainer = Ext.get(me.body.child('.form .passwd'));
        var autosigninContainer = Ext.get(me.body.child('.form .auto-signin'));
        var btnsigninContainer = Ext.get(me.body.child('.form .btn-signin'));

        // ユーザーID/メールアドレステキストフィールド生成
        me.forms.userid = new Ext.form.TextField({
            tabIndex: 1,
            allowBlank: false,
            enableKeyEvents: true,
            validationEvent: false,
            validator : function(v) {
                if (v == '') {
                    return Trick.SigninDialog.msg.signin.validate.email;
                }
                return true;
            },
            listeners: {
                keypress: {
                    fn: function(field, e) {
                        if (e.getKey() === e.ENTER) {
//                            me.onSignin();
                        }
                    },
                    scope: me
                }
            },
            renderTo: useridContainer
        });

        // パスワードテキストフィールド生成
        me.password = new Ext.form.TextField({
            inputType: 'password',
            tabIndex: 2,
            enableKeyEvents: true,
            listeners: {
                keypress: {
                    fn: function(field, e) {
                        if (e.getKey() === e.ENTER) {
                            me.onSignin();
                        }
                    },
                    scope: me
                }
            },
            renderTo: passwdContainer
        });

        // チェックボックス生成
        me.autosignin = new Ext.form.Checkbox({
            boxLabel : Trick.SigninDialog.msg.signin.labels.autosignin,
            tabIndex: 3,
            renderTo: autosigninContainer
        });

        // サインインボタン生成
        me.submit = new Ext.Button({
            text: Trick.SigninDialog.msg.signin.labels.submit,
            type: 'submit',
            tabIndex: 4,
            /*plugins: ['focusactive'],*/
            handler: me.onSignin,
            scope: me,
            renderTo: btnsigninContainer
        });





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

                // パスワード紛失要素フェードイン
                me.forget.fadeIn({
                    duration: me.duration
                });

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
        title: 'OmegaTrickにサインイン',
        labels: {
            userid: 'ユーザーID',
            password: 'パスワード',
            autosignin: '1 週間サインインし続ける',
            submit: 'サインイン'
        },
        validate: {
            email: 'ユーザIDを入力してください。'
        },
        forget: {
            text: 'パスワード紛失',
            url: 'forget.html'
        }
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
