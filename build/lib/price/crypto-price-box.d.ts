/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type CryptoPriceBoxProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: number;
    toCurrency: string;
    toValue: number;
};
export declare const CryptoPriceBox: React.ComponentType<CryptoPriceBoxProps & import("react-jss").StyledComponentProps<string>>;
export default CryptoPriceBox;
