import * as React from 'react';
export declare type TransactionNoGasErrorProps = {
    publicKey: string;
    closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
    openLink?: (link: string) => void;
};
export declare const TransactionNoGasError: React.ComponentType<Pick<TransactionNoGasErrorProps & {
    classes: Record<"bodyText" | "learnMoreText" | "learnMoreLink", string>;
}, "publicKey" | "closeAction" | "openLink"> & import("@material-ui/core").StyledComponentProps<"bodyText" | "learnMoreText" | "learnMoreLink">>;
export default TransactionNoGasError;
