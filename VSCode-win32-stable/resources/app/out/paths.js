/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getAppDataPath(t){switch(t){case"win32":return process.env.APPDATA;case"darwin":return path.join(os.homedir(),"Library","Application Support");case"linux":return process.env.XDG_CONFIG_HOME||path.join(os.homedir(),".config");default:throw new Error("Platform not supported")}}function getUserDataPath(t,a,r){var e=minimist(r,{string:["user-data-dir"]}),i=e["user-data-dir"],n=getAppDataPath(t);return i?i:path.join(n,a)}var minimist=require("minimist"),path=require("path"),os=require("os");exports.getAppDataPath=getAppDataPath,exports.getUserDataPath=getUserDataPath;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e6b4afa53e9c0f54edef1673de9001e9f0f547ae/paths.js.map
