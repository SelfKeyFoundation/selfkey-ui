import * as React from 'react';
export declare type TransactionErrorBoxProps = {
    publicKey: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    children?: any;
};
export declare const TransactionErrorBox: React.ComponentType<Pick<TransactionErrorBoxProps & {
    classes: Record<"header" | "divider" | "publicKey" | "closeDialogIconWrapper" | "boxWrapper" | "headerTitle" | "bodyContainer" | "txFailedText" | "yourAddressTitle", string>;
}, "children" | "publicKey" | "closeAction"> & import("@material-ui/core").StyledComponentProps<"header" | "divider" | "publicKey" | "closeDialogIconWrapper" | "boxWrapper" | "headerTitle" | "bodyContainer" | "txFailedText" | "yourAddressTitle">>;
export default TransactionErrorBox;
