import * as React from 'react';
import { StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type ActualTransactionFeeBoxProps = {
    locale: string;
    ethFee: number;
    usdFee: number;
    fiatCurrency: string;
};
export declare const ActualTransactionFeeBox: React.ComponentType<ActualTransactionFeeBoxProps & StyledComponentProps<string>>;
export default ActualTransactionFeeBox;
