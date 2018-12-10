"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
exports.FileUploadLabel = core_1.withStyles({
    root: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '120px',
        justifyContent: 'space-between',
        marginTop: '100px',
        textAlign: 'center',
        '&:hover': {
            color: colors_1.primary,
        },
    },
})(core_1.InputLabel);
exports.FileUploadInput = core_1.withStyles({
    root: {
        display: 'none',
    },
})(core_1.Input);
exports.InputField = core_1.withStyles({
    root: {
        backgroundColor: colors_1.baseDark,
        borderRadius: '4px',
        border: '1px solid #384656',
        color: colors_1.typography,
        fontSize: '14px',
        height: '44px',
        lineHeight: '21px',
        paddingLeft: '16px',
    },
    focused: {
        "&$focused:not($error):not($disabled)": {
            border: "1px solid " + colors_1.primary,
            boxShadow: "0 0 3px 1px " + colors_1.primary,
        },
    },
    error: {
        backgroundColor: 'rgba(255, 46, 99, 0.09)',
        border: "1px solid " + colors_1.error,
        color: colors_1.error,
        marginBottom: '6px',
    },
    disabled: {
        color: '#93B0C1',
        opacity: 0.5,
    },
})(core_1.Input);
exports.DecimalInput = core_1.withStyles({
    inputType: {
        textAlign: 'right',
    },
})(exports.InputField);
exports.DropdownInputField = core_1.withStyles({
    root: {
        backgroundColor: colors_1.baseDark,
        borderRadius: '4px',
        border: '1px solid #384656',
        color: colors_1.typography,
        fontSize: '14px',
        lineHeight: '21px',
    },
})(exports.InputField);
exports.DropdownSelect = core_1.withStyles({
    root: {
    // backgroundColor: baseDark,
    // borderRadius: '4px',
    // border: '1px solid #384656',
    // color: typography,
    // fontSize: '14px',
    // lineHeight: '21px',
    // paddingLeft: '16px',
    },
})(core_1.Select);
//# sourceMappingURL=inputs.js.map