/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

Ext.ns(
    'ScreenExamples',
    'ScreenExamples.ScreenA'    
);

ScreenExamples.ScreenA.ScreenPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    initComponent : function() {
    
        var me = this;

        // スーパークラスメソッドコール
        ScreenExamples.ScreenA.ScreenPanel.superclass.initComponent.call(me);
    }

    // }}}        
        
});

Ext.reg('screena', ScreenExamples.ScreenA.ScreenPanel);

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */


