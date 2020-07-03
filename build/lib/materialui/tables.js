import { TableRow, TableCell } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import { warning } from '../colors';
export var LargeTableHeadRow = withStyles(createStyles({
    root: {
        height: '50px',
    },
}))(TableRow);
export var SmallTableHeadRow = withStyles(createStyles({
    root: {
        height: '40px',
    },
}))(TableRow);
export var SmallTableRow = withStyles(createStyles({
    root: {
        height: '40px',
    },
}))(TableRow);
export var SmallTableCell = withStyles(createStyles({
    root: {
        height: '40px',
        padding: '15px',
    },
    footer: {
        backgroundColor: warning,
        color: warning,
    },
}))(TableCell);
export var TagTableCell = withStyles(createStyles({
    root: {
        verticalAlign: 'middle',
        maxWidth: '350px',
    },
}))(TableCell);
//# sourceMappingURL=tables.js.map