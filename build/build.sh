#!/bin/sh

IFS=$'\n'

compress_extjs(){

    echo "OmegaTrick for Ext JS Compress..."

    ExtJS="$OMEGALIB/omegatrick-all.js";

    compress_cmd="java -jar $CONSOLE/compiler.jar --compilation_level WHITESPACE_ONLY"

    file=(`cat "$CONSOLE/core.js.list"`)
    ln=0
    for line in "${file[@]}"; do
        compress_cmd=$compress_cmd" --js=$OMEGALIB/$line"
    done

    file=(`cat "$CONSOLE/js.list"`)
    ln=0
    for line in "${file[@]}"; do
        compress_cmd=$compress_cmd" --js=$OMEGALIB/$line"
    done

    compress_cmd=$compress_cmd" --js_output_file=$ExtJS"

    eval $compress_cmd

}
compress_extcore(){

    echo "OmegaTrick for Ext Core Compress..."

    ExtJS="$OMEGALIB/omegatrick-core-all.js";

    compress_cmd="java -jar $CONSOLE/compiler.jar --compilation_level WHITESPACE_ONLY"

    file=(`cat "$CONSOLE/core.js.list"`)
    ln=0
    for line in "${file[@]}"; do
        compress_cmd=$compress_cmd" --js=$OMEGALIB/$line"
    done

    compress_cmd=$compress_cmd" --js_output_file=$ExtJS"

    eval $compress_cmd

}
compress_senchatouch(){

    echo "OmegaTrick for Sencha Touch Compress..."

    ExtJS="$OMEGALIB/omegatrick-touch-all.js";

    compress_cmd="java -jar $CONSOLE/compiler.jar --compilation_level WHITESPACE_ONLY"

    file=(`cat "$CONSOLE/core.js.list"`)
    ln=0
    for line in "${file[@]}"; do
        compress_cmd=$compress_cmd" --js=$OMEGALIB/$line"
    done

    file=(`cat "$CONSOLE/touch.js.list"`)
    ln=0
    for line in "${file[@]}"; do
        compress_cmd=$compress_cmd" --js=$OMEGALIB/$line"
    done

    compress_cmd=$compress_cmd" --js_output_file=$ExtJS"

    eval $compress_cmd

}
help(){
    echo "usage: $CONSOLE/`basename $0` [-jch]"
    echo " -h   : display this usage."
    echo " none : compress js & css files."
    cd $CD
    exit 1
}

### main
CD=`pwd`
CONSOLE=$(cd $(dirname $0) && pwd)
OMEGALIB=`dirname $CONSOLE`
cd $CONSOLE

while getopts cjh opt
do
    case "$opt" in
    j)
        compress_extjs;;
    c)
        compress_extcore;;
    t)
        compress_sencahtouch;;
    *)
        help;;
    esac
done

### options is undef
if [ -z "$1" ];then
    compress_extjs
    compress_extcore
    compress_senchatouch
fi

### back to current dir
cd $CD
