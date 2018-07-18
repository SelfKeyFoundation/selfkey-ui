import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
export declare type CryptoPriceBoxProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: string;
    toCurrency: string;
    toValue: string;
};
export declare const CryptoPriceBox: React.ComponentType<CryptoPriceBoxProps & StyledComponentProps<string>>;
export default CryptoPriceBox;
