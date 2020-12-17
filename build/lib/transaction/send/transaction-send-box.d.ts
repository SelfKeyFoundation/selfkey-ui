import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
export declare const styles: Record<"button" | "input" | "divider" | "container" | "selectAllAmountBtn" | "actionButtonsContainer" | "inputError" | "amountContainer" | "cryptoCurrencyText" | "usdAmoutContainer" | "amountInput" | "addressErrorText" | "addressErrorColor" | "cryptoSelect" | "selectItem", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
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
    reloadEthGasStationInfoAction?: (event: React.MouseEvent<SVGSVGElement>) => void;
    cryptoCurrency?: string;
    isSendCustomToken?: boolean;
    closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
    onSendAction: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onAddressFieldChange?: Function;
    onAmountInputChange?: Function;
    onCryptoCurrencyChange?: Function;
    changeGasLimitAction?: Function;
    changeGasPriceAction?: Function;
    sending: boolean;
    confirmAction?: (event: React.MouseEvent<HTMLElement>) => void;
    cancelAction?: (event: React.MouseEvent<HTMLElement>) => void;
    tokens: Token[];
};
export declare type TransactionSendBoxState = {
    amount: string;
    address: string;
    cryptoCurrency?: string;
};
export declare type StyledProps = WithStyles<typeof styles> & TransactionSendBoxProps;
export declare class TransactionSendBoxComponent extends React.Component<StyledProps, TransactionSendBoxState> {
    constructor(props: StyledProps);
    renderFeeBox: () => JSX.Element;
    handleAllAmountClick(): void;
    handleAddressChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleAmountChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleCryptoCurrencyChange(event: React.ChangeEvent<HTMLSelectElement>): void;
    renderSelectTokenItems(): JSX.Element[];
    renderButtons(): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionSendBox: React.ComponentType<Pick<StyledProps, "address" | "balance" | "locale" | "nonce" | "cryptoCurrency" | "fiatCurrency" | "tokens" | "closeAction" | "cancelAction" | "ethFee" | "usdFee" | "gasLimit" | "gasPrice" | "ethGasStationInfo" | "reloadEthGasStationInfoAction" | "changeGasLimitAction" | "changeGasPriceAction" | "amount" | "amountUsd" | "addressError" | "isSendCustomToken" | "onSendAction" | "onAddressFieldChange" | "onAmountInputChange" | "onCryptoCurrencyChange" | "sending" | "confirmAction"> & import("@material-ui/styles").StyledComponentProps<"button" | "input" | "divider" | "container" | "selectAllAmountBtn" | "actionButtonsContainer" | "inputError" | "amountContainer" | "cryptoCurrencyText" | "usdAmoutContainer" | "amountInput" | "addressErrorText" | "addressErrorColor" | "cryptoSelect" | "selectItem">>;
export default TransactionSendBox;
