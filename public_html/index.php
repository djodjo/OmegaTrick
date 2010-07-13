<?php

// {{{ PHPエラー出力設定

/**
 * PHP 5.xでは、下記でよいが、PHP 6.0 移行は、E_STRICTもE_ALLに含まれるため
 * E_STRICTでのエラー回避もxFramework PX 側で行う必要がある
 */
error_reporting(E_ALL);

// }}}
// {{{ Set Library Path

set_include_path('../library/' . PATH_SEPARATOR . get_include_path());

// }}}
// {{{ Include xFrameworPX

include '../locales/ja.php';
include 'xFrameworkPX/Loader/Core.php';

// }}}
// {{{ xFrameworkPX Run

xFrameworkPX_Dispatcher::getInstance()->run(
    array(
        'DEBUG' => 1
    )
);

// }}}
