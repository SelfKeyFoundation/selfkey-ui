"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jss_1 = require("jss");
var reset = require("reset-jss");
var jss_preset_default_1 = require("jss-preset-default");
exports.setup = function () {
    jss_1.default.setup(jss_preset_default_1.default());
    jss_1.default.createStyleSheet(reset).attach();
    var styles = {
        '@global': { "body": { fontFamily: "'Lato', arial, sans-serif" } },
    };
    jss_1.default.createStyleSheet(styles).attach();
};
//# sourceMappingURL=jss-setup.js.map