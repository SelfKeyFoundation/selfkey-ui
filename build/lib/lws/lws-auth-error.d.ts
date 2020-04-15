/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { Website } from './lws-common';
export declare type LWSAuthErrorProps = {
    website: Website;
    retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const LWSAuthError: React.ComponentType<LWSAuthErrorProps & import("react-jss").StyledComponentProps<string>>;
export default LWSAuthError;
