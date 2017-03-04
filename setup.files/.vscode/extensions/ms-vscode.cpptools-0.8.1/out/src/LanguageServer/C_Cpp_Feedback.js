'use strict';
var vscode = require('vscode');
var os = require('os');
var BugUser_Type = { get method() { return 'cpp_telemetry/bug_user'; } };
var FeedbackState = (function () {
    function FeedbackState(context) {
        this.context = context;
        var dbg;
        dbg = false;
        if (dbg) {
            this.setBugUser(true);
            this.setBugUserCount(1);
            this.setBugUserEditCount(1);
        }
    }
    FeedbackState.prototype.getBugUserCount = function () {
        return this.context.globalState.get("CPP.bugUser.count", 100);
    };
    FeedbackState.prototype.setBugUserCount = function (val) {
        return this.context.globalState.update("CPP.bugUser.count", val);
    };
    FeedbackState.prototype.getBugUserEditCount = function () {
        return this.context.globalState.get("CPP.bugUser.editCount", 1000);
    };
    FeedbackState.prototype.setBugUserEditCount = function (val) {
        return this.context.globalState.update("CPP.bugUser.editCount", val);
    };
    FeedbackState.prototype.getBugUser = function () {
        return this.context.globalState.get("CPP.bugUser", true);
    };
    FeedbackState.prototype.setBugUser = function (val) {
        return this.context.globalState.update("CPP.bugUser", val);
    };
    return FeedbackState;
}());
exports.FeedbackState = FeedbackState;
function setupFeedbackHandler(context, client) {
    var settings = new FeedbackState(context);
    if (settings.getBugUser()) {
        client.onNotification(BugUser_Type, function (c) {
            settings.setBugUser(false);
            settings.setBugUserCount(2000);
            settings.setBugUserEditCount(20000);
            var message;
            var yesButton;
            var dontAskButton;
            var url;
            var number = Math.random();
            message = "Would you like to help us improve the CPP extension?";
            if (number > 0.5) {
                url = "http://aka.ms/vscodecpp";
            }
            else {
                url = "http://aka.ms/vscodecppnps";
            }
            yesButton = "Yes";
            dontAskButton = "Don't Show Again";
            vscode.window.showInformationMessage(message, dontAskButton, yesButton).then(function (value) {
                switch (value) {
                    case yesButton:
                        var spawn = require('child_process').spawn;
                        var open_command;
                        if (os.platform() == 'win32') {
                            open_command = 'explorer';
                        }
                        else if (os.platform() == 'darwin') {
                            open_command = '/usr/bin/open';
                        }
                        else {
                            open_command = '/usr/bin/xdg-open';
                        }
                        spawn(open_command, [url]);
                        break;
                    case dontAskButton:
                        settings.setBugUser(false);
                        break;
                }
            });
        });
    }
}
exports.setupFeedbackHandler = setupFeedbackHandler;
//# sourceMappingURL=C_Cpp_Feedback.js.map