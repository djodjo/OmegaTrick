/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Ext.trick.app.Entry

/**
 * Ext.trick.app.Entry Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.app.Entry = function() {

    var me = this,
        apps = {};

    return {

        // {{{ add
        
        /**
         * アプリケーション追加メソッド
         *
         * @param app Ext.trick.app.Appオブジェクト
         * @return アプリケーションID
         */
        add : function(app) {

            var id = Ext.id(null, 'OmegaTrickApp');
            
            apps[id] = new app();
        },

        // }}}
        // {{{ remove

        /**
         * アプリケーション削除メソッド
         *
         * @param id アプリケーションID
         * @return true:成功, false:アプリケーションが存在しない
         */
        remove : function(id) {
       
            if(aps[id]) {
                delete apps[id];
            }
        },

        // }}}
        // {{{ boot

        /**
         * エントリー起動メソッド
         *
         * return void
         */
        boot : function() {
            Ext.iterate(apps, function(key, item, items) {
                item.init();
            });
        }

        // }}}

    };

}();

// }}}
// {{{ Omega Trick Application Entry

/**
 * Omega Trick Application Entry
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.onReady(Ext.trick.app.Entry.boot);

// }}}
// {{{ Ext.onTrick

/**
 * Omega Trick Application Entry
 *
 * @param o アプリケーションクラスオブジェクト
 */
Ext.onTrick = function(o) {
   return Ext.trick.app.Entry.add(Ext.extend(Ext.trick.app.App, o));
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

