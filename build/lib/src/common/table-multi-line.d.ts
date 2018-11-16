import * as React from "react";
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type TableMultiLineProps = {
    header?: any;
    rows?: any;
};
export declare type TableMultiLineState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & TableMultiLineProps;
export declare class TableMultiLineComponent extends React.Component<StyledProps, TableMultiLineState> {
    constructor(props: StyledProps);
    render(): JSX.Element;
}
export declare const TableMultiLine: React.ComponentType<TableMultiLineProps & StyledComponentProps<string>>;
export default TableMultiLine;
