/// <reference types="react" />
import { SFC } from 'react';
export declare type CryptoPriceBoxProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: string;
    toCurrency: string;
    toValue: string;
};
/** Test description */
export declare const CryptoPriceBox: SFC<CryptoPriceBoxProps>;
export default CryptoPriceBox;
