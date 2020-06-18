import * as React from 'react';
export declare type ModalBoxProps = {
    headerText: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    children?: any;
};
export declare const ModalBox: React.ComponentType<Pick<ModalBoxProps & {
    classes: Record<"body" | "header" | "root" | "closeButton", string>;
}, "children" | "headerText" | "closeAction"> & import("@material-ui/core").StyledComponentProps<"body" | "header" | "root" | "closeButton">>;
export default ModalBox;
