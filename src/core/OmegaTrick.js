/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

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
