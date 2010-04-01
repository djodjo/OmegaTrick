<?php

class OmegaTrickEnv extends xFrameworkPX_Controller_Action
{

    public function execute()
    {

        // Ext JS ディレクトリ設定
        $this->set('extjsdir', 'ext-3.2.0'); 

        // Omega Trick ディレクトリ設定
        $this->set('omegatrickdir', 'OmegaTrick');
    
    }


}
