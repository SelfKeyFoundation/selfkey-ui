/// <reference types="react-jss" />
import * as React from 'react';
export declare type LWSWalletConnectionErrorProps = {
    downloadWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const LWSWalletConnectionError: React.ComponentType<LWSWalletConnectionErrorProps & import("react-jss").StyledComponentProps<string>>;
export default LWSWalletConnectionError;
