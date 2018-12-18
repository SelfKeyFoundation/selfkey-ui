/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet } from 'react-jss';
import { WithStyles } from '@material-ui/core';
declare const styles: StyleSheet;
export declare type UnlockState = {
    understood: boolean;
    error: boolean;
    fee: number;
};
export declare type UnlockProps = {
    amount?: number;
    token?: string;
    days?: number;
    minGasPrice: number;
    maxGasPrice: number;
    gasLimit: number;
    fiat: string;
    fiatRate: number;
    onTransactionFeeChange?: (value: number) => void;
    onConfirm: (value: number) => void;
    onCancel: () => void;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & UnlockProps;
export declare class UnlockComponent extends React.Component<StyledProps, UnlockState> {
    state: {
        error: boolean;
        understood: boolean;
        fee: number;
    };
    handleUnderstoodChange: (event: object, checked: boolean) => void;
    handleFeeChange: (fee: number) => void;
    handleSubmit: (event: any) => void;
    render(): JSX.Element;
}
export declare const Unlock: React.ComponentType<UnlockProps & import("react-jss").StyledComponentProps<string>>;
export default Unlock;
