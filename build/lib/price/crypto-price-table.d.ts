import * as React from "react";
import { WithStyles, StyleSheet, StyledComponentProps, ClassNameMap } from 'react-jss';
export declare const styles: StyleSheet;
export declare type Token = {
    name: string;
    symbol: string;
    price: number;
    balance: number;
    balanceInFiat: number;
    address: string;
    hidden: boolean;
    isCustom: boolean;
};
export declare type CryptoPriceTableProps = {
    locale: string;
    fiatCurrency: string;
    tokens: Array<Token>;
    toggleAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare type CryptoPriceTableState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & CryptoPriceTableProps;
export declare class CryptoPriceTableComponent extends React.Component<StyledProps, CryptoPriceTableState> {
    constructor(props: StyledProps);
    showCustomTokenHideToggle(isCustomToken: boolean, isHidden: boolean, toggleAction: ((event: React.MouseEvent<HTMLElement>) => void) | undefined, classes: Partial<ClassNameMap<string>>): JSX.Element | undefined;
    render(): JSX.Element;
}
export declare const CryptoPriceTable: React.ComponentType<CryptoPriceTableProps & StyledComponentProps<string>>;
export default CryptoPriceTable;
