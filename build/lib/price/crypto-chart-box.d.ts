import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import { ChartEvent } from 'react-google-charts';
declare const styles: Record<"active" | "header" | "horizontalDivider" | "cryptoBox" | "coloredBox" | "coloredBoxText" | "prices" | "texts" | "totalPrice" | "totalPriceText" | "chartCenterContainer" | "chart" | "gearButton" | "buttonViewMore" | "buttonViewMoreText" | "expandMore" | "headerText", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
declare type Token = {
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
declare type StyledProps = WithStyles<keyof typeof styles> & CryptoChartBoxProps;
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
    getTokensLegend(classes: any, tokens: Array<Token>, locale: string, fiatCurrency: string): JSX.Element[];
    hasBalance(): boolean;
    getChartData(tokens: Array<Token>): (string | number)[][];
    DEFAULT_COLLOR: string;
    getColors(): string[];
    getTotalBalanceInFiat(tokens: Array<Token>): number;
    getChart(): any;
    onItemHoverEnter(index: number): void;
    onItemHoverLeave(): void;
    toggleViewAll(): void;
    getViewAllSection(): "" | JSX.Element;
    render(): JSX.Element;
}
export declare const CryptoChartBox: React.ComponentType<Pick<StyledProps, "locale" | "fiatCurrency" | "tokens" | "manageCryptoAction" | "topTokenListSize" | "viewAll" | "toggleViewAll"> & import("@material-ui/core").StyledComponentProps<"active" | "header" | "horizontalDivider" | "cryptoBox" | "coloredBox" | "coloredBoxText" | "prices" | "texts" | "totalPrice" | "totalPriceText" | "chartCenterContainer" | "chart" | "gearButton" | "buttonViewMore" | "buttonViewMoreText" | "expandMore" | "headerText">>;
export default CryptoChartBox;
