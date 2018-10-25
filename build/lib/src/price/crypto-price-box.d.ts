import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
export declare type CryptoPriceBoxProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: number;
    toCurrency: string;
    toValue: number;
};
export declare const CryptoPriceBox: React.ComponentType<CryptoPriceBoxProps & StyledComponentProps<string>>;
export default CryptoPriceBox;
