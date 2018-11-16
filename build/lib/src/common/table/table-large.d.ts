import * as React from "react";
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type TableLargeProps = {
    header?: any;
    rows?: any;
};
export declare type TableLargeState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & TableLargeProps;
export declare class TableLargeComponent extends React.Component<StyledProps, TableLargeState> {
    constructor(props: StyledProps);
    render(): JSX.Element;
}
export declare const TableLarge: React.ComponentType<TableLargeProps & StyledComponentProps<string>>;
export default TableLarge;
