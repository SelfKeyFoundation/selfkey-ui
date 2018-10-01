/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type Exchange = {
    name: string;
    url: string;
};
export declare type UnlockBoxProps = {
    exchanges: Array<Exchange>;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const WithoutBalance: React.ComponentType<UnlockBoxProps & import("react-jss").StyledComponentProps<string>>;
export default WithoutBalance;
