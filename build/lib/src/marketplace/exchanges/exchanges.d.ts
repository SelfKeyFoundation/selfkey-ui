/// <reference path="../../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { ExchangeProps } from './exchange';
export declare type ExchangesProps = {
    exchanges: Array<ExchangeProps>;
    svgIcon: string;
};
export declare const Exchanges: React.ComponentType<ExchangesProps & import("react-jss").StyledComponentProps<string>>;
export default Exchanges;
