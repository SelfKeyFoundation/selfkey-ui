import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import StyledButton from '../common/styled-button';
export const styles = createStyles({
    errorText: {
        height: '19px',
        width: '242px',
        color: '#FE4B61',
        fontFamily: 'Lato',
        fontSize: '13px',
        lineHeight: '19px'
    },
    errorColor: {
        color: '#FE4B61 !important',
        border: '2px solid #FE4B61 !important',
        backgroundColor: 'rgba(255,46,99,0.09) !important'
    },
    input: {
        boxSizing: 'border-box',
        height: '46px',
        width: '722px',
        border: '1px solid #384656',
        borderRadius: '4px',
        backgroundColor: '#1E262E',
        color: '#a9c5d6',
        fontSize: '14px',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)',
        paddingLeft: '10px',
        '&::-webkit-input-placeholder': {
            fontSize: '14px',
            color: '#93B0C1',
        }
    },
    inputError: {
        borderBottom: '2px solid #FE4B61 !important'
    },
    label: {
        color: '#93A4AF',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '15px'
    }
});
export class AddressBookAddComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLabelChange = (event) => {
            const label = event.target.value;
            this.setState({ ...this.state, label });
            this.props.onLabelChange(label);
        };
        this.handleAddressChange = (event) => {
            const address = event.target.value;
            this.setState({ ...this.state, address });
            this.props.onAddressChange(address);
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            return this.props.onSave(this.state.label, this.state.address);
        };
        this.state = { label: '', address: '' };
    }
    render() {
        const { classes, labelError, addressError, onCancel } = this.props;
        const hasLabelError = (labelError !== '' && labelError !== undefined);
        const hasAddressError = (addressError !== '' && addressError !== undefined);
        const labelInputClass = `${classes.input} ${hasLabelError ? classes.errorColor : ''}`;
        const addressInputClass = `${classes.input} ${hasAddressError ? classes.errorColor : ''}`;
        return (React.createElement("form", { id: "formwrap", noValidate: true, autoComplete: "off", onSubmit: this.handleSubmit },
            React.createElement(Grid, { container: true, direction: 'column', spacing: 2 },
                React.createElement(Grid, { item: true },
                    React.createElement(Grid, { container: true, direction: 'column', spacing: 1 },
                        React.createElement(Grid, { item: true },
                            React.createElement("label", { className: classes.label }, "LABEL")),
                        React.createElement(Grid, { item: true },
                            React.createElement("input", { type: 'text', id: 'labelInput', onChange: this.handleLabelChange, value: this.state.label, className: labelInputClass, placeholder: "Address label" }),
                            hasLabelError &&
                                React.createElement("span", { id: 'labelError', className: classes.errorText }, labelError)))),
                React.createElement(Grid, { item: true },
                    React.createElement(Grid, { container: true, direction: 'column', spacing: 1 },
                        React.createElement(Grid, { item: true },
                            React.createElement("label", { className: classes.label }, "ETH ADDRESS")),
                        React.createElement(Grid, { item: true },
                            React.createElement("input", { type: 'text', id: 'addressInput', onChange: this.handleAddressChange, value: this.state.address, className: addressInputClass, placeholder: "0x" }),
                            hasAddressError &&
                                React.createElement("span", { id: 'addressError', className: classes.errorText }, addressError)))),
                React.createElement(Grid, { item: true },
                    React.createElement(Grid, { container: true, direction: 'row', spacing: 1 },
                        React.createElement(Grid, { item: true },
                            React.createElement(StyledButton, { id: 'saveButton', variant: "contained", size: "medium", type: "submit", disabled: (!this.state.label || !this.state.address || hasAddressError || hasLabelError) }, "Save")),
                        React.createElement(Grid, { item: true },
                            React.createElement(StyledButton, { id: 'cancelButton', variant: "outlined", size: "medium", onClick: onCancel }, "Cancel")))))));
    }
}
export const AddressBookAdd = withStyles(styles)(AddressBookAddComponent);
export default AddressBookAdd;
//# sourceMappingURL=address-book-add.js.map