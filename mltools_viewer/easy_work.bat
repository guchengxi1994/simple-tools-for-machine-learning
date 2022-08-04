@echo off

title "easy work"

set input1=%1%
set input2=%2%

:: 参数1接受 run 或者 build
:: 参数2接受 web/windows

if "%input1%"=="run" (
    if "%input2%"=="web" (
        flutter  run   -d chrome  --web-renderer html
    ) else if "%input2%"=="windows" (
        flutter  run .\lib\main_desktop.dart  -d windows
    )
) else (
    if "%input2%"=="web" (
        flutter  build web  --web-renderer html
    ) else if "%input2%"=="windows" (
        flutter  build windows .\lib\main_desktop.dart  
    )
)