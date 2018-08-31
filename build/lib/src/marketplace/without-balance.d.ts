/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type Exchange = {
    name: string;
    url: string;
};
export declare type WithoutBalanceProps = {
    exchanges: Array<Exchange>;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const WithoutBalance: React.ComponentType<WithoutBalanceProps & import("react-jss").StyledComponentProps<string>>;
export default WithoutBalance;
