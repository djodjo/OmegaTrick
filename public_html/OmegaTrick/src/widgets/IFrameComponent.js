



Ext.trick.IFrameComponent = Ext.extend(Ext.BoxComponent, {

    onRender : function(ct, position){

        var me = this;

        if(me.url) {
            this.el = ct.createChild({tag: 'iframe', id: 'iframe-'+ this.id, frameBorder: 0, src: this.url, name: this.name});
        }
    }


});


Ext.reg('iframe', Ext.trick.IFrameComponent);
