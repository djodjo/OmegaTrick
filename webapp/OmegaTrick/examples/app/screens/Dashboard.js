/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

Ext.ns(
    'ScreenExamples',
    'ScreenExamples.Dashboard'
);

ScreenExamples.Dashboard.ScreenPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    initComponent : function() {

        var me = this;

        Ext.apply(me, {
            id: 'Dashboard',
            title: 'Dashboard'
        });

        // スーパークラスメソッドコール
        ScreenExamples.Dashboard.ScreenPanel.superclass.initComponent.call(me);
    }

    // }}}

});

Ext.reg('dashboard', ScreenExamples.Dashboard.ScreenPanel);

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

