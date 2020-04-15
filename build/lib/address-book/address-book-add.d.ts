/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet, WithStyles } from 'react-jss';
export declare const styles: StyleSheet;
export declare type AddressBookAddState = {
    label: string;
    address: string;
};
export declare type AddressBookAddProps = {
    onSave: (label: string, address: string) => void;
    labelError?: string;
    addressError?: string;
    onCancel: () => void;
    onLabelChange: (label: string) => void;
    onAddressChange: (address: string) => void;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & AddressBookAddProps;
export declare class AddressBookAddComponent extends React.Component<StyledProps, AddressBookAddState> {
    constructor(props: StyledProps);
    handleLabelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: any) => void;
    render(): JSX.Element;
}
export declare const AddressBookAdd: React.ComponentType<AddressBookAddProps & import("react-jss").StyledComponentProps<string>>;
export default AddressBookAdd;
