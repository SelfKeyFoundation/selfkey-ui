"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var colors_1 = require("../colors");
exports.Tag = styles_1.withStyles({
    root: {
        backgroundColor: colors_1.baseDark,
        borderRadius: '10px',
        color: colors_1.typography,
        display: 'inline',
        fontSize: '12px',
        lineHeight: '13px',
        margin: '2px 4px 2px 0',
        padding: '2px 10px',
    },
})(core_1.Typography);
//# sourceMappingURL=typography.js.map