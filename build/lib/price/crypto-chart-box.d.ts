import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
export declare type Token = {
    name: string;
    symbol: string;
    balance: number;
    balanceInFiat: number;
};
export declare type Wallet = {
    tokens: Array<Token>;
};
export declare type CryptoChartBoxProps = {
    locale: string;
    fiatCurrency: string;
    wallet: Wallet;
};
export declare const CryptoChartBox: React.ComponentType<CryptoChartBoxProps & StyledComponentProps<string>>;
export default CryptoChartBox;
