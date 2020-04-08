/// <reference types="react-jss" />
import * as React from 'react';
export declare type TransactionBoxProps = {
    cryptoCurrency: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const TransactionBox: React.ComponentType<TransactionBoxProps & import("react-jss").StyledComponentProps<string>>;
export default TransactionBox;
