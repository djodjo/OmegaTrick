/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.SearchPanel

/**
 * Ext.trick.parts.SearchPanel Class for enhancing
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.SearchPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    /**
     * コンポーネント初期化
     */
    initComponent : function() {

        var me = this;


        // スーパークラスコンストラクタコール
        Ext.trick.parts.SearchPanel.superclass.initComponent.call(me);
    }

    // }}}

});

// {{{ Register xtype

Ext.reg('trick-search', Ext.trick.parts.SearchPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

