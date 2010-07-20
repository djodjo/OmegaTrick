/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ OmegaTrick

/**
 * @class OmegaTrick
 *
 * OmegaTrick クラス
 *
 * OmegaTrick クラスは、無名関数内でExt.applyにより実装されます。
 * 従って、無名関数内で定義された変数はクロージャーとして
 * ガーベージコレクションの対象から外された状態で保持されます。
 * (クロージャー)
 *
 * @singleton
 */
OmegaTrick = {

    /**
     * バージョン情報
     * @type String
     */
    version : '0.5.0',
    versionDetail : {
        major: 0,
        minor: 5,
        patch: 0
    }

};

(function(){

    // OmegaTrickオブジェクト実装
    Ext.apply(OmegaTrick, {



    });

})();

// }}}
// {{{ Namespace

Ext.ns('OmegaTrick.app','OmegaTrick.util');

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
