import { TableRow, TableCell } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import { warning } from '../colors';
export const LargeTableHeadRow = withStyles(createStyles({
    root: {
        height: '50px',
    },
}))(TableRow);
export const SmallTableHeadRow = withStyles(createStyles({
    root: {
        height: '40px',
    },
}))(TableRow);
export const SmallTableRow = withStyles(createStyles({
    root: {
        height: '40px',
    },
}))(TableRow);
export const SmallTableCell = withStyles(createStyles({
    root: {
        height: '40px',
        padding: '16px',
    },
    footer: {
        backgroundColor: warning,
        color: warning,
    },
}))(TableCell);
export const TagTableCell = withStyles(createStyles({
    root: {
        verticalAlign: 'middle',
        maxWidth: '350px',
    },
}))(TableCell);
//# sourceMappingURL=tables.js.map