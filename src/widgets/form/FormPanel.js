/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Trick.form.FormPanel

/**
 * Trick.form.FormPanel Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 0.5.0
 */
Trick.form.FormPanel = Ext.extend(Ext.form.FormPanel, {

    // {{{ initialFormData

    initialFormData : {},

    // }}}
    // {{{ dirty

    dirty: false,

    // }}}
    // {{{ plugins

    plugins: ['t.xitems', 't.xforms', 't.CompositeFieldFix'],

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this;

        // 多階層初期値設定
        me.setDeepDefault(me.initialConfig.items);

        // xformsプラグイン初期化イベントリスナー追加
        me.on('initxforms', me.onInitXForms, me);

        // データ変更イベントリスナー追加
        me.on('dirty', function() {
            Application.beforeunload = Application.beforeunloadMsg;
        }, me);
        me.on('undirty', function() {
            Application.beforeunload = false;
        }, me);

        // スーパークラスメソッドコール
        Trick.form.FormPanel.superclass.initComponent.apply(me, arguments);

    },

    // }}}
    // {{{ onChangeData

    /**
     * データ変更イベントハンドラ
     */
    onChangeData : function(form) {

        var me = this;
        var name = form.xname;
        var dirty = false;

        Ext.iterate(me.xforms, function(name, form) {

            var val = me.initialFormData[name];

            if(val !== form.getValue()) {

                // ダーティーフラグ更新
                dirty = true;

                return false;
            }
        });

        me.dirty = dirty;
        if(dirty) {
            me.fireEvent('dirty');
        } else {
            me.fireEvent('undirty');
        }

    },

    // }}}
    // {{{ onInitXForms

    /**
     * xformsプラグイン初期化イベントハンドラ
     */
    onInitXForms : function() {

        var me = this;

        Ext.iterate(me.xforms, function(name, form) {

            if(form instanceof Ext.form.Field) {
                form.on('change', me.onChangeData, me);
                form.on('keyup', me.onChangeData, me);
            }

            me.initialFormData[name] = '';

        });

    },

    // }}}
    // {{{ setFormData

    /**
     * フォームデータ設定メソッド
     *
     * @param data 設定データオブジェクト
     * @param force 強制的に変更状態を初期化します。(初期値:true)
     */
    setFormData : function(data, force) {

        var me = this;
        force = force || true;

        Ext.iterate(data, function(name, val) {
            me.xforms[name].setValue(val);
        });

        if(force) {
            me.initialFormData = data;
            me.dirty = false;
            me.fireEvent('undirty');
        }

    },

    // }}}
    // {{{ getFormData

    /**
     * フォームデータ取得メソッド
     */
    getFormData : function() {

        var me = this;
        var ret = {};

        Ext.iterate(me.xforms, function(name, form) {
            ret[name] = form.getValue();
        });

        return ret;

    },

    // }}}
    // {{{ setDeepDefault

    /**
     * 多階層デフォルトオブジェクト適用メソッド
     */
    setDeepDefault : function(items) {

        var me = this;

        Ext.each(items, function(item, cnt, items) {

            Ext.applyIf(item, me.xdefault);

            if(item && item.items && item.items.length > 0) {
                me.setDeepDefault(item.items);
            }
        });

    }

    // }}}

});

// }}}
// {{{ Shorthand

Trick.FormPanel = Trick.form.FormPanel;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
