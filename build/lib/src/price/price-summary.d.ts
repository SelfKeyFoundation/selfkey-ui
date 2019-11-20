import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
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
export declare const PriceSummary: React.ComponentType<PriceSummaryProps & StyledComponentProps<string>>;
export default PriceSummary;
