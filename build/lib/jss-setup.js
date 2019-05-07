"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jss_1 = require("jss");
var reset = require("reset-jss");
var jss_preset_default_1 = require("jss-preset-default");
exports.setup = function () {
    jss_1.default.setup(jss_preset_default_1.default());
    jss_1.default.createStyleSheet(reset).attach();
    var styles = {
        '@global': {
            body: {
                background: 'linear-gradient(135deg, rgba(43,53,64,1) 0%, rgba(30,38,46,1) 100%)',
                fontFamily: 'Lato, arial, sans-serif',
                fontSmoothing: 'antialiased',
                osxFontSmoothing: 'grayscale',
            },
        },
    };
    jss_1.default.createStyleSheet(styles).attach();
};
//# sourceMappingURL=jss-setup.js.map