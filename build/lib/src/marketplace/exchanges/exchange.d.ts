/// <reference path="../../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type ExchangeProps = {
    name: string;
    status: string;
    description: string;
    logoUrl?: string;
};
export declare const Exchange: React.ComponentType<ExchangeProps & import("react-jss").StyledComponentProps<string>>;
export default Exchange;
