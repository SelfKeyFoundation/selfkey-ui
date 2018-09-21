import * as React from 'react';
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type EthGasStationInfo = {
    safeLow: string;
    average: string;
    fast: string;
};
export declare type TransactionFeeBoxProps = {
    ethFee: number;
    usdFee: number;
    gasLimit: number;
    nonce: number;
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void);
};
export declare type TransactionFeeBoxState = {
    showAdvanced: boolean;
    gasLimit: number;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionFeeBoxProps;
export declare class TransactionFeeBoxComponent extends React.Component<StyledProps, TransactionFeeBoxState> {
    constructor(props: StyledProps);
    renderActualTransactionFeeBox(): JSX.Element;
    toggleShowAdvanced(): void;
    setGasLimit(event: React.ChangeEvent<HTMLInputElement>): void;
    renderEdvancedContent(): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionFeeBox: React.ComponentType<TransactionFeeBoxProps & StyledComponentProps<string>>;
export default TransactionFeeBox;
