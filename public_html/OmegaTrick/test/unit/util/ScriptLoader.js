/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.test',
    'Ext.trick.test.unit',
    'Ext.trick.test.unit.util'
);

// }}}
// {{{ Ext.trick.test.unit.util.ScriptLoader

/**
 * Ext.trick.test.unit.util.ScriptLoaderオブジェクト
 *
 */
Ext.trick.test.unit.util.ScriptLoader = new Ext.trick.unit.TestCase({

    // TestCase名
    name: "Ext.trick.test.unit.util.ScriptLoader",

    // {{{ testSingleLoadScript

    /**
     * スクリプト読み込みテスト
     */
    testSingleLoadScript : function() {

        var me = this;
        var loader = new Ext.trick.util.ScriptLoader({
            items: [{
                src: 'http://localhost/~OmegaTrick/OmegaTrick/test/unit/util/LoadTest1.js',
                callback: function() {
                    me.assert.areEqual(Ext.trick.test.unit.util.LoadTest1(), 'LoadTest1 Loaded.');
                }
            }]    
        });

        // スクリプト読み込み
        loader.load();
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

