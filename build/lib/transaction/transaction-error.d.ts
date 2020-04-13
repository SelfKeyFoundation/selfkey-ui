/// <reference types="react-jss" />
import * as React from 'react';
export declare type TransactionNoGasErrorProps = {
    publicKey: string;
    message: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const TransactionError: React.ComponentType<TransactionNoGasErrorProps & import("react-jss").StyledComponentProps<string>>;
export default TransactionError;
