<?php

// SVN $Id$

/**
 * articletest Class File
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
 * @package       xFrameworkPX\Tests\Model\Behavior
 * @since         xFrameworkPX 3.5.0
 * @version       $Revision$
 * @license       http://www.opensource.org/licenses/mit-license.php
 */

// {{{ articletest

/**
 * articletest Class
 *
 * @copyright     (c) 2006 - 2009 Xenophy CO., LTD.(http://www.xenophy.com)
 * @link          http://www.xframeworkpx.com xFrameworkPX
 * @version       xFrameworkPX 3.5.0
 * @license       http://www.opensource.org/licenses/mit-license.php
 */
class article_test_Model extends xFrameworkPX_Model_RapidDrive {

    // {{{ props


    protected $useTable = 'tbl_article';

    // {{{ __construct

    /**
     * �R���X�g���N�^
     *
     * @return void
     * @access public
     */
    public function __construct( $objParam, $test ) {

        $this->useTable = $test;

        parent::__construct( $objParam );

    }

    // }}}

    /**
     * �o���f�[�^�[�ݒ�
     *
     * @var array
     * @access protected
     */
    protected $arrValidator = array(

        // {{{ title�t�B�[���h

        'title' => array(

            // {{{ ���[���ݒ�

            'rule' => 'NotEmpty',

            // }}}
            // {{{ �G���[���b�Z�[�W

            'message' => '�^�C�g������͂��Ă��������B'

            // }}}

        ),

        // }}}
        // {{{ message�t�B�[���h

        'message' => array(

            // {{{ ���[���ݒ�

            'rule' => 'NotEmpty',

            // }}}
            // {{{ �G���[���b�Z�[�W

            'message' => '���b�Z�[�W����͂��Ă��������B'

            // }}}

        )

        // }}}

    );

    // }}}

}

// }}}

?>