Ext.trick.layout.ScreenLayout=Ext.extend(Ext.layout.FitLayout,{deferredRender:false,layoutOnCardChange:false,renderHidden:true,constructor:function(config){Ext.trick.layout.ScreenLayout.superclass.constructor.call(this,config)},setActiveItem:function(item){var me=this,ai=me.activeItem,oi=item;item=me.container.getComponent(item);if(!item){me.container.activeItem=oi;delete me.container.items;me.container.items=me.container.initialConfig.items;item=me.container.add(me.container.initialConfig.items);
item=item.pop()}if(ai!=item){if(ai)ai.destroy();var layout=item.doLayout&&(me.layoutOnCardChange||!item.rendered);this.activeItem=item;if(item)item.show();me.layout();if(item&&layout)item.doLayout();item.fireEvent("activate",item)}},renderAll:function(ct,target){var me=this;if(me.deferredRender)me.renderItem(me.activeItem,undefined,target);else Ext.trick.layout.ScreenLayout.superclass.renderAll.call(me,ct,target)}});Ext.Container.LAYOUTS["screen"]=Ext.trick.layout.ScreenLayout;Ext.trick.ScreenPanel=Ext.extend(Ext.Panel,{initComponent:function(){Ext.trick.ScreenPanel.superclass.initComponent.call(this)},add:function(comp){var me=this;me.initItems();var args=arguments.length>1;if(args||Ext.isArray(comp)){var result=[];Ext.each(args?arguments:comp,function(c,num){if(num==me.activeItem||c.id==me.activeItem){me.items=false;result.push(me.add(c))}},me);return result}var c=me.lookupComponent(me.applyDefaults(comp));var index=this.items.length;if(me.fireEvent("beforeadd",me,c,
index)!==false&&me.onBeforeAdd(c)!==false){me.items.add(c);c.onAdded(me,index);me.onAdd(c);me.fireEvent("add",me,c,index)}return c}});Ext.reg("screen",Ext.trick.ScreenPanel);