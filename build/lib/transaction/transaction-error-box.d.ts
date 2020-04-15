/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type TransactionErrorBoxProps = {
    publicKey: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const TransactionErrorBox: React.ComponentType<TransactionErrorBoxProps & import("react-jss").StyledComponentProps<string>>;
export default TransactionErrorBox;
