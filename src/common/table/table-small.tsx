import * as React from "react";
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import CommonStyle  from './common-style';
export const styles: StyleSheet = {
  header: {
    ...CommonStyle.header,
    height: '40px'
  },
  body: {
    ...CommonStyle.body,
    '&& tr > td': {
      ...CommonStyle.body['&& tr > td'],
      fontSize: '14px',
      lineHeight: '17px'
    }
   },
  row: {
      height: '40px'
  }
};

export type TableSmallProps = {
  header?: any;
  rows?: any;
};

export type TableSmallState = {}

export type StyledProps = WithStyles<keyof typeof styles> & TableSmallProps;


export class TableSmallComponent extends React.Component<StyledProps, TableSmallState> {

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

export const TableSmall = injectSheet(styles)(TableSmallComponent);

export default TableSmall;
