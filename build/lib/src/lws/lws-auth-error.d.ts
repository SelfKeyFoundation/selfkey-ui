import * as React from 'react';
import { Website } from './lws-common';
export declare type LWSAuthErrorProps = {
    website: Website;
    retryAction?: (event: React.MouseEvent<HTMLElement>) => void;
};
export declare const LWSAuthError: React.ComponentType<Pick<LWSAuthErrorProps & {
    classes: Record<"buttonPrimary" | "buttonSecondary", string>;
}, "website" | "retryAction"> & import("@material-ui/core").StyledComponentProps<"buttonPrimary" | "buttonSecondary">>;
export default LWSAuthError;
