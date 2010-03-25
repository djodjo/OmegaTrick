/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ String.prototype.endsWith

/**
 * String  インスタンスの末尾が、指定された文字列と一致
 * するかどうかを判断します。
 */
String.prototype.endsWith = function(suffix) {
    var sub = this.length - suffix.length;
    return (sub >= 0) && (this.lastIndexOf(suffix) === sub);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

