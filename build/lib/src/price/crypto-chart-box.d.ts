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
    manageCryptoAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    topTokenListSize: number;
    viewAll: boolean;
    toggleViewAll?: Function;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & CryptoChartBoxProps;
export declare type Active = {
    active: boolean;
};
export declare type CryptoChartBoxState = {
    activations: Array<Active>;
};
export declare type ChartType = {
    setSelection: Function;
};
export declare type ChartElementType = {
    wrapper: ChartWrapperType;
};
export declare type ChartWrapperType = {
    getChart: Function;
};
export declare class CryptoChartBoxComponent extends React.Component<StyledProps, CryptoChartBoxState> {
    OTHERS_COLOR: string;
    activations: Array<Active>;
    state: {
        activations: Active[];
    };
    selection: never[];
    chart: ChartType;
    refs: {
        pieChart: HTMLElement & ChartElementType;
    };
    constructor(props: StyledProps);
    initActivations(tokens: Array<Token>): void;
    initSelection(): void;
    componentDidUpdate(prevProps: StyledProps): void;
    selectEvent: ChartEvent;
    onMouseOverEvent: ChartEvent;
    onMouseOutEvent: ChartEvent;
    getChartEvents(): ChartEvent[];
    getTokensLegend(classes: Partial<ClassNameMap<string>>, tokens: Array<Token>, locale: string, fiatCurrency: string): JSX.Element[];
    hasBalance(): boolean;
    getChartData(tokens: Array<Token>): React.Key[][];
    DEFAULT_COLLOR: string;
    getColors(): string[];
    getTotalBalanceInFiat(tokens: Array<Token>): number;
    getChart(): any;
    onItemHoverEnter(index: number): void;
    onItemHoverLeave(): void;
    toggleViewAll(): void;
    getViewAllSection(): JSX.Element | "";
    render(): JSX.Element;
}
export declare const CryptoChartBox: React.ComponentType<CryptoChartBoxProps & StyledComponentProps<string>>;
export default CryptoChartBox;
