import * as React from 'react';
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type EthGasStationInfo = {
    safeLow: string;
    average: string;
    fast: string;
};
export declare type TransactionFeeBoxProps = {
    locale: string;
    fiatCurrency: string;
    ethFee: number;
    usdFee: number;
    gasLimit: number;
    gasPrice: number;
    nonce: number;
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void);
    changeGasLimitAction?: Function;
    changeGasPriceAction?: Function;
};
export declare type TransactionFeeBoxState = {
    showAdvanced: boolean;
    gasLimit: number;
    gasPrice: number;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionFeeBoxProps;
export declare class TransactionFeeBoxComponent extends React.Component<StyledProps, TransactionFeeBoxState> {
    constructor(props: StyledProps);
    componentDidUpdate(prevProps: StyledProps): void;
    renderActualTransactionFeeBox(): JSX.Element;
    toggleShowAdvanced(): void;
    setGasLimit(event: React.ChangeEvent<HTMLInputElement>): void;
    setGasPricet(event: React.ChangeEvent<HTMLInputElement>): void;
    renderAdvancedContent(): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionFeeBox: React.ComponentType<TransactionFeeBoxProps & StyledComponentProps<string>>;
export default TransactionFeeBox;
