import { SFC } from "react";
export declare type NumberFormatProps = {
    locale: string;
    style: string;
    currency?: string;
    value: number;
    fractionDigits?: number;
};
export declare const NumberFormat: SFC<NumberFormatProps>;
