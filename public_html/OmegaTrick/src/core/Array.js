/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Array.prototype.clone

if(!Array.prototype.clone) {

    //Array.prototype.cloneにExt.trick.util.cloneを設定
    Array.prototype.clone = function() {
        return Ext.trick.util.clone(this);
    };
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

