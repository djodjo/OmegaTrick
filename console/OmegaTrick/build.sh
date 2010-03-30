
./app.sh;
./core.sh;
./draw.sh;
./locale.sh;
./plugins.sh;
./util.sh;
./widgets.sh;

cat ../../public_html/OmegaTrick/pkgs/app-min.js \
    ../../public_html/OmegaTrick/pkgs/draw-min.js \
    ../../public_html/OmegaTrick/pkgs/plugins-min.js \
    ../../public_html/OmegaTrick/pkgs/util-min.js \
    ../../public_html/OmegaTrick/pkgs/widgets-min.js \
    ../../public_html/OmegaTrick/pkgs/core-min.js > ../../public_html/OmegaTrick/OmegaTrick-all.js

