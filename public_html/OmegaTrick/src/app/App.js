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
        me.on('init', me.start, me);

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
            if(item.fix)
            {

                if(item.items)
                {
                    scripts = scripts.concat(item.items); 
                }
                else
                {
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

