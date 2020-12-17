import * as React from 'react';
export declare type TransactionErrorBoxProps = {
    publicKey: string;
    closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: any;
};
export declare const TransactionErrorBox: React.ComponentType<Pick<TransactionErrorBoxProps & {
    classes: Record<"header" | "divider" | "publicKey" | "boxWrapper" | "headerTitle" | "bodyContainer" | "txFailedText" | "yourAddressTitle" | "closeDialogIconWrapper", string>;
}, "children" | "closeAction" | "publicKey"> & import("@material-ui/core").StyledComponentProps<"header" | "divider" | "publicKey" | "boxWrapper" | "headerTitle" | "bodyContainer" | "txFailedText" | "yourAddressTitle" | "closeDialogIconWrapper">>;
export default TransactionErrorBox;
