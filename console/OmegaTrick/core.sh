#!/bin/bash
clear
cd ../;
APP=`pwd`;
exec php -q px.php -working "${APP}" --app=OmegaTrick_core;
exit;
