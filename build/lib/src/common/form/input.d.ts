import * as React from "react";
import { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
export declare const styles: StyleSheet;
export declare type InputProps = {
    hasError?: boolean;
};
export declare type InputState = {};
export declare type StyledProps = WithStyles<keyof typeof styles> & InputProps;
export declare class InputComponent extends React.Component<StyledProps, InputState> {
    constructor(props: StyledProps);
    render(): JSX.Element;
}
export declare const Input: React.ComponentType<InputProps & StyledComponentProps<string>>;
export default Input;
