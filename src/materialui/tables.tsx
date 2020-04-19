import { withStyles, TableRow, TableCell } from '@material-ui/core';
import { warning } from '../colors';

export const LargeTableHeadRow = withStyles({
  root: {
    height: '50px',
  },
})(TableRow);

export const SmallTableHeadRow = withStyles({
  root: {
    height: '40px',
  },
})(TableRow);

export const SmallTableRow = withStyles({
  root: {
    height: '40px',
  },
})(TableRow);

export const SmallTableCell = withStyles({
  root: {
    height: '40px',
    padding: '15px',
  },
  footer: {
    backgroundColor: warning,
    color: warning,
  },
})(TableCell);

export const TagTableCell = withStyles({
  root: {
    verticalAlign: 'middle',
    maxWidth: '350px',
  },
})(TableCell);
