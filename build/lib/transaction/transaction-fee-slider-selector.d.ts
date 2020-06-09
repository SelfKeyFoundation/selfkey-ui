import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import BN from 'bignumber.js';
declare const styles: Record<"activated" | "root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "sliderLabels" | "networkFeeValue" | "rightAligned", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
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
export declare type StyledProps = WithStyles<typeof styles> & TransactionFeeSelectorProps;
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
    getTransactionPrice: (price: any, fiat: any) => JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionFeeSliderSelector: React.ComponentType<Pick<StyledProps, "defaultValue" | "onChange" | "value" | "gasLimit" | "minGasPrice" | "maxGasPrice" | "fiat" | "fiatRate" | "slowPrice" | "mediumPrice" | "fastPrice" | "transactionPrices"> & import("@material-ui/core").StyledComponentProps<"activated" | "root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "sliderLabels" | "networkFeeValue" | "rightAligned">>;
export default TransactionFeeSliderSelector;
