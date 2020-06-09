import * as React from 'react';
import { WithStyles } from '@material-ui/core';
export declare const styles: Record<"table" | "cryptoPriceTable" | "headerTableRow" | "bodyTableRow" | "iconSize", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
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
    showCurrency?: boolean;
    tokens: Array<Token>;
    toggleAction?: ((event: React.MouseEvent<HTMLElement>, token: Token) => void);
    alwaysVisible?: Array<string>;
};
export declare type CryptoPriceTableState = {};
export declare type StyledProps = WithStyles<typeof styles> & CryptoPriceTableProps;
export declare class CryptoPriceTableComponent extends React.Component<StyledProps, CryptoPriceTableState> {
    renderVisibilityButton(token: Token): JSX.Element | undefined;
    renderRow(token: Token, index: number): JSX.Element;
    render(): JSX.Element;
}
export declare const CryptoPriceTable: React.ComponentType<Pick<StyledProps, "locale" | "showCurrency" | "fiatCurrency" | "tokens" | "toggleAction" | "alwaysVisible"> & import("@material-ui/core").StyledComponentProps<"table" | "cryptoPriceTable" | "headerTableRow" | "bodyTableRow" | "iconSize">>;
export default CryptoPriceTable;
