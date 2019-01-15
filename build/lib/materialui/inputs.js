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
exports.DecimalInput = core_1.withStyles({
    inputType: {
        textAlign: 'right',
    },
})(core_1.Input);
//# sourceMappingURL=inputs.js.map