import * as React from 'react';
export declare type LWSWalletConnectionErrorProps = {
    downloadWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const LWSWalletConnectionError: React.ComponentType<Pick<LWSWalletConnectionErrorProps & {
    classes: Record<"buttonPrimary" | "buttonSecondary", string>;
}, "downloadWalletAction" | "retryAction"> & import("@material-ui/core").StyledComponentProps<"buttonPrimary" | "buttonSecondary">>;
export default LWSWalletConnectionError;
