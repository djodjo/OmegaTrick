/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

Ext.onReady(function(){

    // xtypeはadvform
    // defaultTypeがcontainerに自動的に設定されます。
    // また、レイアウトはデフォルトでformが指定されます。
    // ネストしたフィールドも、formsプロパティで一括で参照することが可能です。

    var f = new Ext.trick.form.FormPanel({
        title: 'Advanced FormPanel',
        padding: 10,
        frame: true,
        items: [{
            xtype: 'textfield',
            name: 'item1',
            anchor: '100%',
            fieldLabel: 'Item1',
            value: 'アイテム１'
        },{
            layout:'column',
            items: [{
                columnWidth: .5,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    name: 'item2',
                    anchor: '95%',
                    fieldLabel: 'Item2',
                    value: 'アイテム２'
                }]
            },{
                columnWidth: .5,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    name: 'item3',
                    anchor: '100%',
                    fieldLabel: 'Item3',
                    value: 'アイテム３'
                }]
            }]
        }],
        buttons: [{
            text: 'OK',
            handler: function() {

                // ネストしたフォームレイアウトのアイテムもformsで取得することが可能です。
                Ext.iterate(f.forms, function(key, item, items){
                    console.log(arguments);
                    alert(key + ' : ' + item.getValue());
                });
            }
        }],
        width: 700,
        renderTo: Ext.getBody()
    });


    console.log(f.forms);
    console.log(f.formButtons);
});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

