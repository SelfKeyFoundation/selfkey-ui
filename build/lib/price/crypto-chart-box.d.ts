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
};
export declare type StyledProps = WithStyles<keyof typeof styles> & CryptoChartBoxProps;
export declare type Active = {
    active: boolean;
};
export declare type CryptoChartBoxState = {
    activations: Array<Active>;
    displayedTokens: Array<Token>;
    viewAll: boolean;
};
export declare type chartType = {
    setSelection: Function;
};
export declare class CryptoChartBoxComponent extends React.Component<StyledProps, CryptoChartBoxState> {
    TOP_TOKEN_LIST_SIZE: number;
    OTHERS_COLOR: string;
    otherTokens: Array<Token>;
    activations: Array<Active>;
    topTokens: Array<Token>;
    othersToken: Token;
    state: {
        activations: Active[];
        displayedTokens: Token[];
        viewAll: boolean;
    };
    selection: never[];
    chart: chartType;
    constructor(props: StyledProps);
    initState(props: StyledProps): void;
    getOthersToken(otherTokens: Array<Token>): {
        name: string;
        symbol: string;
        balance: any;
        balanceInFiat: any;
    };
    getOthersTokenBalance(otherTokens: Array<Token>, balanceType: string): any;
    initSelection(): void;
    componentDidUpdate(): void;
    selectEvent: ChartEvent;
    onMouseOverEvent: ChartEvent;
    onMouseOutEvent: ChartEvent;
    chartEvents: ChartEvent[];
    getTokensLegend(classes: Partial<ClassNameMap<string>>, tokens: Array<Token>, locale: string, fiatCurrency: string): JSX.Element[];
    toogleViewAllTokens(viewAll: boolean): void;
    getChartData(tokens: Array<Token>): (string | number)[][];
    getColors(): string[];
    getTotalBalanceInFiat(tokens: Array<Token>): number;
    render(): JSX.Element;
}
export declare const CryptoChartBox: React.ComponentType<CryptoChartBoxProps & StyledComponentProps<string>>;
export default CryptoChartBox;
