import { withStyles, TableRow, TableCell } from '@material-ui/core';

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
})(TableCell);
