import * as React from 'react';
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type EthGasStationInfo = {
    safeLow: string;
    average: string;
    fast: string;
};
export declare type TransactionSendBoxProps = {
    address: string;
    amount: number;
    amountUsd: number;
    gasPrice: number;
    gasLimit: number;
    nonce: number;
    addressError: boolean;
    ethValue: number;
    usdValue: number;
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void);
    cryptoCurrency: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    onSendAction: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    onSelectAllAmount?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    onAddressFieldChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
    onAmountInputChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
};
export declare type TransactionSendBoxState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionSendBoxProps;
export declare class TransactionSendBoxComponent extends React.Component<StyledProps, TransactionSendBoxState> {
    constructor(props: StyledProps);
    renderFeeBox(): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionSendBox: React.ComponentType<TransactionSendBoxProps & StyledComponentProps<string>>;
export default TransactionSendBox;
