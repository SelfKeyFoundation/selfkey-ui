import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
export declare type TokenPriceProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: number;
    toCurrency: string;
    toValue: number;
};
export declare const TokenPrice: React.ComponentType<TokenPriceProps & StyledComponentProps<string>>;
export default TokenPrice;
