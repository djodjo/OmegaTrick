/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Ext.trick.test.unit.util.clone-runner

/**
 * Ext.trick.test.unit.util.clone-runner
 *
 * Ext.trick.test.unit.util.cloneテストケースを実行します。
 */
Ext.onReady(function(){

    // テストランナー生成
    var r = Ext.trick.unit.TestRunner;

    // Ext.trick.test.unit.util.clone テストケース追加
    //r.add(Ext.trick.test.unit.util.clone);

    // ロガー生成
    var logger = new Ext.trick.unit.TestLogger('testLogger');

    // テスト実行
    r.run();

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
