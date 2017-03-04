# C/C++ for Visual Studio Code
This is the preview release for C/C++ support in Visual Studio Code. This extension adds code-editing and debugging support for your C/C++ code.
Debugging is currently tested and officially supported for Ubuntu 14.04, OS X, and Cygwin / MinGW on Windows. We are working on supporting other Linux distributions. On Windows, we currently suggest using Visual Studio Community Edition to debug applications not running on Cygwin or MinGW.  

If you run into any issues, please file a bug on [GitHub](https://github.com/Microsoft/vscppsamples/issues).

## Editing your C/C++ code
The extension adds following code-browsing features for C/C++
* Navigate to Symbol
* Go to Definition
* Go to Declaration
 
You can find more details about the code-editing experience at our Visual Studio Code [documentation page](http://code.visualstudio.com/docs/languages/cpp). 

## Debugging your C/C++ Code
The extension also introduces the ability to debug C/C++ code locally or remotely. The following debugging features are currently supported as a part of this extension.

* Breakpoints (function, conditional)
* Expression evaluation
* Call Stack
* Attach or Launch
* Stepping
* Watch
* Core Dump debugging 
* GDB and MI Commands 

You can find more details about the debugging experience at our Visual Studio Code [documentation page](http://code.visualstudio.com/docs/languages/cpp). 

## Debugging Platform Support
VSCode 1.1.1 or above is required for reliable multi-threaded debugging. 

### Linux
The debugging components have been tested on Ubuntu 14.04 (x64). Other Linux distributions may work too, but have not been tested. 

### OS X
Debugging is supported on OS X using LLDB and GDB.

#### Using LLDB on OS X 
For new users, debugging will default to LLDB using a copy of LLDB 3.8.0 that is automatically installed by the extension.

Existing GDB users on OS X will need to delete the existing `launch.json` inside their project folder and allow the extension to generate a new `launch.json`.

#### Using GDB on OS X
To use GDB on OS X, locate the `osx` section inside of the `C++ Launch` or `C++ Attach` sections in `launch.json` and change `MIMode` from `lldb` to `gdb`.

#### Manual installation of GDB for OS X
1. Install homebrew by executing the following in Terminal:
    * `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install GDB by executing the following in Terminal. Note that the path to GDB will be `/usr/local/bin/gdb`:
    * `brew tap homebrew/dupes`
    * `brew install gdb`
3. Sign the GDB binary as described [here](https://gcc.gnu.org/onlinedocs/gnat_ugn/Codesigning-the-Debugger.html).

#### Known Issues for OS X
* When attaching to a process with GDB, the debuggee cannot be interrupted. Only breakpoints set while the debuggee is not running will be bound (e.g., before attaching or while the debuggee is in a stopped state). This is due to [a bug in GDB](https://sourceware.org/bugzilla/show_bug.cgi?id=20035).
* Core dumps cannot be loaded when debugging with GDB, which [does not support the core dump format used in OS X](https://www.sourceware.org/ml/gdb/2014-01/msg00036.html).
* When attached to a process with GDB, break-all will kill the process.
* When debugging with LLDB, if the Terminal window is closed while in break mode, debugging does not stop. Debugging can be stopped by pressing the **_Stop_** button.

### Windows
Debugging on Windows is currently only supported with GDB from a Cygwin or MinGW installation.

#### Known Issues for Windows
* GDB on Cygwin cannot open core dumps.
* GDB on Cygwin and MinGW cannot break a running process. In order to set breakpoints in run mode, or pause the debuggee, press Ctrl-C in the debuggee terminal. 
* User must manually set the path to GDB in `launch.json` if `gdb.exe` is not on the path. For example: `"miDebuggerPath":"c:\\mingw\\bin\\gdb.exe"` or `"miDebuggerPath":"c:\\cygwin64\\bin\\gdb.exe"`

## Changes
Version 0.8.1: July 27, 2016
* Bug fixes.

Version 0.8.0: July 21, 2016
* Support for debugging on OS X with LLDB 3.8.0. LLDB is now the default debugging option on OS X.
* Attach to process displays a list of available processes.
* Set variable values through Visual Studio Code's locals window. 
* Bug fixes.

Version 0.7.1: June 27, 2016
* Bug fixes.

Version 0.7.0: June 20, 2016
* Bug fixes.
* Switch between header and source.
* Control which files are processed under include path.

Version 0.6.1: June 03, 2016
* Bug fixes.
 
Version 0.6.0: May 24, 2016
* Support for debugging on OS X with GDB.
* Support for debugging with GDB on MinGW.
* Support for debugging with GDB on Cygwin.
* Debugging on 32-bit Linux now enabled.
* Format code using clang-format.
* Experimental fuzzy autocompletion.
* Bug fixes.

Version 0.5.0: April 14, 2016
* Usability and correctness bug fixes. 
* Simplify installation experience.
* Usability and correctness bug fixes. 

## Contact Us
If you’d like to help us build the best C/C++ experience on any platform, [you can sign up to talk directly to the product team and influence our investment in this area](http://landinghub.visualstudio.com/c-nonwin).

If you run into any issues, please file an issue on [GitHub](https://github.com/Microsoft/vscppsamples/issues). 
