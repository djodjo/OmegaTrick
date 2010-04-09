<?php

class extdirect extends xFrameworkPX_Controller_ExtDirect
{
    public $direct = array(
        'descriptor' => 'Ext.app.REMOTING_API'
    );

    public $modules = array(
        'OmegaTrick_Auth' => array('conn' => 'default'),
    );
}

