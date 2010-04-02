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

        Ext.iterate(me.screens, function(item, cnt, items) {
            if(item.fix) {
                 
            }
        });
  
        return me.fireEvent('init');
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

