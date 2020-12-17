import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
export declare const styles: Record<"table" | "cryptoPriceTable" | "headerTableRow" | "bodyTableRow" | "iconSize", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
declare type Token = {
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
    tokens: Token[];
    toggleAction?: (event: React.MouseEvent<HTMLElement>, token: Token) => void;
    alwaysVisible?: string[];
};
export declare type CryptoPriceTableState = {};
export declare type StyledProps = WithStyles<typeof styles> & CryptoPriceTableProps;
export declare class CryptoPriceTableComponent extends React.Component<StyledProps, CryptoPriceTableState> {
    renderVisibilityButton(token: Token): JSX.Element | undefined;
    renderRow(token: Token, index: number): JSX.Element;
    render(): JSX.Element;
}
export declare const CryptoPriceTable: React.ComponentType<Pick<StyledProps, "locale" | "fiatCurrency" | "tokens" | "showCurrency" | "toggleAction" | "alwaysVisible"> & import("@material-ui/styles").StyledComponentProps<"table" | "cryptoPriceTable" | "headerTableRow" | "bodyTableRow" | "iconSize">>;
export default CryptoPriceTable;
