<?php

class OmegaTrick_compressJs extends xFrameworkPX_Controller_Action
{

    public $modules = array('OmegaTrick_compressionJs');

    public function execute()
    {

        if (!isset($this->args->target)) {
            echo "Please setting target.\n";
            echo "    app\n";
            echo "    core\n";
            echo "    draw\n";
            echo "    locale\n";
            echo "    plugins\n";
            echo "    widgets\n";
            echo "    build\n";
            exit(0);
        }

        $target = $this->args->target;

            $this->OmegaTrick_compressionJs->compressAll();
/*
        if ($target != 'build') {
            $this->OmegaTrick_compressionJs->compress($target);
        } else {
            $this->OmegaTrick_compressionJs->compressAll();
        }
*/
    }

}

