"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
exports.LargeTableHeadRow = core_1.withStyles({
    root: {
        height: '50px',
    },
})(core_1.TableRow);
exports.SmallTableHeadRow = core_1.withStyles({
    root: {
        height: '40px',
    },
})(core_1.TableRow);
exports.SmallTableRow = core_1.withStyles({
    root: {
        height: '40px',
    },
})(core_1.TableRow);
exports.SmallTableCell = core_1.withStyles({
    root: {
        height: '40px',
        // maxWidth: '150px',
        padding: '0 15px',
    },
    footer: {
        backgroundColor: colors_1.warning,
        color: colors_1.warning,
    },
})(core_1.TableCell);
exports.TagTableCell = core_1.withStyles({
    root: {
        // alignItems: 'center',
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'flex-start',
        verticalAlign: 'middle',
        maxWidth: '350px',
    },
})(core_1.TableCell);
//# sourceMappingURL=tables.js.map