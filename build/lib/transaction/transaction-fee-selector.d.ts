import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import BN from 'bignumber.js';
declare const styles: Record<"activated" | "root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "sliderLabels" | "networkFeeValue", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
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
declare type TransactionFeeSelectorState = {
    value: number | null;
};
declare type StyledProps = WithStyles<typeof styles> & TransactionFeeSelectorProps;
export declare class TransactionFeeSelectorComponent extends React.Component<StyledProps, TransactionFeeSelectorState> {
    state: {
        value: null;
    };
    handleChange: (event: React.ChangeEvent, value: number) => void;
    componentDidMount(): void;
    get avarageGasPrice(): number;
    get value(): number;
    get transactionFee(): BN;
    get fiatFee(): BN;
    render(): JSX.Element;
}
export declare const TransactionFeeSelector: React.ComponentType<Pick<StyledProps, "defaultValue" | "onChange" | "value" | "gasLimit" | "minGasPrice" | "maxGasPrice" | "fiat" | "fiatRate"> & import("@material-ui/core").StyledComponentProps<"activated" | "root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "sliderLabels" | "networkFeeValue">>;
export default TransactionFeeSelector;
