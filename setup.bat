::::::::::BLACKKITTY::::::::::::
@echo off
set mingw_dir=%cd:\=/%/MinGw
set mingw_dir_win=%cd:\=\\%\\MinGw
set project_dir=%cd%\Projects
call:cpptool
call:launch
call:tasks
call:cppproperties
echo.OK!
start .\VSCode-win32-stable\Code "%cd%\Projects"
exit

:cpptool
echo.cpptools: copy new files... 
echo.xcopy /E /Q /H /R /Y .\setup.files %userprofile%
xcopy /E /Q /H /R /Y .\setup.files %userprofile%
if not %errorlevel%==0 (echo.failed!&pause&exit)
goto:eof

:launch
echo.setup launch.json...
echo.{>"%project_dir%\.vscode\launch.json"
echo.    "version": "0.2.0",>>"%project_dir%\.vscode\launch.json"
echo.    "configurations": [{>>"%project_dir%\.vscode\launch.json"
echo.            "name": "C++ Launch (GDB)",>>"%project_dir%\.vscode\launch.json"
echo.            "type": "cppdbg",>>"%project_dir%\.vscode\launch.json"
echo.            "request": "launch",>>"%project_dir%\.vscode\launch.json"
echo.            "launchOptionType": "Local",>>"%project_dir%\.vscode\launch.json"
echo.            "targetArchitecture": "x86",>>"%project_dir%\.vscode\launch.json"
echo.            "program": "${file}.exe",>>"%project_dir%\.vscode\launch.json"
echo.            "miDebuggerPath":"%mingw_dir%/bin/gdb.exe",>>"%project_dir%\.vscode\launch.json"
echo.            "args": [],>>"%project_dir%\.vscode\launch.json"
echo.            "stopAtEntry": false,>>"%project_dir%\.vscode\launch.json"
echo.            "cwd": "${workspaceRoot}",>>"%project_dir%\.vscode\launch.json"
echo.            "externalConsole": true,>>"%project_dir%\.vscode\launch.json"
echo.            "preLaunchTask": "cmd">>"%project_dir%\.vscode\launch.json"
echo.        }]>>"%project_dir%\.vscode\launch.json"
echo.}>>"%project_dir%\.vscode\launch.json"
goto:eof

:tasks
echo.setup tasks.json...
echo.{>"%project_dir%\.vscode\tasks.json"
echo.    "version": "0.1.0",>>"%project_dir%\.vscode\tasks.json"
echo.    "command": "cmd",>>"%project_dir%\.vscode\tasks.json"
echo.    "args": [>>"%project_dir%\.vscode\tasks.json"
echo.        "/c", >>"%project_dir%\.vscode\tasks.json"
echo.        "(setlocal ENABLEDELAYEDEXPANSION)&(@set path=%mingw_dir_win%\\bin;)&&(g++ -g ${file} -o ${file}.exe)&(exit !errorlevel!)">>"%project_dir%\.vscode\tasks.json"
echo.    ]>>"%project_dir%\.vscode\tasks.json"
echo.}>>"%project_dir%\.vscode\tasks.json"
goto:eof

:cppproperties
echo.setup c_cpp_properties.json...
echo.{>"%project_dir%\.vscode\c_cpp_properties.json"
echo.    "configurations": [>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        {>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "name": "Mac",>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "includePath": ["/usr/include"],>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "browse" : {>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.                "limitSymbolsToIncludedHeaders" : true,>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.                "databaseFilename" : "">>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            }>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        },>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        {>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "name": "Linux",>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "includePath": ["/usr/include"],>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "browse" : {>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.                "limitSymbolsToIncludedHeaders" : true,>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.                "databaseFilename" : "">>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            }>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        },>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        {>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "name": "Win32",>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "includePath": ["%mingw_dir%/include"],>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            "browse" : {>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.                "limitSymbolsToIncludedHeaders" : true,>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.                "databaseFilename" : "">>"%project_dir%\.vscode\c_cpp_properties.json"
echo.            }>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        }>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.],>>"%project_dir%\.vscode\c_cpp_properties.json"
echo."clang_format" : {>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        "style" : "file",>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        "fallback-style" : "LLVM",>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.        "sort-includes" : false>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.    }>>"%project_dir%\.vscode\c_cpp_properties.json"
echo.}>>"%project_dir%\.vscode\c_cpp_properties.json"
goto:eof
