/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * Screens Application Sample
 */
Ext.onTrick({

    // {{{ appName

    /**
     * アプリケーション名設定
     */
    appName: 'ScreenExamples',

    // }}}
    // {{{ useDirect

    /**
     * Ext Direct使用設定
     */
    useDirect: Ext.app.REMOTING_API,

    // }}}
    // {{{ screens

    /**
     * スクリーン定義
     */
    screens: [{
        fix: true,
        id: 'Dashboard',
        name: 'Dashboard'
    },{
        fix: true,
        id: 'ScreenA',
        name: 'ScreenA'
    },{
        id: 'ScreenB',
        name: 'ScreenB'
    }],

    // }}}
    // {{{ casing

    /**
     * ケーシング設定
     */
    casing: {

        north: {
            border: false,
            tbar: [{
                text: 'Dashboard',
                handler: function(btn, e) {
                    ScreenExamples.screenTo('Dashboard');
                }
            },{
                text: 'ScreenA',
                handler: function(btn, e) {
                    ScreenExamples.screenTo('ScreenA');
                }
            },{
                text: 'ScreenB',
                handler: function(btn, e) {
                    ScreenExamples.screenTo('ScreenB');
                }
            }]
        }

    },

    // }}}
    // {{{ start

    /**
     * 開始メソッド
     */
    start : function() {
    }

    // }}}

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

