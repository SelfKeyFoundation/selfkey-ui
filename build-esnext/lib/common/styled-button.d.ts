import * as React from 'react';
export declare type Variant = 'text' | 'outlined' | 'contained';
export declare type Color = 'primary' | 'secondary';
export declare type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    size?: 'large' | 'medium' | 'small';
    variant?: Variant;
    color?: Color;
    type?: 'button' | 'submit';
    disabled?: boolean;
    id?: string;
    children?: any;
};
export declare const StyledButton: React.ComponentType<Pick<ButtonProps & {
    classes: Record<"disabled" | "root" | "outlined" | "containedPrimary", string>;
}, "color" | "size" | "disabled" | "children" | "id" | "onClick" | "variant" | "type"> & import("@material-ui/core").StyledComponentProps<"disabled" | "root" | "outlined" | "containedPrimary">>;
export default StyledButton;
