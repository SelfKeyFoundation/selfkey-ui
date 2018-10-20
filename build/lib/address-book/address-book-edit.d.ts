/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet, WithStyles } from 'react-jss';
export declare const styles: StyleSheet;
export declare type AddressBookEditState = {
    label: string;
};
export declare type AddressBookEditProps = {
    label: string;
    onSave: (label: string) => void;
    labelError?: string;
    onCancel: () => void;
    onLabelChange: (label: string) => void;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & AddressBookEditProps;
export declare class AddressBookEditComponent extends React.Component<StyledProps, AddressBookEditState> {
    constructor(props: StyledProps);
    handleLabelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: any) => void;
    render(): JSX.Element;
}
export declare const AddressBookEdit: React.ComponentType<AddressBookEditProps & import("react-jss").StyledComponentProps<string>>;
export default AddressBookEdit;
