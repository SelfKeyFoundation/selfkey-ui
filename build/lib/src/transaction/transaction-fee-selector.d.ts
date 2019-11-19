/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet, WithStyles } from 'react-jss';
import BN from 'bignumber.js';
declare const styles: StyleSheet;
export declare type TransactionFeeSelectorProps = {
    minGasPrice: number;
    maxGasPrice: number;
    gasLimit: number;
    fiat: string;
    fiatRate: number;
    defaultValue?: number;
    value?: number;
    onChange: (value: number) => void;
};
export declare type TransactionFeeSelectorState = {
    value: number | null;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionFeeSelectorProps;
export declare class TransactionFeeSelectorComponent extends React.Component<StyledProps, TransactionFeeSelectorState> {
    state: {
        value: null;
    };
    handleChange: (event: React.ChangeEvent<Element>, value: number) => void;
    componentDidMount(): void;
    readonly avarageGasPrice: number;
    readonly value: number;
    readonly transactionFee: BN;
    readonly fiatFee: BN;
    render(): JSX.Element;
}
export declare const TransactionFeeSelector: React.ComponentType<TransactionFeeSelectorProps & import("react-jss").StyledComponentProps<string>>;
export default TransactionFeeSelector;
