/// <reference types="react" />
import { SFC } from 'react';
export declare type CryptoPriceBoxProps = {
    fromLocale: string;
    fromCurrency: string;
    fromValue: string;
    toLocale: string;
    toCurrency: string;
    toValue: string;
};
/** Test description */
export declare const CryptoPriceBox: SFC<CryptoPriceBoxProps>;
export default CryptoPriceBox;
