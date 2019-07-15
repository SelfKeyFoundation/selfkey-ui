/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type PriceSummaryProps = {
    className?: string;
    justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | undefined;
    currencyClass?: string;
    valueClass?: string;
    locale: string;
    priceStyle: string;
    currency: string;
    value: number;
    appendCurrency?: boolean;
    prependCurrency?: boolean;
};
export declare const PriceSummary: React.ComponentType<PriceSummaryProps & import("react-jss").StyledComponentProps<string>>;
export default PriceSummary;
