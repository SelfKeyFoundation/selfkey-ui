import * as React from 'react';
export declare type LWSSelfkeyIdErrorProps = {
    retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const LWSSelfkeyIdError: React.ComponentType<Pick<LWSSelfkeyIdErrorProps & {
    classes: Record<"buttonPrimary" | "buttonSecondary", string>;
}, "retryAction"> & import("@material-ui/core").StyledComponentProps<"buttonPrimary" | "buttonSecondary">>;
export default LWSSelfkeyIdError;
