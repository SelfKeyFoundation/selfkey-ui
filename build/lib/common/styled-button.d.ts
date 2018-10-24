/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type ButtonProps = {
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
    size?: 'large' | 'medium' | 'small';
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
    color?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    disabled?: boolean;
};
export declare const StyledButton: React.ComponentType<ButtonProps & import("react-jss").StyledComponentProps<string>>;
export default StyledButton;
