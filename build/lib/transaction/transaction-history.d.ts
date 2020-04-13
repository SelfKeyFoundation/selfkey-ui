import * as React from 'react';
import { StyleSheet, WithStyles } from 'react-jss';
declare const styles: StyleSheet;
export declare type TransactionHistoryProps = {
    list: Array<TxHistoryItem>;
    openLink?: ((link: string) => void);
};
export declare type StatusIconName = 'failed' | 'receive' | 'hourglass' | 'sent';
export declare type TxHistoryItem = {
    statusText: string;
    date: String;
    cryptoCurrency: string;
    value: String;
    externalLink: String;
    statusIconName: StatusIconName;
};
export declare type TransactionHistoryState = {
    currentCopyValues: Array<string>;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & TransactionHistoryProps;
export declare class TransactionHistoryComponent extends React.Component<StyledProps, TransactionHistoryState> {
    copyText: string;
    copiedText: string;
    constructor(props: StyledProps);
    handleLinkClick(event: React.MouseEvent<HTMLElement>, externalLink: string): void;
    renderIcon(statusIconName: string): JSX.Element | undefined;
    updateCopyText(index: number, text: string): void;
    handleOnCopy(itemIndex: number): () => void;
    renderRow(item: TxHistoryItem, index: number): JSX.Element;
    render(): JSX.Element;
}
export declare const TransactionHistory: React.ComponentType<TransactionHistoryProps & import("react-jss").StyledComponentProps<string>>;
export {};
