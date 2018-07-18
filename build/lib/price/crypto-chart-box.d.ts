import * as React from 'react';
import { StyleSheet, StyledComponentProps, ClassNameMap, WithStyles } from 'react-jss';
import { ChartEvent } from 'react-google-charts';
declare const styles: StyleSheet;
export declare type Token = {
    name: string;
    symbol: string;
    balance: number;
    balanceInFiat: number;
};
export declare type CryptoChartBoxProps = {
    locale: string;
    fiatCurrency: string;
    tokens: Array<Token>;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & CryptoChartBoxProps;
export declare type Active = {
    active: boolean;
};
export declare type CryptoChartBoxState = {
    tokens: Array<Active>;
};
export declare type chartType = {
    setSelection: Function;
};
export declare class CryptoChartBoxComponent extends React.Component<StyledProps, CryptoChartBoxState> {
    tokens: Array<Active>;
    state: {
        tokens: Active[];
    };
    selection: never[];
    chart: chartType;
    constructor(props: StyledProps);
    initSelection(): void;
    componentDidUpdate(): void;
    selectEvent: ChartEvent;
    onMouseOverEvent: ChartEvent;
    onMouseOutEvent: ChartEvent;
    chartEvents: ChartEvent[];
    getTokensLegend(classes: Partial<ClassNameMap<string>>, tokens: Array<Token>, locale: string, fiatCurrency: string): JSX.Element[];
    getChartData(tokens: Array<Token>): (string | number)[][];
    getColors(): string[];
    getTotalBalanceInFiat(tokens: Array<Token>): number;
    render(): JSX.Element;
}
export declare const CryptoChartBox: React.ComponentType<CryptoChartBoxProps & StyledComponentProps<string>>;
export default CryptoChartBox;
