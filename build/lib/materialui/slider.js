"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Slider_1 = require("@material-ui/lab/Slider");
var core_1 = require("@material-ui/core");
exports.KeySlider = core_1.withStyles({
    root: {
        margin: '20px 0 33px',
    },
    track: {
        borderRadius: '6px',
        height: '10px',
    },
    trackAfter: {
        backgroundColor: '#313D49',
        opacity: 1,
    },
    thumb: {
        height: '18px',
        width: '18px',
    }
})(Slider_1.default);
//# sourceMappingURL=slider.js.map