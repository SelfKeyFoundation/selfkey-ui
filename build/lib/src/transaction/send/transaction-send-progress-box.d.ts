import * as React from 'react';
export declare type TransactionNoGasErrorProps = {
    locale: string;
    cryptoCurrency: string;
    closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
    address: string;
    amount: number;
    transactionHash: string;
    openLink?: (link: string) => void;
    status: string;
};
export declare const TransactionSendProgressBox: React.ComponentType<Pick<TransactionNoGasErrorProps & {
    classes: Record<"button" | "address" | "actionButtonsContainer" | "amountContainer" | "amount" | "button2" | "sentTo", string>;
}, "address" | "locale" | "cryptoCurrency" | "amount" | "closeAction" | "status" | "openLink" | "transactionHash"> & import("@material-ui/core").StyledComponentProps<"button" | "address" | "actionButtonsContainer" | "amountContainer" | "amount" | "button2" | "sentTo">>;
export default TransactionSendProgressBox;
