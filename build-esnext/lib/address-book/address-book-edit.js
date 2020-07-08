import * as React from 'react';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import StyledButton from '../common/styled-button';
const styles = createStyles({
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
export class AddressBookEditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLabelChange = (event) => {
            event.preventDefault();
            const label = event.target.value;
            this.setState({ ...this.state, label });
            this.props.onLabelChange(label);
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            return this.props.onSave(this.state.label);
        };
        this.state = { label: props.label };
    }
    componentDidUpdate() {
        // this.state = {label: this.props.label};
    }
    render() {
        const { classes, labelError, onCancel } = this.props;
        const hasLabelError = (labelError !== '' && labelError !== undefined);
        const labelInputClass = `${classes.input} ${hasLabelError ? classes.errorColor : ''}`;
        return (React.createElement("form", { id: "formwrap", noValidate: true, autoComplete: "off", onSubmit: this.handleSubmit },
            React.createElement(Grid, { container: true, direction: 'column', spacing: 10 },
                React.createElement(Grid, { item: true },
                    React.createElement(Grid, { container: true, direction: 'column', spacing: 1 },
                        React.createElement(Grid, { item: true },
                            React.createElement("label", { className: classes.label }, "LABEL")),
                        React.createElement(Grid, { item: true },
                            React.createElement("input", { type: 'text', id: 'labelInput', onChange: this.handleLabelChange, value: this.state.label, className: labelInputClass, placeholder: "Address label" }),
                            hasLabelError && React.createElement("span", { id: 'labelError', className: classes.errorText }, labelError)))),
                React.createElement(Grid, { item: true },
                    React.createElement(Grid, { container: true, direction: 'row', spacing: 8 },
                        React.createElement(Grid, { item: true },
                            React.createElement(StyledButton, { id: 'saveButton', variant: "contained", size: "medium", type: "submit", disabled: (!this.state.label || hasLabelError) }, "Save")),
                        React.createElement(Grid, { item: true },
                            React.createElement(StyledButton, { id: 'cancelButton', variant: "outlined", size: "medium", onClick: onCancel }, "Cancel")))))));
    }
}
export const AddressBookEdit = withStyles(styles)(AddressBookEditComponent);
export default AddressBookEdit;
//# sourceMappingURL=address-book-edit.js.map