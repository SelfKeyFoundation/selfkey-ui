/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type ModalBoxProps = {
    headerText: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const ModalBox: React.ComponentType<ModalBoxProps & import("react-jss").StyledComponentProps<string>>;
export default ModalBox;
