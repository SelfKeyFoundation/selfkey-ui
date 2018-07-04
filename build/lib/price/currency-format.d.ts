/// <reference types="react" />
import { SFC } from 'react';
export declare type CurrencyFormatProps = {
    locale: string;
    currency: string;
    value: string;
};
export declare const CurrencyFormat: SFC<CurrencyFormatProps>;
