import * as React from 'react';
import { WithStyles } from '@material-ui/core';
declare const styles: Record<"line" | "flex" | "row" | "icon" | "date" | "value" | "cryptoCurrency" | "status" | "actionTitle" | "viewActionContainer" | "copyActionContainer", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
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
declare type TransactionHistoryState = {
    currentCopyValues: Array<string>;
};
declare type StyledProps = WithStyles<typeof styles> & TransactionHistoryProps;
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
export declare const TransactionHistory: React.ComponentType<Pick<StyledProps, "list" | "openLink"> & import("@material-ui/core").StyledComponentProps<"line" | "flex" | "row" | "icon" | "date" | "value" | "cryptoCurrency" | "status" | "actionTitle" | "viewActionContainer" | "copyActionContainer">>;
export {};
