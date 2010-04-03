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
    // {{{ start

    /**
     * 開始メソッド
     */
    start : function() {

        // ビューポート生成
        new Ext.Viewport({
            layout: 'border',
            items: [{
                region: 'north',
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
            },{
                region: 'center',
                layout: 'fit',
                border: false,
                items: [{
                    title: "test"
                }]
            }]
        });            
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

