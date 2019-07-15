/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { WithStyles, StyleSheet } from 'react-jss';
export declare const styles: StyleSheet;
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
export declare type CryptoPriceTableProps = {
    locale: string;
    fiatCurrency: string;
    tokens: Array<Token>;
    toggleAction?: ((event: React.MouseEvent<HTMLElement>, token: Token) => void);
    alwaysVisible?: Array<string>;
};
export declare type CryptoPriceTableState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & CryptoPriceTableProps;
export declare class CryptoPriceTableComponent extends React.Component<StyledProps, CryptoPriceTableState> {
    constructor(props: StyledProps);
    renderVisibilityButton(token: Token): JSX.Element | undefined;
    renderRow(token: Token, index: number): JSX.Element;
    render(): JSX.Element;
}
export declare const CryptoPriceTable: React.ComponentType<CryptoPriceTableProps & import("react-jss").StyledComponentProps<string>>;
export default CryptoPriceTable;
