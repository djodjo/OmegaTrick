/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * Simples Application Sample
 */
Ext.onTrick({

    // {{{ autoRender

    autoRender: false,

    // }}}
    // {{{ start

    /**
     * 開始メソッド
     */
    start : function() {
        Ext.DomHelper.append(Ext.getBody(),{
            html: 'アプリケーション開始！'
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

