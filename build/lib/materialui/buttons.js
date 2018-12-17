"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
var ToggleButton_1 = require("@material-ui/lab/ToggleButton");
var ToggleButtonGroup_1 = require("@material-ui/lab/ToggleButtonGroup");
exports.FullButton = core_1.withStyles({
    root: {
        background: 'linear-gradient(to bottom, #0abbd0 0%, #09a8ba 100%)',
        border: '1px solid #0FB8D0',
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: colors_1.white,
        '&:hover': {
            background: 'linear-gradient(to bottom, #0AA9D0 0%, #099BBA 100%)',
            border: '1px solid #0FB8D0',
        },
        '&:focus': {
            background: 'linear-gradient(to top right, #0A99D0 10%, #097CBA 70%);',
            border: '1px solid #0FB8D0',
        },
        '&$disabled': {
            color: colors_1.white,
        },
    },
    disabled: {
        opacity: 0.5,
    },
})(core_1.Button);
exports.OutlineButton = core_1.withStyles({
    root: {
        border: '2px solid #1CA9BA',
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: colors_1.primary,
        '&:hover': {
            background: '#313D49',
            border: '2px solid #23E6FE',
        },
        '&:focus': {
            background: '#1E262E',
            border: '2px solid #1CA9BA',
        },
        '&$disabled': {
            color: colors_1.primary,
        },
    },
    disabled: {
        opacity: 0.5,
    },
})(core_1.Button);
exports.OutlineSecondaryButton = core_1.withStyles({
    root: {
        border: "1px solid " + colors_1.typography,
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: colors_1.typography,
        '&:hover': {
            background: '#313D49',
            borderColor: colors_1.typography,
        },
        '&:focus': {
            background: colors_1.baseDark,
            border: "1px solid " + colors_1.typography,
        },
        '&$disabled': {
            color: colors_1.typography,
        },
    },
    disabled: {
        opacity: 0.5,
    },
})(core_1.Button);
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
        height: '44px',
        textTransform: 'initial',
        '&:hover': {
            border: "1px solid " + colors_1.primaryTint,
        },
    },
    selected: {
        background: '#313D49',
        border: "1px solid " + colors_1.primaryTint,
    },
})(ToggleButton_1.default);
//# sourceMappingURL=buttons.js.map