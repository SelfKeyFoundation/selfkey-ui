/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type UnlockBoxProps = {
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const UnlockBox: React.ComponentType<UnlockBoxProps & import("react-jss").StyledComponentProps<string>>;
export default UnlockBox;
