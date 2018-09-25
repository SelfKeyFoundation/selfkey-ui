/// <reference path="../../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type TransactionNoGasErrorProps = {
    locale: string;
    cryptoCurrency: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    address: string;
    amount: number;
    openLink?: ((link: string) => void);
    status: string;
};
export declare const TransactionSendProgressBox: React.ComponentType<TransactionNoGasErrorProps & import("react-jss").StyledComponentProps<string>>;
export default TransactionSendProgressBox;
