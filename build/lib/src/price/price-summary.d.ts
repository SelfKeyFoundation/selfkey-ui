import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
export declare type PriceSummaryProps = {
    className?: string;
    currencyClass?: string;
    valueClass?: string;
    locale: string;
    style: string;
    currency: string;
    value: string;
    appendCurrency?: boolean;
    prependCurrency?: boolean;
};
export declare const PriceSummary: React.ComponentType<PriceSummaryProps & StyledComponentProps<string>>;
export default PriceSummary;
