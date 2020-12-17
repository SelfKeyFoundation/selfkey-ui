import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
declare const styles: Record<"flex" | "row" | "icon" | "line" | "date" | "value" | "cryptoCurrency" | "status" | "actionTitle" | "viewActionContainer" | "copyActionContainer", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
export declare type TransactionHistoryProps = {
    list: TxHistoryItem[];
    openLink?: (link: string) => void;
};
export declare type StatusIconName = 'failed' | 'receive' | 'hourglass' | 'sent';
export declare type TxHistoryItem = {
    statusText: string;
    date: string;
    cryptoCurrency: string;
    value: string;
    externalLink: string;
    statusIconName: StatusIconName;
};
declare type TransactionHistoryState = {
    currentCopyValues: string[];
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
export declare const TransactionHistory: React.ComponentType<Pick<StyledProps, "list" | "openLink"> & import("@material-ui/styles").StyledComponentProps<"flex" | "row" | "icon" | "line" | "date" | "value" | "cryptoCurrency" | "status" | "actionTitle" | "viewActionContainer" | "copyActionContainer">>;
export {};
