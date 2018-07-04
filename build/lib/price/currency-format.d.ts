/// <reference types="react" />
import { SFC } from "react";
export declare type CurrencyFormatProps = {
    locale: string;
    currency: string;
    value: string;
    fractionDigits?: number;
};
export declare const CurrencyFormat: SFC<CurrencyFormatProps>;
