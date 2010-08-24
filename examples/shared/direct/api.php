<?php
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

// {{{ load classes

$actions = array();

define('TARGET_DIR', './classes/');

$filelist = scandir(TARGET_DIR);
foreach($filelist as $value) {
    if(
        is_file(TARGET_DIR . $value) &&
        pathinfo($value, PATHINFO_EXTENSION) === 'php'
    ) {
        $cname = pathinfo($value, PATHINFO_FILENAME);

        if(!class_exists($cname)) {

            $actions[$cname] = array();

            require_once(TARGET_DIR . $value);

            $class = new ReflectionClass($cname);

            $methods = $class->getMethods();
            foreach($methods as $method) {

                $mname = $method->getName();

                $count = count($method->getParameters());
                $actions[$cname][] = array('name' => $mname, 'len' => $count);
            }

        } else {
            Throw new Exception('Duplicate Class Name : ' . $cname);
        }

    }
}

$cfg = array(
    'url'=>'php/router.php',
    'type'=>'remoting',
    'actions'=>$actions
);

// }}}
// {{{ header

header('Content-Type: text/javascript');

// }}}
// {{{ output

echo 'Ext.app.REMOTING_API = ';
echo json_encode($cfg);
echo ';';

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
