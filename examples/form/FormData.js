/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

Application.setup({

    // {{{ onReady

    onReady : function() {

        // スクリプトタグ消去
        Trick.removeScriptTags();

        // Trick.form.FormPanel生成
        var p = new Trick.form.FormPanel({
            id: 'DataForm',
            title: 'Data set/get for Trick.form.FormPanel',
            padding: 20,
            layout:'column',
            buttons: [{
                text: 'データ設定',
                handler: function() {

                    var df = Ext.getCmp('DataForm');

                    df.setFormData({
                        field1: 'Text1',
                        field2: 'Text2',
                        field3: 'Text3',
                        field4: 'Text4',
                        title: 'Text5',
                        firstName: 'Text6',
                        lastName: 'Text7'
                    });

                }
            },{
                text: 'データ取得',
                handler: function() {

                    var df = Ext.getCmp('DataForm');

                    var data = df.getFormData();

                    var output = Ext.get('output');
                    var text = '';

                    Ext.iterate(data, function(name, val) {
                        text += name + ':' + val + '<br />';
                    });

                    output.update(text);

                }
            }],
            xdefault: {
                xtype: 'container',
                layout: 'form'
            },
            items: [{
                columnWidth: .5,
                xitems: [
                    'Field1',
                    'Field2',
                    'CompositeField1'
                ]
            },{
                width: 25,
                html: '&nbsp'
            },{
                columnWidth: .5,
                layout:'column',
                items: [{
                    columnWidth: .5,
                    xitems: [
                        'Field3'
                    ]
                },{
                    width: 25,
                    html: '&nbsp'
                },{
                    columnWidth: .5,
                    xitems: [
                        'Field4'
                    ]
                }]
            }],
            renderTo: Ext.get('renderarea')
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
