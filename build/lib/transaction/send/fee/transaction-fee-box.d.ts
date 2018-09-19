import * as React from 'react';
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type EthGasStationInfo = {
    safeLow: string;
    average: string;
    fast: string;
};
export declare type TransactionFeeBoxProps = {
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void);
};
export declare type TransactionFeeBoxState = {
    showAdvanced: boolean;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionFeeBoxProps;
export declare class TransactionFeeBoxComponent extends React.Component<StyledProps, TransactionFeeBoxState> {
    constructor(props: StyledProps);
    renderActualTransactionFeeBox(): JSX.Element;
    toggleShowAdvanced(): void;
    renderEdvancedContent(): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionFeeBox: React.ComponentType<TransactionFeeBoxProps & StyledComponentProps<string>>;
export default TransactionFeeBox;
