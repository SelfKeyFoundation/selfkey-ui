import * as React from 'react';
export declare type TokenPriceProps = {
    locale: string;
    cryptoCurrency: string;
    cryptoValue: number;
    toCurrency: string;
    toValue: number;
};
export declare const TokenPrice: React.ComponentType<Pick<TokenPriceProps & {
    classes: Record<"currency" | "cryptoCurrencyValue", string>;
}, "locale" | "cryptoCurrency" | "cryptoValue" | "toCurrency" | "toValue"> & import("@material-ui/core").StyledComponentProps<"currency" | "cryptoCurrencyValue">>;
export default TokenPrice;
