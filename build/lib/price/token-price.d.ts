/// <reference types="react" />
import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
export declare type TokenPriceProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: string;
    toCurrency: string;
    toValue: string;
};
export declare const TokenPrice: React.ComponentType<TokenPriceProps & StyledComponentProps<string>>;
export default TokenPrice;
