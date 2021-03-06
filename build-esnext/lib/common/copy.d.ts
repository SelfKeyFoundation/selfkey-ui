import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
export declare const styles: Record<"copyButton" | "copyButtonSpan", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
export declare type CopyProps = {
    text: string;
};
export declare type CopyState = {
    copyTextPlaceholder: string;
};
export declare type StyledProps = WithStyles<typeof styles> & CopyProps;
export declare class CopyComponent extends React.Component<StyledProps, CopyState> {
    copyText: string;
    copiedText: string;
    state: {
        copyTextPlaceholder: string;
    };
    handleOnCopy(): () => void;
    render(): JSX.Element;
}
export declare const Copy: React.ComponentType<Pick<StyledProps, "text"> & import("@material-ui/styles").StyledComponentProps<"copyButton" | "copyButtonSpan">>;
export default Copy;
