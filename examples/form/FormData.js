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
            collapsible: true,
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
                        field3: '12345',
                        field4: '12:00 AM',
                        field5: '09/08/2010',
                        field6: '12',
                        field7: 'Text7',
                        field8: '',
                        field9: '<br><h1>Teston</h1><br>',
                        field10: 'item10',
                        checkbox: true,
                        color: 'green'
                    });

//        console.log(p.xforms.color.getValue());

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
            },{
                text: 'hiddenに値を設定',
                handler: function() {

                    var df = Ext.getCmp('DataForm');

                    df.setFormData({
                        field8: 'hiddendata'
                    });
                }
            }],
            xdefault: {
                xtype: 'container',
                layout: 'form'
            },
            items: [{
                columnWidth: .5,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'TextField',
                    enableKeyEvents: true,
                    xname: 'field1'
                },{
                    xtype: 'textarea',
                    fieldLabel: 'TextArea',
                    enableKeyEvents: true,
                    xname: 'field2'
                },{
                    xtype: 'numberfield',
                    fieldLabel: 'NumberField',
                    enableKeyEvents: true,
                    xname: 'field3'
                },{
                    xtype: 'timefield',
                    fieldLabel: 'TimeField',
                    enableKeyEvents: true,
                    xname: 'field4'
                },{
                    xtype: 'datefield',
                    fieldLabel: 'DateField',
                    enableKeyEvents: true,
                    xname: 'field5'
                },{
                    xtype: 'sliderfield',
                    fieldLabel: 'SliderField',
                    enableKeyEvents: true,
                    xname: 'field6'
                },{
                    xtype: 'trigger',
                    fieldLabel: 'TriggerField',
                    enableKeyEvents: true,
                    xname: 'field7'
                },{
                    xtype: 'hidden',
                    xname: 'field8'
                },{
                    xtype: 'htmleditor',
                    fiedlLabel: 'HtmlEditor',
                    enableKeyEvents: true,
                    xname: 'field9'
                },{
                    xtype: 'combo',
                    xname: 'field10',
                    fieldLabel: 'ComboBox',
                    typeAhead: true,
                    triggerAction: 'all',
                    lazyRender:true,
                    mode: 'local',
                    store: {
                        xtype: 'arraystore',
                        id: 0,
                        fields: [
                            'myId',
                            'displayText'
                        ],
                        data: [[0, ''], [1, 'item1'], [2, 'item2']]
                    },
                    valueField: 'myId',
                    displayField: 'displayText'
                }]
            },{
                width: 25,
                html: '&nbsp'
            },{
                columnWidth: .5,
                layout:'column',
                items: [{
                    xtype: 'checkbox',
                    xname: 'checkbox',
                    boxLabel: 'CheckBox'
                },{
                    xtype: 'radio',
                    xname: 'color',
                    name: 'color',
                    checked: true,
                    fieldLabel: 'Favorite Color',
                    boxLabel: 'Red',
                    inputValue: 'red'
                }, {
                    xtype: 'radio',
                    xname: 'color',
                    name: 'color',
                    fieldLabel: '',
                    labelSeparator: '',
                    boxLabel: 'Blue',
                    inputValue: 'blue'
                }, {
                    xtype: 'radio',
                    xname: 'color',
                    name: 'color',
                    fieldLabel: '',
                    labelSeparator: '',
                    boxLabel: 'Green',
                    inputValue: 'green'
                },]
            }],
            renderTo: Ext.get('renderarea')
        });

        p.on('dirty', function() {
            p.setTitle('[変更あり] Data set/get for Trick.form.FormPanel');
        });

        p.on('undirty', function() {
            p.setTitle('Data set/get for Trick.form.FormPanel');
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
