import * as React from "react";
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import CommonStyle from './common-style';

export const styles: StyleSheet = {
  header: { ...CommonStyle.header },
  body: {
    ...CommonStyle.body
  },
  row: {
    height: '74px'
  }
};

export type TableLargeProps = {
  header?: any;
  rows?: any;
};

export type TableLargeState = {}

export type StyledProps = WithStyles<keyof typeof styles> & TableLargeProps;


export class TableLargeComponent extends React.Component<StyledProps, TableLargeState> {

  constructor(props: StyledProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell >Calories</TableCell>
            <TableCell >Fat (g)</TableCell>
            <TableCell >Carbs (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          <TableRow className={classes.row}>
            <TableCell>
              jondia
                 </TableCell>
            <TableCell>bondia</TableCell>
            <TableCell>bondia</TableCell>
            <TableCell>bondia</TableCell>
            <TableCell>bondia</TableCell>
          </TableRow>
          <TableRow className={classes.row}>
            <TableCell>
              jondia
                 </TableCell>
            <TableCell>bondia</TableCell>
            <TableCell>bondia</TableCell>
            <TableCell>bondia</TableCell>
            <TableCell>bondia</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export const TableLarge = injectSheet(styles)(TableLargeComponent);

export default TableLarge;
