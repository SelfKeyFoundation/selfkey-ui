/// <reference types="react" />
import { SFC } from 'react';
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
/** Test description */
export declare const PriceSummary: SFC<PriceSummaryProps>;
export default PriceSummary;
