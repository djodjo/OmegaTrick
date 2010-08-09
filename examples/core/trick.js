/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */
Application.setup({

    onReady : function() {

        Ext.fly('version').update(String(Trick.version));
        Ext.fly('version_major').update(String(Trick.versionDetail.major));
        Ext.fly('version_minor').update(String(Trick.versionDetail.minor));
        Ext.fly('version_patch').update(String(Trick.versionDetail.patch));
        Ext.fly('isSenchaTouch').update(Ext.isSenchaTouch ? 'true' : 'false');
        Ext.fly('isExtCore').update(Ext.isExtCore ? 'true' : 'false');
        Ext.fly('isExtJS').update(Ext.isExtJS ? 'true' : 'false');

    }

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
