"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jss_1 = require("jss");
var reset = require("reset-jss");
var jss_preset_default_1 = require("jss-preset-default");
exports.setup = function () {
    jss_1.default.setup(jss_preset_default_1.default());
    jss_1.default.createStyleSheet(reset).attach();
    console.log(reset);
};
//# sourceMappingURL=jss-setup.js.map