import * as React from 'react';
export declare type ButtonProps = {
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
    className?: string;
    children: any;
};
export declare const LWSButton: React.ComponentType<Pick<ButtonProps & {
    classes: Record<"root", string>;
}, "children" | "className" | "onClick"> & import("@material-ui/core").StyledComponentProps<"root">>;
export default LWSButton;
