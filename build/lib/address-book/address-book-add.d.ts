import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
declare const styles: Record<"input" | "label" | "inputError" | "errorText" | "errorColor", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
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
export declare type AddressBookAddSyledProps = WithStyles<typeof styles> & AddressBookAddProps;
export declare class AddressBookAddComponent extends React.Component<AddressBookAddSyledProps, AddressBookAddState> {
    constructor(props: AddressBookAddSyledProps);
    handleLabelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: any) => void;
    render(): JSX.Element;
}
export declare const AddressBookAdd: React.ComponentType<Pick<AddressBookAddSyledProps, "addressError" | "onSave" | "labelError" | "onCancel" | "onLabelChange" | "onAddressChange"> & import("@material-ui/styles").StyledComponentProps<"input" | "label" | "inputError" | "errorText" | "errorColor">>;
export default AddressBookAdd;
