/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.test',
    'Ext.trick.test.unit',
    'Ext.trick.test.unit.util'
);

// }}}
// {{{ Ext.trick.test.unit.util.clone

/**
 * Ext.trick.test.unit.util.cloneオブジェクト
 *
 */
Ext.trick.test.unit.util.clone = new Ext.trick.unit.TestCase({

    // TestCase名
    name: "Ext.trick.test.unit.util.clone",

    testEqualityAsserts : function () {
        var Assert = YAHOO.util.Assert;
 
        Assert.areEqual(5, 5);     //passes
        Assert.areEqual(5, "5");     //passes
        Assert.areNotEqual(5, 6);  //passes
        Assert.areEqual(5, 6, "Five was expected."); //fails
    }
    
});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

