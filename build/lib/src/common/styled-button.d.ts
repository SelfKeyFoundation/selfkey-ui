/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type Variant = 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
export declare type Color = 'primary' | 'secondary';
export declare type ButtonProps = {
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
    size?: 'large' | 'medium' | 'small';
    variant?: Variant;
    color?: Color;
    type?: 'button' | 'submit';
    disabled?: boolean;
    id?: string;
};
export declare const StyledButton: React.ComponentType<ButtonProps & import("react-jss").StyledComponentProps<string>>;
export default StyledButton;
