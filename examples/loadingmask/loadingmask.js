/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */
Application.setup({

    onReady : function() {

        var lm = Application.LoadingMask;
        var task = {};

        task.remove = new Ext.util.DelayedTask(function(){
            lm.remove();
        });

        task.msg1 = new Ext.util.DelayedTask(function(){
            lm.setText('Message1');
//            task.remove.delay(3000);
        });

        task.msg1.delay(3000);

    }

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
