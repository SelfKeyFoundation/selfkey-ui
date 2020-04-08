/// <reference types="react-jss" />
import * as React from 'react';
export declare type AddressBook = {
    id: number;
    label: string;
    address: string;
};
export declare type AddressBookProps = {
    addresses: Array<AddressBook>;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onAdd: () => void;
};
export declare const AddressBook: React.ComponentType<AddressBookProps & import("react-jss").StyledComponentProps<string>>;
export default AddressBook;
