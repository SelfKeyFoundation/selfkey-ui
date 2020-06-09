import * as React from 'react';
export declare type TransactionNoGasErrorProps = {
    publicKey: string;
    message: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const TransactionError: React.ComponentType<Pick<TransactionNoGasErrorProps & {
    classes: Record<"bodyText", string>;
}, "message" | "publicKey" | "closeAction"> & import("@material-ui/core").StyledComponentProps<"bodyText">>;
export default TransactionError;
