import * as React from 'react';
import { WithStyles } from '@material-ui/core';
export declare const styles: Record<"input" | "label" | "inputError" | "errorText" | "errorColor", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
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
export declare type StyledProps = WithStyles<typeof styles> & AddressBookEditProps;
export declare class AddressBookEditComponent extends React.Component<StyledProps, AddressBookEditState> {
    constructor(props: StyledProps);
    componentDidUpdate(): void;
    handleLabelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: any) => void;
    render(): JSX.Element;
}
export declare const AddressBookEdit: React.ComponentType<Pick<StyledProps, "label" | "onSave" | "labelError" | "onCancel" | "onLabelChange"> & import("@material-ui/core").StyledComponentProps<"input" | "label" | "inputError" | "errorText" | "errorColor">>;
export default AddressBookEdit;
