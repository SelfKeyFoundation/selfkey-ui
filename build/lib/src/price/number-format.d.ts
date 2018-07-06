/// <reference types="react" />
import { SFC } from "react";
export declare type NumberFormatProps = {
    locale: string;
    style: string;
    currency: string;
    value: string;
    fractionDigits?: number;
};
export declare const NumberFormat: SFC<NumberFormatProps>;
