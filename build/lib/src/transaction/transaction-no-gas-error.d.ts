/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type TransactionNoGasErrorProps = {
    cryptoCurrency: string;
    publicKey: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const TransactionNoGasError: React.ComponentType<TransactionNoGasErrorProps & import("react-jss").StyledComponentProps<string>>;
export default TransactionNoGasError;
