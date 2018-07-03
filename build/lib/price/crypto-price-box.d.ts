/// <reference types="react" />
import { SFC } from 'react';
export declare type CryptoPriceBoxProps = {
    fromLocale: string;
    fromCurrencyShort: string;
    fromValue: string;
    toLocale: string;
    toCurrencyShort: string;
    toValue: string;
};
/** Test description */
export declare const CryptoPriceBox: SFC<CryptoPriceBoxProps>;
export default CryptoPriceBox;
