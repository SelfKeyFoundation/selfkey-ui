"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
var ToggleButton_1 = require("@material-ui/lab/ToggleButton");
var ToggleButtonGroup_1 = require("@material-ui/lab/ToggleButtonGroup");
exports.ToggleBtnGroup = core_1.withStyles({
    selected: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
})(ToggleButtonGroup_1.default);
exports.ToggleBtn = core_1.withStyles({
    root: {
        backgroundColor: '#293743',
        border: '1px solid #1D505F',
        boxSizing: 'border-box',
        fill: colors_1.typography,
        height: '44px',
        textTransform: 'initial',
        '&:hover': {
            border: "1px solid " + colors_1.primaryTint,
        },
    },
    selected: {
        background: '#313D49',
        border: "1px solid " + colors_1.primaryTint,
        fill: colors_1.primary,
        color: colors_1.primary,
    },
})(ToggleButton_1.default);
//# sourceMappingURL=buttons.js.map