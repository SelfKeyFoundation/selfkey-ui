/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet } from 'react-jss';
import { WithStyles } from '@material-ui/core';
declare const styles: StyleSheet;
export declare type ReturnState = {
    understood: boolean;
    error: boolean;
    fee: number;
};
export declare type ReturnProps = {
    amount?: number;
    token?: string;
    minGasPrice: number;
    maxGasPrice: number;
    gasLimit: number;
    fiat: string;
    fiatRate: number;
    onTransactionFeeChange?: (value: number) => void;
    onConfirm: (value: number) => void;
    onCancel: () => void;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & ReturnProps;
export declare class ReturnComponent extends React.Component<StyledProps, ReturnState> {
    state: {
        error: boolean;
        understood: boolean;
        fee: number;
    };
    handleFeeChange: (fee: number) => void;
    handleConfirm: (event: any) => void;
    render(): JSX.Element;
}
export declare const Return: React.ComponentType<ReturnProps & import("react-jss").StyledComponentProps<string>>;
export default Return;
