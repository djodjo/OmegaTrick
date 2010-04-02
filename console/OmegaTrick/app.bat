@echo.
@echo off

cd ../

php -q "px.php" --working="%CD%" --app=OmegaTrick_compressJs --target=app

echo.

pause