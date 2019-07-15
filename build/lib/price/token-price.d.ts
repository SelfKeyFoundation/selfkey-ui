/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type TokenPriceProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: number;
    toCurrency: string;
    toValue: number;
};
export declare const TokenPrice: React.ComponentType<TokenPriceProps & import("react-jss").StyledComponentProps<string>>;
export default TokenPrice;
