/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.test',
    'Ext.trick.test.unit',
    'Ext.trick.test.unit.util'
);

// }}}
// {{{ Ext.trick.test.unit.util.clone

/**
 * Ext.trick.test.unit.util.cloneオブジェクト
 *
 */
Ext.trick.test.unit.util.clone = new Ext.trick.unit.TestCase({

    // TestCase名
    name: "Ext.trick.test.unit.util.clone",

    // {{{ testCloneObject

    /**
     * オブジェクトクローンテスト
     */
    testCloneObject : function() {
    
        var me = this;
       
        // コピー元のオブジェクト生成
        var src = {
            sdata: 'string data',
            ndata: 999,
            bdata: true,
            adata: ['item1', 'item2', 'item3']
        };

        // クローンで作成されたオブジェクトと比較し別物であることを確認
        me.assert.areNotEqual(src, Ext.trick.util.clone(src));

        // プロトタイプ経由でクローン生成し比較
        me.assert.areNotEqual(src, src.clone());

        // クローンオブジェクト生成
        var dest = src.clone();

        // sdata が一致していることを確認
        me.assert.areEqual(src.sdata, dest.sdata);

        // ndata が一致していることを確認
        me.assert.areEqual(src.ndata, dest.ndata);

        // bdata が一致していることを確認
        me.assert.areEqual(src.bdata, dest.bdata);
    
        // adata 自身が一致しないことを確認
        me.assert.areNotEqual(src.adata, dest.adata);

        // adata の値が一致していることを確認
        Ext.iterate(src.adata, function(item, cnt, items){
            me.assert.areEqual(item, dest.adata[cnt]);
        });

        // dest 側の値を変更
        dest.sdata = 'string data dest';
        dest.ndata = 777;
        dest.bdata = false;
        dest.adata = ['dest1', 'dest2'];

        // src 側のデータは変更されていないことを確認
        me.assert.areEqual(src.sdata, 'string data');
        me.assert.areEqual(src.ndata, 999);
        me.assert.areEqual(src.bdata, true);
        me.assert.areEqual(src.adata[0], 'item1');
        me.assert.areEqual(src.adata[1], 'item2');
        me.assert.areEqual(src.adata[2], 'item3');

        // dest 側のデータが変更されていることを確認
        me.assert.areEqual(dest.sdata, 'string data dest');
        me.assert.areEqual(dest.ndata, 777);
        me.assert.areEqual(dest.bdata, false);
        me.assert.areEqual(dest.adata[0], 'dest1');
        me.assert.areEqual(dest.adata[1], 'dest2');

    }

    // }}}
    
});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

