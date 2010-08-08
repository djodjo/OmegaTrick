/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

Ext.onReady(function() {

    Ext.fly('version').update(String(Trick.version));
    Ext.fly('version_major').update(String(Trick.versionDetail.major));
    Ext.fly('version_minor').update(String(Trick.versionDetail.minor));
    Ext.fly('version_patch').update(String(Trick.versionDetail.patch));
    Ext.fly('isSenchaTouch').update(Ext.isSenchaTouch ? 'true' : 'false');
    Ext.fly('isExtCore').update(Ext.isExtCore ? 'true' : 'false');
    Ext.fly('isExtJS').update(Ext.isExtJS ? 'true' : 'false');
});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
