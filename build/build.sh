#!/bin/sh

IFS=$'\n'



compress_extjs(){

    echo "OmegaTrick for Ext JS Compress..."

    ExtJS="$OMEGALIB/OmegaTrick-all.js";

    file=(`cat "$CONSOLE/core.js.list"`)

    compress_cmd="java -jar $CONSOLE/compiler.jar --compilation_level WHITESPACE_ONLY"
    ln=0
    for line in "${file[@]}"; do
#        ln=`expr $ln + 1`
#        printf '%3d %s\n' "$ln" "$line"
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

PATH=${PATH}:$CONSOLE/../../compiler-latest/

while getopts cjh opt
do
    case "$opt" in
    r)
        compress_extjs;;
    *)
        help;;
    esac
done

### options is undef
if [ -z "$1" ];then
    compress_extjs
fi

### back to current dir
cd $CD
