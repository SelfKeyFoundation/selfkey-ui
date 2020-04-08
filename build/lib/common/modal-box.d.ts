/// <reference types="react-jss" />
import * as React from 'react';
export declare type ModalBoxProps = {
    headerText: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const ModalBox: React.ComponentType<ModalBoxProps & import("react-jss").StyledComponentProps<string>>;
export default ModalBox;
