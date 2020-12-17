import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
export declare const styles: Record<"checkbox" | "icon" | "formGroup" | "formControl" | "container" | "fullWidth" | "networkTransactionFeeTitle" | "showAdvancedContainer" | "rightIcon" | "downIcon" | "inputsContainer" | "checkboxRoot" | "checkboxChecked" | "checkboxLabel" | "nonceValue" | "currNetworkStatusContainer" | "currNetworkStatusTitle" | "reloadNetworkIcon" | "gasPriceValuesContainer", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
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
    showAdvanced?: boolean;
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: (event: React.MouseEvent<SVGSVGElement>) => void;
    changeGasLimitAction?: Function;
    changeGasPriceAction?: Function;
};
export declare type TransactionFeeBoxState = {
    showAdvanced: boolean;
    gasLimit: number;
    gasPrice: number;
};
export declare type StyledProps = WithStyles<typeof styles> & TransactionFeeBoxProps;
export declare class TransactionFeeBoxComponent extends React.Component<StyledProps, TransactionFeeBoxState> {
    timerToUpdateGasPrice: number;
    timerToUpdateGasLimit: number;
    TIME_FOR_INPUT_CHANGE: number;
    constructor(props: StyledProps);
    componentDidUpdate(prevProps: StyledProps): void;
    renderActualTransactionFeeBox(): JSX.Element;
    toggleShowAdvanced(): void;
    setGasLimit(event: React.ChangeEvent<HTMLInputElement>): void;
    setGasPrice(event: React.ChangeEvent<HTMLInputElement>): void;
    renderAdvancedContent(): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionFeeBox: React.ComponentType<Pick<StyledProps, "locale" | "fiatCurrency" | "gasPrice" | "gasLimit" | "nonce" | "ethFee" | "usdFee" | "ethGasStationInfo" | "reloadEthGasStationInfoAction" | "changeGasLimitAction" | "changeGasPriceAction" | "showAdvanced"> & import("@material-ui/styles").StyledComponentProps<"checkbox" | "icon" | "formGroup" | "formControl" | "container" | "fullWidth" | "networkTransactionFeeTitle" | "showAdvancedContainer" | "rightIcon" | "downIcon" | "inputsContainer" | "checkboxRoot" | "checkboxChecked" | "checkboxLabel" | "nonceValue" | "currNetworkStatusContainer" | "currNetworkStatusTitle" | "reloadNetworkIcon" | "gasPriceValuesContainer">>;
export default TransactionFeeBox;
