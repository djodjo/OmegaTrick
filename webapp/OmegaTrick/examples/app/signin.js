/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * Signin Application Sample
 */
Ext.onTrick({

    // {{{ appName

    /**
     * アプリケーション名設定
     */
    appName: 'SigninExample',
    
    // }}}
    // {{{ useDirect

    /**
     * Ext Direct使用設定
     */
    useDirect: Ext.app.REMOTING_API,

    // }}}
    // {{{ auth

    /**
     * 認証設定
     */
    auth: {
        directFn: 'OmegaTrick_Auth' 
    },

    // }}}
    // {{{ screens
   
    /**
     * スクリーン定義
     */
    screens: [{
        fix: true,
        id: 'Dashboard',
        name: 'Dashboard',
        loadText: 'ダッシュボード読み込み中...'
    },{
        fix: true,
        id: 'ScreenA',
        name: 'ScreenA',
        items: [{
            src: 'screens/ScreenA/item1.js',
            loadText: 'スクリーンA:item1.js 読み込み中...'
        },{
            src: 'screens/ScreenA/item2.js',
            loadText: 'スクリーンA:item2.js 読み込み中...'
        }]
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
                    SigninExample.screenTo('Dashboard');
                }
            },{
                text: 'ScreenA',
                handler: function(btn, e) {
                    SigninExample.screenTo('ScreenA');
                }
            },{
                text: 'ScreenB',
                handler: function(btn, e) {
                    SigninExample.screenTo('ScreenB');
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
