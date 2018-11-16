import * as React from "react";
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type TableSmallProps = {
    header?: any;
    rows?: any;
};
export declare type TableSmallState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & TableSmallProps;
export declare class TableSmallComponent extends React.Component<StyledProps, TableSmallState> {
    constructor(props: StyledProps);
    render(): JSX.Element;
}
export declare const TableSmall: React.ComponentType<TableSmallProps & StyledComponentProps<string>>;
export default TableSmall;
