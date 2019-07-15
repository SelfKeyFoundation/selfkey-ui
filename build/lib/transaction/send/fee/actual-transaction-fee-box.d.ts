/// <reference path="../../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet } from 'react-jss';
export declare const styles: StyleSheet;
export declare type ActualTransactionFeeBoxProps = {
    locale: string;
    ethFee: number;
    usdFee: number;
    fiatCurrency: string;
};
export declare const ActualTransactionFeeBox: React.ComponentType<ActualTransactionFeeBoxProps & import("react-jss").StyledComponentProps<string>>;
export default ActualTransactionFeeBox;
