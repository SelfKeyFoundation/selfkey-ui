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
    networkFee: number;
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
    sendAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    onAddressFieldChange?: Function;
};
export declare type TransactionSendBoxState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionSendBoxProps;
export declare class TransactionSendBoxComponent extends React.Component<StyledProps, TransactionSendBoxState> {
    constructor(props: StyledProps);
    renderFeeBox(): JSX.Element;
    onAddressFieldChange(event: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export declare const TransactionSendBox: React.ComponentType<TransactionSendBoxProps & StyledComponentProps<string>>;
export default TransactionSendBox;
