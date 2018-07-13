/// <reference types="react" />
import * as React from 'react';
export interface Props {
    text: string;
}
export declare class Copy extends React.Component<Props, {}> {
    copyText: string;
    copiedText: string;
    state: {
        copyTextPlaceholder: string;
    };
    handleOnCopy(): void;
    render(): JSX.Element;
}
