/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

Ext.ns(
    'ScreenExamples',
    'ScreenExamples.ScreenB'
);

ScreenExamples.ScreenB.ScreenPanel = Ext.extend(Ext.trick.TrickPanel, {

    // {{{ initComponent

    initComponent : function() {

        var me = this;

        Ext.apply(me, {
            id: 'ScreenB',
            border: false,
            trick: 'list'
        });

        // スーパークラスメソッドコール
        ScreenExamples.ScreenB.ScreenPanel.superclass.initComponent.call(me);
    }

    // }}}

});

Ext.reg('screenb', ScreenExamples.ScreenB.ScreenPanel);

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */



