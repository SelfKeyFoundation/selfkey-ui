"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var colors_1 = require("../colors");
var styles = core_2.createStyles({
    root: {
        backgroundColor: colors_1.baseDark,
        borderRadius: '10px',
        display: 'inline',
        lineHeight: '13px',
        margin: '2px 4px 2px 0',
        padding: '2px 10px'
    },
    body1: {
        fontSize: '12px',
        color: colors_1.typography
    }
});
exports.Tag = core_2.withStyles(styles)(core_1.Typography);
//# sourceMappingURL=typography.js.map