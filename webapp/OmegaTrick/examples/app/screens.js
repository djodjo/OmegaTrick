/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * Screens Application Sample
 */
Ext.onTrick({

    // {{{ screens
   
    /**
     * スクリーン定義
     */
    screens: [{
        dashboard: true,
        name: 'Dashboard'
    },{
        name: 'ScreenA'
    },{
        name: 'ScreenB'
    },{
        name: 'ScreenC'
    }],

    // }}}
    // {{{ start

    /**
     * 開始メソッド
     */
    start : function() {
        alert("アプリケーション開始"); 
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

