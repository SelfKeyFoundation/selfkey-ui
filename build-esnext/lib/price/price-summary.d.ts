import * as React from 'react';
export declare type PriceSummaryProps = {
    className?: string;
    justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | undefined;
    currencyClass?: string;
    valueClass?: string;
    locale: string;
    fractionDigits?: number;
    priceStyle: string;
    currency: string;
    value: number;
    appendCurrency?: boolean;
    prependCurrency?: boolean;
    showCurrency?: boolean;
};
export declare const PriceSummary: React.ComponentType<Pick<PriceSummaryProps & {
    classes: Record<"row" | "value" | "currency", string>;
}, "justify" | "className" | "value" | "locale" | "priceStyle" | "currency" | "fractionDigits" | "showCurrency" | "currencyClass" | "valueClass" | "appendCurrency" | "prependCurrency"> & import("@material-ui/core").StyledComponentProps<"row" | "value" | "currency">>;
export default PriceSummary;
