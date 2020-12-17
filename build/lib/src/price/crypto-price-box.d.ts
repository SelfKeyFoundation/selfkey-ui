import * as React from 'react';
export declare type CryptoPriceBoxProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: number;
    toCurrency: string;
    toValue: number;
};
export declare const CryptoPriceBox: React.ComponentType<Pick<CryptoPriceBoxProps & {
    classes: Record<"test" | "cryptoPriceBox" | "smallText", string>;
}, "locale" | "cryptoCurrency" | "cryptoValue" | "toCurrency" | "toValue"> & import("@material-ui/core").StyledComponentProps<"test" | "cryptoPriceBox" | "smallText">>;
export default CryptoPriceBox;
