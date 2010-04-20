/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

Ext.onTrick({

    // {{{ useDirect

    /**
     * Ext Direct使用設定
     */
    useDirect: Ext.app.REMOTING_API,

    // }}}
    // {{{ autoRenader

    /**
     * 自動レンダリング設定
     */
    autoRender : false,

    // }}}
    // {{{ start

    start : function() {

        var p = new Ext.trick.TrickPanel({
            title: 'List Trick Unit - Ext.trick.TrickPanel',
            trick: 'unit',
            trickConfig: {
                list: {
                    ptbar: {
                        position: {
                            both: {
                                top: false,
                                bottom: true
                            }
                        }
                    },
                    searchBox: true
                }
            },
            width: 900,
            height: 500,
            renderTo: Ext.getBody()
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

