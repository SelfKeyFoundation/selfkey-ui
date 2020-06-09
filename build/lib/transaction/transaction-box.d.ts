import * as React from 'react';
export declare type TransactionBoxProps = {
    cryptoCurrency: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    children: any;
};
export declare const TransactionBox: React.ComponentType<Pick<TransactionBoxProps & {
    classes: Record<"custom" | "icon" | "transactionBox" | "iconWrapper" | "closeDialogIconWrapper", string>;
}, "children" | "cryptoCurrency" | "closeAction"> & import("@material-ui/core").StyledComponentProps<"custom" | "icon" | "transactionBox" | "iconWrapper" | "closeDialogIconWrapper">>;
export default TransactionBox;
