import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
import BN from 'bignumber.js';
declare const styles: Record<"root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "activated" | "sliderLabels" | "networkFeeValue", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
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
export declare const TransactionFeeSelector: React.ComponentType<Pick<StyledProps, "onChange" | "gasLimit" | "defaultValue" | "value" | "minGasPrice" | "maxGasPrice" | "fiat" | "fiatRate"> & import("@material-ui/styles").StyledComponentProps<"root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "activated" | "sliderLabels" | "networkFeeValue">>;
export default TransactionFeeSelector;
