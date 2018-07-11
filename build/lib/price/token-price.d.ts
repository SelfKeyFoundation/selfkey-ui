/// <reference types="react" />
import { SFC } from 'react';
export declare type TokenPriceProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: string;
    toCurrency: string;
    toValue: string;
};
/** Test description */
export declare const TokenPrice: SFC<TokenPriceProps>;
export default TokenPrice;
