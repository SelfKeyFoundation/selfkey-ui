import * as React from 'react';
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type EthGasStationInfo = {
    safeLow: string;
    average: string;
    fast: string;
};
export declare type Token = {
    name: string;
    symbol: string;
    price: number;
    balance: number;
    balanceInFiat: number;
    address?: string;
    hidden: boolean;
    isCustom: boolean;
};
export declare type TransactionSendBoxProps = {
    locale: string;
    fiatCurrency: string;
    address: string;
    amount: number;
    amountUsd: number;
    gasPrice: number;
    gasLimit: number;
    nonce: number;
    addressError: boolean;
    ethFee: number;
    usdFee: number;
    balance: number;
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void);
    cryptoCurrency?: string;
    isSendCustomToken?: boolean;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    onSendAction: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    onAddressFieldChange?: Function;
    onAmountInputChange?: Function;
    onCryptoCurrencyChange?: Function;
    changeGasLimitAction?: Function;
    changeGasPriceAction?: Function;
    sending: boolean;
    confirmAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    cancelAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    tokens: Array<Token>;
};
export declare type TransactionSendBoxState = {
    amount: string;
    address: string;
    cryptoCurrency?: string;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionSendBoxProps;
export declare class TransactionSendBoxComponent extends React.Component<StyledProps, TransactionSendBoxState> {
    constructor(props: StyledProps);
    renderFeeBox(): JSX.Element;
    handleAllAmountClick(): void;
    handleAddressChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleAmountChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleCryptoCurrencyChange(event: React.ChangeEvent<HTMLSelectElement>): void;
    renderSelectTokenItems(): JSX.Element[];
    renderButtons(): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionSendBox: React.ComponentType<TransactionSendBoxProps & StyledComponentProps<string>>;
export default TransactionSendBox;
