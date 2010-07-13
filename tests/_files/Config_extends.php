<?php

// {{{ 

class Config_extends extends xFrameworkPX_Config {

    // {{{ __construct

    /**
     * �R���X�g���N�^
     *
     * @access private
     */
    private function __construct() {

    }

    // }}}
    // {{{ getInstance

    /**
     * �C���X�^���X�擾���\�b�h
     *
     * @return xFrameworkPX�C���X�^���X
     * @access public
     */
    public static function getInstance() {

        // {{{ �C���X�^���X�擾

        if( !isset( self::$_instance ) ) {
            self::$_instance = new Config_extends();
        }

        // }}}

        return self::$_instance;
    }

    // }}}
    // {{{ endTest

    /**
     * �C���X�^���X�j�����\�b�h
     *
     * @return void
     * @access public
     */
    public function endTest() {

        self::$_instance = null;

    }

    // }}}

}

// }}}

?>