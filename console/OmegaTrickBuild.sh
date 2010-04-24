#!/bin/sh

compress_js(){
    ### output file path
    ALL_JS=$PUBLIC_OMEGA/OmegaTrick-all.js

    if [ -e "$ALL_JS" ];then
        rm -f "$ALL_JS"
    fi

    java -jar compiler.jar --compilation_level WHITESPACE_ONLY \
    --js=$PUBLIC_OMEGA/src/app/Entry.js \
    --js=$PUBLIC_OMEGA/src/app/App.js \
    --js=$PUBLIC_OMEGA/src/widgets/SigninWindow.js \
    --js=$PUBLIC_OMEGA/src/plugins/DisplayFieldNumberFormat.js \
    --js=$PUBLIC_OMEGA/src/plugins/FocusActive.js \
    --js=$PUBLIC_OMEGA/src/util/Clone.js \
    --js=$PUBLIC_OMEGA/src/util/Phantom.js \
    --js=$PUBLIC_OMEGA/src/util/ScriptLoader.js \
    --js=$PUBLIC_OMEGA/src/widgets/Component.js \
    --js=$PUBLIC_OMEGA/src/widgets/form/FormPanel.js \
    --js=$PUBLIC_OMEGA/src/widgets/layout/ScreenLayout.js \
    --js=$PUBLIC_OMEGA/src/widgets/ScreenPanel.js \
    --js=$PUBLIC_OMEGA/src/widgets/TrickPanel.js \
    --js=$PUBLIC_OMEGA/src/widgets/parts/ListUnit.js \
    --js=$PUBLIC_OMEGA/src/widgets/parts/SearchDetail.js \
    --js=$PUBLIC_OMEGA/src/widgets/parts/List.js \
    --js=$PUBLIC_OMEGA/src/widgets/parts/Unit.js \
    --js=$PUBLIC_OMEGA/src/core/Config.js \
    --js=$PUBLIC_OMEGA/src/core/Store.js \
    --js=$PUBLIC_OMEGA/src/core/String.js \
    --js=$PUBLIC_OMEGA/src/core/Ext.js \
    --js_output_file=$ALL_JS

    res=$?
    if [ $res == 1 -o ! -e $ALL_JS ];then
        error $ALL_JS
    else
        success $ALL_JS
    fi
}

compress_css(){
    ### output file path
    ALL_CSS=$PUBLIC_OMEGA/resources/css/OmegaTrick-all.css

    files=(
        'structure/core.css'
        'structure/loadingmask.css'
        'structure/SigninWindow.css'
        'visual/loadingmask.css'
        'visual/SigninWindow.css'
        'visual/SearchDetail.css'
        'visual/List.css'
        'visual/Unit.css'
    )

    if [ -e "$ALL_CSS" ];then
        rm -f "$ALL_CSS"
    fi

    for file in ${files[@]}
    do
        filename=`echo "$file" | sed 's/\.css/-min\.css/'`
        rm -f "$PUBLIC_OMEGA/resources/css/$filename"
        java -jar yuicompressor-2.4.2.jar --charset UTF-8 $PUBLIC_OMEGA/resources/css/$file -o $PUBLIC_OMEGA/resources/css/$filename
        res=$?
        if [ $res == 1 ];then
            error $ALL_CSS
        fi
        cat $PUBLIC_OMEGA/resources/css/$filename | sed 's/\.\.\/\.\.\/images/\.\.\/images/g' >> $ALL_CSS

    done

    if [ ! -e "$ALL_CSS" ];then
        error $ALL_JS
    else
        success $ALL_CSS
    fi
}
help(){
    echo "usage: $CONSOLE/`basename $0` [-jch]"
    echo " -j   : compress js files."
    echo " -c   : compress css files."
    echo " -h   : display this usage."
    echo " none : compress js & css files."
    cd $CD
    exit 1
}
error(){
    echo "Failed: Not created"
    echo "    $1"
    cd $CD
    exit 1
}
success(){
    echo "Success: created"
    echo "    $1"
}

### main
CD=`pwd`
CONSOLE=$(cd $(dirname $0) && pwd)
PUBLIC_OMEGA=`dirname $CONSOLE`/public_html/OmegaTrick
cd $CONSOLE

while getopts cjh opt
do
    case "$opt" in
    j)
        compress_js;;
    c)
        compress_css;;
    *)
        help;;
    esac
done

### options is undef
if [ -z "$1" ];then
        compress_js
        compress_css
fi
### back to current dir
cd $CD
