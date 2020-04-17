"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var colors_1 = require("../colors");
exports.LargeTableHeadRow = styles_1.withStyles({
    root: {
        height: '50px',
    },
})(core_1.TableRow);
exports.SmallTableHeadRow = styles_1.withStyles({
    root: {
        height: '40px',
    },
})(core_1.TableRow);
exports.SmallTableRow = styles_1.withStyles({
    root: {
        height: '40px',
    },
})(core_1.TableRow);
exports.SmallTableCell = styles_1.withStyles({
    root: {
        height: '40px',
        padding: '0 15px',
    },
    footer: {
        backgroundColor: colors_1.warning,
        color: colors_1.warning,
    },
})(core_1.TableCell);
exports.TagTableCell = styles_1.withStyles({
    root: {
        verticalAlign: 'middle',
        maxWidth: '350px',
    },
})(core_1.TableCell);
//# sourceMappingURL=tables.js.map