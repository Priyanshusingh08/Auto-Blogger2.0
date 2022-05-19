"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAgent = void 0;
/*
* The following const is replaced during the CD
* process to the version from package.json
*/
var sdkVersion = "1.3.1";
function userAgent() {
    var agent = "@deepgram/sdk/UNKNOWN node/UNKNOWN";
    try {
        agent = "@deepgram/sdk/".concat(sdkVersion, " node/").concat(process.version.replace("v", ""));
    }
    catch (e) {
        console.warn("Could not load package details");
    }
    return agent;
}
exports.userAgent = userAgent;
//# sourceMappingURL=userAgent.js.map