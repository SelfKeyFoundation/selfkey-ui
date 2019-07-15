/// <reference path="../../../src/react-jss.d.ts" />
import * as React from "react";
import { WithStyles, StyleSheet } from 'react-jss';
export declare const styles: StyleSheet;
export declare type CopyProps = {
    text: string;
};
export declare type CopyState = {
    copyTextPlaceholder: string;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & CopyProps;
export declare class CopyComponent extends React.Component<StyledProps, CopyState> {
    copyText: string;
    copiedText: string;
    state: {
        copyTextPlaceholder: string;
    };
    constructor(props: StyledProps);
    handleOnCopy(): () => void;
    render(): JSX.Element;
}
export declare const Copy: React.ComponentType<CopyProps & import("react-jss").StyledComponentProps<string>>;
export default Copy;
