if(!Array.prototype.clone)Array.prototype.clone=function(){return Ext.trick.util.clone(this)};Ext.ns("Ext.trick");Ext.trick.Config=function(){var testingFrameworkName="yui";return{getTestingFrameworkName:function(){return testingFrameworkName},setTestingFrameworkName:function(name){testingFrameworkName=name}}}();Ext.apply(Ext,{maxZindex:function(){var ret=0;var els=Ext.select("*");els.each(function(el){var zIndex=el.getStyle("z-index");if(Ext.isNumber(parseInt(zIndex))&&ret<zIndex)ret=zIndex},this);return ret},getScrollPos:function(){var y=document.documentElement.scrollTop>0?document.documentElement.scrollTop:document.body.scrollTop;var x=document.documentElement.scrollLeft>0?document.documentElement.scrollLeft:document.body.scrollLeft;return{x:x,y:y}}});if(!Object.prototype.clone)Object.prototype.clone=function(){return Ext.trick.util.clone(this)};String.prototype.endsWith=function(suffix){var sub=this.length-suffix.length;return sub>=0&&this.lastIndexOf(suffix)===sub};