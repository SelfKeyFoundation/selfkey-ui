import { SFC } from "react";
export declare type NumberFormatProps = {
    locale: string;
    style: string;
    currency?: string;
    value: number;
    fractionDigits?: number;
};
export declare type OptionsType = {
    style: string;
    maximumFractionDigits: number;
    [key: string]: any;
};
export declare const NumberFormat: SFC<NumberFormatProps>;
