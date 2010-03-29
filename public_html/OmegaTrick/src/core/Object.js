/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Object.prototype.clone

if(!Object.prototype.clone) {

    // Object.prototype.cloneにExt.trick.util.Cloneを設定
    Object.prototype.clone = function() {
        return Ext.trick.util.Clone(this);
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

