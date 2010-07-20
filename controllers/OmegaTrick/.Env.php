<?php
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * OmegaTrick_Env Class File
 *
 * PHP versions 5
 *
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 */

// {{{ OmegaTrick_Env

/**
 * xFrameworkPX_CodeGenerator Class
 *
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 */
class OmegaTrick_Env extends xFrameworkPX_Controller_Action
{
    // {{{ execute

    /**
     * 実行メソッド
     */
    public function execute()
    {
        // Ext JS ディレクトリ設定
        $this->set('extjsdir', 'ext-3.2.1');

        // Omega Trick ディレクトリ設定
        $this->set('trickdir', 'OmegaTrick');
    }

    // }}}

}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
