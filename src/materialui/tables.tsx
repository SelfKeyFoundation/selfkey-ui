import { withStyles, TableRow, TableCell } from '@material-ui/core';
import { warning } from 'colors';

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
    // maxWidth: '150px',
    padding: '0 15px',
  },
  footer: {
    backgroundColor: warning,
    color: warning,
  },
})(TableCell);

export const TagTableCell = withStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    maxWidth: '350px',
  },
})(TableCell);
