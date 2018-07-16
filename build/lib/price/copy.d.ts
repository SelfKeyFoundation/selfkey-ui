/// <reference types="react" />
import * as React from "react";
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
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
export declare const Copy: React.ComponentType<CopyProps & StyledComponentProps<string>>;
export default Copy;
