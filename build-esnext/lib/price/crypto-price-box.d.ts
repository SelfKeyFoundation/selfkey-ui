import * as React from 'react';
export declare type CryptoPriceBoxProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: number;
    toCurrency: string;
    toValue: number;
};
export declare const CryptoPriceBox: React.ComponentType<Pick<CryptoPriceBoxProps & {
    classes: Record<"cryptoPriceBox" | "smallText" | "test", string>;
}, "locale" | "cryptoCurrency" | "cryptoValue" | "toCurrency" | "toValue"> & import("@material-ui/core").StyledComponentProps<"cryptoPriceBox" | "smallText" | "test">>;
export default CryptoPriceBox;
