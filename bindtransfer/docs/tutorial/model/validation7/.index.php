<?php

class index extends xFrameworkPX_Controller_Action
{
    public $modules = array('Docs_Tutorial_Model_Validation7_sample');

    public function execute()
    {
        if (isset($this->post->type)) {

            $validError = $this->Docs_Tutorial_Model_Validation7_sample->validation($this->post);

            if (isset($validError->data)) {
                $this->set('errData', $validError->data->messages);
            }
        }

    }
}