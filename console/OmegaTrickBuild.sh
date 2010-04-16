java -jar compiler.jar --compilation_level WHITESPACE_ONLY \
--js=../public_html/OmegaTrick/src/app/Entry.js \
--js=../public_html/OmegaTrick/src/app/App.js \
--js=../public_html/OmegaTrick/src/widgets/SigninWindow.js \
--js=../public_html/OmegaTrick/src/plugins/DisplayFieldNumberFormat.js \
--js=../public_html/OmegaTrick/src/plugins/FocusActive.js \
--js=../public_html/OmegaTrick/src/util/Clone.js \
--js=../public_html/OmegaTrick/src/util/Phantom.js \
--js=../public_html/OmegaTrick/src/util/ScriptLoader.js \
--js=../public_html/OmegaTrick/src/widgets/form/FormPanel.js \
--js=../public_html/OmegaTrick/src/widgets/layout/ScreenLayout.js \
--js=../public_html/OmegaTrick/src/widgets/ScreenPanel.js \
--js=../public_html/OmegaTrick/src/widgets/TrickPanel.js \
--js=../public_html/OmegaTrick/src/widgets/trick/Search.js \
--js=../public_html/OmegaTrick/src/widgets/trick/List.js \
--js=../public_html/OmegaTrick/src/widgets/parts/List.js \
--js=../public_html/OmegaTrick/src/core/Config.js \
--js=../public_html/OmegaTrick/src/core/String.js \
--js=../public_html/OmegaTrick/src/core/Ext.js \
--js_output_file=../public_html/OmegaTrick/OmegaTrick-all.js


files=(
    'structure/core.css'
    'structure/loadingmask.css'
    'structure/SigninWindow.css'
    'visual/loadingmask.css'
    'visual/SigninWindow.css'
)

for file in ${files[@]}
do
    filename=`echo "$file" | sed 's/\.css/-min\.css/'`
    echo `rm ../public_html/OmegaTrick/resources/css/$filename`
    echo `java -jar yuicompressor-2.4.2.jar --charset UTF-8 ../public_html/OmegaTrick/resources/css/$file -o ../public_html/OmegaTrick/resources/css/$filename`
done

rm ../public_html/OmegaTrick/resources/css/OmegaTrick-all.css
touch ../public_html/OmegaTrick/resources/css/OmegaTrick-all.css

for file in ${files[@]}
do
    filename=`echo "$file" | sed 's/\.css/-min\.css/'`
    echo `cat ../public_html/OmegaTrick/resources/css/$filename | sed 's/\.\.\/\.\.\/images/\.\.\/images/g' >> ../public_html/OmegaTrick/resources/css/OmegaTrick-all.css`

done

