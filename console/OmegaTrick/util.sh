#!/bin/bash
clear
test -f ./px.php;
if [ $? -eq 1 ];
then
    cd ../;
fi

test -f ./px.php;
if [ $? -eq 0 ];
then
    APP=`pwd`;
    exec php -q px.php -working "${APP}" --app=OmegaTrick_util;
else
    echo 'px.phpが見つかりません。'
fi
exit;
