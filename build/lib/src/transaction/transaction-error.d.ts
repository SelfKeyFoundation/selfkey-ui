import * as React from 'react';
export declare type TransactionErrorProps = {
    publicKey: string;
    message: string;
    closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
};
export declare const TransactionError: React.ComponentType<Pick<TransactionErrorProps & {
    classes: Record<"bodyText", string>;
}, "closeAction" | "publicKey" | "message"> & import("@material-ui/core").StyledComponentProps<"bodyText">>;
export default TransactionError;
