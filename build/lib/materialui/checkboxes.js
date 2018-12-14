"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
exports.DefaultCheckbox = core_1.withStyles({
    root: {
        borderRadius: '3px',
        color: colors_1.grey,
        height: '18px',
        marginRight: '10px',
        padding: 0,
        width: '18px',
    },
    colorPrimary: {
        backgroundColor: colors_1.baseDark,
        border: "1px solid " + colors_1.grey,
        borderRadius: '3px',
        color: 'transparent',
        height: '18px',
        padding: 0,
        width: '18px',
    },
    colorSecondary: {
        backgroundColor: 'rgba(255, 46, 99, 0.09)',
        border: "1px solid " + colors_1.error,
        borderRadius: '3px',
        color: 'transparent',
        height: '18px',
        padding: 0,
        width: '18px',
    },
    '&$checked:not($disabled):not($colorSecondary)': {
        backgroundColor: colors_1.primary + " !important",
        border: "1px solid " + colors_1.primary + " !important",
        color: colors_1.baseDark + " !important",
    },
    disabled: {
        backgroundColor: '#222B34',
        border: '1px solid #2F3B48',
        borderRadius: '3px',
        color: 'transparent !important',
        height: '18px',
        padding: 0,
        width: '18px',
    },
})(core_1.Checkbox);
//# sourceMappingURL=checkboxes.js.map