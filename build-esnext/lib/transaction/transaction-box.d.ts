import * as React from 'react';
export declare type TransactionBoxProps = {
    cryptoCurrency: string;
    closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
    children: any;
};
export declare const TransactionBox: React.ComponentType<Pick<TransactionBoxProps & {
    classes: Record<"icon" | "transactionBox" | "iconWrapper" | "closeDialogIconWrapper" | "custom", string>;
}, "children" | "cryptoCurrency" | "closeAction"> & import("@material-ui/core").StyledComponentProps<"icon" | "transactionBox" | "iconWrapper" | "closeDialogIconWrapper" | "custom">>;
export default TransactionBox;
