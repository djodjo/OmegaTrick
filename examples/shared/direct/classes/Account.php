<?php
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ Account

/**
 * Account Class
 */
class Account
{
    // {{{ auth

    /**
     * 認証メソッド
     */
    public function auth($id, $passwd)
    {
        // 認証方式はユーザー実装依存
        if($id === 'omega' && $passwd === 'trick') {
            return true;
        }

        return false;
    }

    // }}}
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
