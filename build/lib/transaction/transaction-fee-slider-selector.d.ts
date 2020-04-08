import * as React from 'react';
import { StyleSheet, WithStyles } from 'react-jss';
import BN from 'bignumber.js';
declare const styles: StyleSheet;
export declare type TransactionFeeSelectorProps = {
    minGasPrice: number;
    maxGasPrice: number;
    slowPrice: number;
    mediumPrice: number;
    fastPrice: number;
    transactionPrices?: any;
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
    get avarageGasPrice(): number;
    get value(): number;
    get transactionFee(): BN;
    get fiatFee(): BN;
    getTransactionPrice: (price: any, fiat: any) => JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionFeeSliderSelector: React.ComponentType<TransactionFeeSelectorProps & import("react-jss").StyledComponentProps<string>>;
export default TransactionFeeSliderSelector;
