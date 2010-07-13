<?php

// SVN $Id: TestAction.php 936 2009-12-25 01:48:14Z tamari $

/**
 * TestAction Class File
 *
 * PHP versions 5
 *
 * xFrameworkPX : MVC Web application framework (http://px.xframework.net)
 * Copyright 2006 - 2009 Xenophy CO., LTD.(http://www.xenophy.com)
 *
 * Licensed under The MIT
 *
 * @filesource
 * @copyright     (c) 2006 - 2009 Xenophy CO., LTD.(http://www.xenophy.com)
 * @link          http://www.xframeworkpx.com xFrameworkPX
 * @package       xFrameworkPX\Tests\Util
 * @since         xFrameworkPX 3.5.0
 * @version       $Revision: 936 $
 * @license       http://www.opensource.org/licenses/mit-license.php
 */

// {{{ TestAction

/**
 * TestAction Class
 *
 * @copyright     (c) 2006 - 2009 Xenophy CO., LTD.(http://www.xenophy.com)
 * @link          http://www.xframeworkpx.com xFrameworkPX
 * @version       xFrameworkPX 3.5.0
 * @license       http://www.opensource.org/licenses/mit-license.php
 */
class TestAction {

    // {{{ props

    /**
     * ���b�Z�[�W
     *
     * @var string
     * @access private
     */
    private $strMsg;

    // }}}
    // {{{ __construct

    /**
     * �R���X�g���N�^
     *
     * @return void
     * @access public
     */
    public function __construct() {

        $this->strMsg = 'TestActionMessage';

    }

    // }}}
    // {{{ getMsg1

    /**
     * ���b�Z�[�W�擾�P���\�b�h
     *
     * @return string ���b�Z�[�W
     * @access public
     */
    public function getMsg1() {

        return $this->strMsg . '1';

    }

    // }}}
    // {{{ getMsg2

    /**
     * ���b�Z�[�W�擾�Q���\�b�h
     *
     * @return string ���b�Z�[�W
     * @access public
     */
    public function getMsg2() {

        return $this->strMsg . '2';

    }

    // }}}
    // {{{ getMsg3

    /**
     * ���b�Z�[�W�擾�R���\�b�h
     *
     * @return string ���b�Z�[�W
     * @access public
     */
    public function getMsg3() {

        return false;

    }

    // }}}
    // {{{ getArgMsg

    /**
     * �������b�Z�[�W�擾���\�b�h
     *
     * @return string ���b�Z�[�W
     * @access public
     */
    public function getArgMsg( $strMsg ) {

        return $strMsg;

    }

    // }}}

}

// }}}

?>