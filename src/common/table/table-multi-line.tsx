import * as React from "react";
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import CommonStyle from './common-style';
export const styles: StyleSheet = {
  smallTitle: {
      color: '#93B0C1',
      fontSize: '13px',
      paddingTop: '5px',
      lineHeight: '19px'
  },
  header: { ...CommonStyle.header },
  body: {
    ...CommonStyle.body
  },
  row: {
      height: '74px'
  }
};

export type TableMultiLineProps = {
  header?: any;
  rows?: any;
};

export type TableMultiLineState = {}

export type StyledProps = WithStyles<keyof typeof styles> & TableMultiLineProps;


export class TableMultiLineComponent extends React.Component<StyledProps, TableMultiLineState> {

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
                  <div> title 1ddddddddddddddddddddddd aaaaaaaaaaaaaaaaaa dsad sad asd sa</div>
                  <div className={classes.smallTitle}> title small one </div>
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

export const TableMultiLine = injectSheet(styles)(TableMultiLineComponent);

export default TableMultiLine;
