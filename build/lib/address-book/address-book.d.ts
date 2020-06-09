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
export declare const AddressBook: React.ComponentType<Pick<AddressBookProps & {
    classes: Record<"button" | "table" | "headerTableRow" | "bodyTableRow" | "addressBook" | "descriptionText", string>;
}, "onAdd" | "addresses" | "onEdit" | "onDelete"> & import("@material-ui/core").StyledComponentProps<"button" | "table" | "headerTableRow" | "bodyTableRow" | "addressBook" | "descriptionText">>;
export default AddressBook;
