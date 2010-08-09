/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Ext.emptyFn

// for Ext Core
if(Ext.isExtCore && !Ext.emptyFn) {
    Ext.emptyFn = function(){};
}

// }}}
// {{{ Function.prototype.createCallback

// for Sencha Touch
if(Ext.isSenchaTouch && !Function.prototype.createCallback) {

    Ext.apply(Function.prototype, {

        createCallback : function(/*args...*/){

            var args = arguments,
                method = this;

            return function() {
                return method.apply(window, args);
            };

        }

    });

}

// }}}
// {{{ Function.createSequence

// for Ext Core and Sencha Touch
if((Ext.isExtCore || Ext.isSenchaTouch) && !Function.prototype.createSequence) {

    Ext.apply(Function.prototype, {

        createSequence : function(fcn, scope){
            var method = this;
            return (typeof fcn != 'function') ?
                this :
                    function(){
                var retval = method.apply(this || window, arguments);
                fcn.apply(scope || this || window, arguments);
                return retval;
            };
        }

    });

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
