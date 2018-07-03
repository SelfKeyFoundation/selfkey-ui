/// <reference types="react" />
import { SFC } from 'react';
export declare type CurrencyFormatProps = {
    locale: string;
    currency: string;
    value: string;
};
declare const CurrencyFormat: SFC<CurrencyFormatProps>;
export default CurrencyFormat;
