/// <reference types="react" />
import * as React from 'react';
export interface Props {
    text: string;
}
export declare class Copy extends React.Component<any, any> {
    copyText: string;
    copiedText: string;
    state: {
        copyTextPlaceholder: string;
    };
    constructor(props: any);
    handleOnCopy(): void;
    render(): JSX.Element;
}
