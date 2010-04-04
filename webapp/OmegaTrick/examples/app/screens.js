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
    // {{{ screens
   
    /**
     * スクリーン定義
     */
    screens: [{
        fix: true,
        name: 'Dashboard'
    },{
        fix: true,
        name: 'ScreenA',
        items: [{
            src: 'screens/ScreenA/item1.js'
        },{
            src: 'screens/ScreenA/item2.js'
        }]
    },{
        name: 'ScreenB'
    },{
        name: 'ScreenC'
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
                text: 'Dashboard'
            },{
                text: 'ScreenA'
            },{
                text: 'ScreenB'
            },{
                text: 'ScreenC'
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

