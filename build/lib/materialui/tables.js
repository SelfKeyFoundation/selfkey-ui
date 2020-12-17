"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTableCell = exports.SmallTableCell = exports.SmallTableRow = exports.SmallTableHeadRow = exports.LargeTableHeadRow = void 0;
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var colors_1 = require("../colors");
exports.LargeTableHeadRow = styles_1.withStyles(styles_1.createStyles({
    root: {
        height: '50px'
    }
}))(core_1.TableRow);
exports.SmallTableHeadRow = styles_1.withStyles(styles_1.createStyles({
    root: {
        height: '40px'
    }
}))(core_1.TableRow);
exports.SmallTableRow = styles_1.withStyles(styles_1.createStyles({
    root: {
        height: '40px'
    }
}))(core_1.TableRow);
exports.SmallTableCell = styles_1.withStyles(styles_1.createStyles({
    root: {
        height: '40px',
        padding: '16px'
    },
    footer: {
        backgroundColor: colors_1.warning,
        color: colors_1.warning
    }
}))(core_1.TableCell);
exports.TagTableCell = styles_1.withStyles(styles_1.createStyles({
    root: {
        verticalAlign: 'middle',
        maxWidth: '350px'
    }
}))(core_1.TableCell);
//# sourceMappingURL=tables.js.map