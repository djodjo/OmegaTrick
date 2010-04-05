/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.app',
    'Ext.trick.layout',
    'Ext.trick.unit',
    'Ext.trick.util'
);

// }}}
// {{{ Ext.trick.app.App

/**
 * Ext.trick.app.App Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.app.App = Ext.extend(Ext.util.Observable, {

    // {{{ appName

    /**
     * アプリケーション名設定
     */
    appName: null,

    // }}}
    // {{{ autoRender

    /**
     * 自動レンダリング設定
     */
    autoRender: true,

    // }}}
    // {{{ screenXTypePrefix

    /**
     * スクリーンXType接頭辞
     */
    screenXTypePrefix: '',

    // }}}
    // {{{ screens

    /**
     * スクリーン配列
     */
    screens: [],

    /**
     * ケーシングオブジェクト
     */
    casing: {},

    // }}}
    // {{{ initEvents
    
    /**
     * イベント初期化メソッド
     *
     * @return void
     */
    initEvents : function() {

        var me = this;

        me.addEvents(
            'beforeinit',
            'init',
            'beforestart',
            'start',
            'beforeloadscript',
            'loadscript'
        );

        me.on('init', me.removeScriptTags, me);
        if(me.autoRender) {
            me.on('init', me.render, me);
        } else {
            me.on('init', me.start, me);
        }
    },

    // }}}
    // {{{ removeScriptTags
    
    /**
     * スクリプトタグ削除メソッド
     */
    removeScriptTags : function() {
  
        var me = this;
        
        // スクリプトタグ削除
        Ext.select('body script').each(function(el) {
            Ext.removeNode(Ext.getDom(el));
        }, me);
                   
    },
    
    // }}}
    // {{{ screenTo

    /**
     * スクリーン切り替えメソッド
     */
    screenTo : function(to) {
      
        var me = this,
            sp = Ext.getCmp(me.appName + '_SCREEN'),
            t; 

        if(Ext.isNumber(to)) {
            Ext.iterate(sp.initialConfig.items, function(item, cnt, items) {
                if(to === cnt) {
                    t = item;
                }     
            });
        }
        if(Ext.isString(to)) {
            Ext.iterate(sp.initialConfig.items, function(item, cnt, items) {
                if(to === item.id) {
                    t = item;
                }     
            }); 
        }

        if(t && t.fix) {
            sp.layout.setActiveItem(to);
        } else {

            var scripts = [];

            if(t.scriptItems) {
                scripts = scripts.concat(t.scriptItems); 
            } else {
                scripts.push({
                    src: 'screens/' + t.name + '.js'
                }); 
            }

            var loader = new Ext.trick.util.ScriptLoader({
                items: scripts
            }); 

            loader.on('load', function() {
            
                sp.layout.setActiveItem(to);
                me.viewport.el.unmask();
                me.removeScriptTags();
            });

            me.viewport.el.mask('読み込み中');
            

            loader.load();
        }


    },

    // }}}
    // {{{ init

    /**
     * 初期化メソッド
     */
    init : function() {
        
        var me = this;

        // イベント初期化
        me.initEvents();

        if(!me.fireEvent('beforeinit')) {
            return false;
        }

        var scripts = [];
        Ext.iterate(me.screens, function(item, cnt, items) {

            // Fix用スクリプト一覧作成    
            if(item.fix) {
                if(item.items) {
                    scripts = scripts.concat(item.items); 
                } else {
                    scripts.push({
                        src: 'screens/' + item.name + '.js'
                    }); 
                }
            }
        });

        if(scripts.length > 0) {
            var loader = new Ext.trick.util.ScriptLoader({
                items: scripts        
            });
            loader.on('load', function() {
                if(me.fireEvent('loadscript')) {
                    me.fireEvent('init');
                }
            });

            if(me.fireEvent('beforeloadscript')) {
                loader.load();
            }
        } else {
            me.fireEvent('init');
        }
    },
    
    // }}}
    // {{{ render

    /**
     * レンダリングメソッド
     */
    render : function() {
             
        var me = this,
            renderItems;
        
        // スクリーンアイテム配列生成
        var screens = [];
        Ext.iterate(me.screens, function(item, cnt, items) {

            var o = {
                name: item.name,
                xtype: me.screenXTypePrefix + item.name.toLowerCase()   
            };
           
            if(item.items) {
                o.scriptItems = item.items;
            } 

            if(item.fix) {
                o.fix = true;
            }
            if(item.id) {
                o.id = item.id;
            }
            screens.push(o);

        }, me);

        // レンダリングアイテム設定
        renderItems = [{
            id: me.appName + '_SCREEN',
            xtype: 'screen',
            items: screens,
            region: 'center'
        }];
       
        // ケーシング設定
        if(Ext.isObject(me.casing) && me.casing.north) {
            var north = me.casing.north;
            north.region = 'north';
            renderItems.push(north);
        }
        if(Ext.isObject(me.casing) && me.casing.west) {
            var west = me.casing.west;
            west.region = 'west';
            renderItems.push(west);
        }
        if(Ext.isObject(me.casing) && me.casing.east) {
            var east = me.casing.east;
            east.region = 'east';
            renderItems.push(east);
        }
        if(Ext.isObject(me.casing) && me.casing.south) {
            var south = me.casing.south;
            south.region = 'east';
            renderItems.push(south);
        }

        // ビューポート生成
        me.viewport = new Ext.Viewport({
            layout: 'fit',
            items: [{
                border: false,
                layout: 'border',
                items: renderItems
            }],
            listeners: {
                afterrender: {
                    fn: function() {
                        me.start.call(me);
                    }
                }
            }
        });
    },

    // }}}
    // {{{ start

    /**
     * 開始メソッド
     */
    start : Ext.emptyFn

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

