/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ OmegaTrick

Trick = {};

(function(){

    // OmegaTrick適用フラグ
    var isOmegaTrick = true;

    // バージョン情報
    var trick = {
        version : '0.5.0',
        versionDetail : {
            major : 0,
            minor : 5,
            patch : 0
        }
    };

    // Extオブジェクトに適用
    Ext.apply(Ext, {
        isOmegaTrick : isOmegaTrick,
        trick: trick
    });

    // グローバルオブジェクトへリンク
    Trick = Ext.trick;

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
