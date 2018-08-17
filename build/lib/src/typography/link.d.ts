import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
export declare type LinkProps = {
    className?: string;
    href?: string;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const A: React.ComponentType<LinkProps & StyledComponentProps<string>>;
