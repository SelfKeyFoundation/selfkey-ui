/// <reference types="react" />
import * as React from "react";
import { StyledClassComponentProps } from "../react-jss.types";
export declare type CopyProps = StyledClassComponentProps & {
    text: string;
};
export declare type CopyState = {
    copyTextPlaceholder: string;
};
export declare class Copy extends React.Component<CopyProps, CopyState> {
    copyText: string;
    copiedText: string;
    state: {
        copyTextPlaceholder: string;
    };
    constructor(props: CopyProps);
    handleOnCopy(): () => void;
    render(): JSX.Element;
}
