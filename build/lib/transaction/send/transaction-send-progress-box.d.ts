import * as React from 'react';
export declare type TransactionNoGasErrorProps = {
    locale: string;
    cryptoCurrency: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    address: string;
    amount: number;
    transactionHash: string;
    openLink?: ((link: string) => void);
    status: string;
};
export declare const TransactionSendProgressBox: React.ComponentType<Pick<TransactionNoGasErrorProps & {
    classes: Record<"address" | "button" | "button2" | "actionButtonsContainer" | "amountContainer" | "amount" | "sentTo", string>;
}, "address" | "locale" | "cryptoCurrency" | "status" | "closeAction" | "openLink" | "amount" | "transactionHash"> & import("@material-ui/core").StyledComponentProps<"address" | "button" | "button2" | "actionButtonsContainer" | "amountContainer" | "amount" | "sentTo">>;
export default TransactionSendProgressBox;
