/// <reference types="react-jss" />
import * as React from 'react';
export declare type ButtonProps = {
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
    className?: string;
};
export declare const LWSButton: React.ComponentType<ButtonProps & import("react-jss").StyledComponentProps<string>>;
export default LWSButton;
