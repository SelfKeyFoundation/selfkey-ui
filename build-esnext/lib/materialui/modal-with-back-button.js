import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Paper, Grid, Button, Input, InputLabel } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import { ModalBody2 } from './modal-elements';
import IncorporationsIcon from '../icons/incorporations';
import HardDriveIcon from '../icons/hard-drive';
import { primary, base } from '../colors';
import { BackButton } from './button';
export const ModalWrap = withStyles(createStyles({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        boxSizing: 'border-box',
        boxShadow: 'none',
        left: 0,
        margin: '30px auto 0',
        outline: 'none',
        padding: '0 20px',
        position: 'absolute',
        top: 0,
        width: '100%'
    }
}))(Paper);
export const FileUploadGrid = withStyles(createStyles({
    container: {
        backgroundColor: base,
        border: '1px solid #303C49',
        borderRadius: '4px',
        height: '400px',
        width: '760px'
    }
}))(Grid);
export const FileUploadHeaderGrid = withStyles(createStyles({
    item: {
        marginLeft: '-210px',
        marginTop: '-150px',
        position: 'absolute'
    }
}))(Grid);
const FileUploadLabel = withStyles(createStyles({
    root: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '120px',
        justifyContent: 'space-between',
        marginTop: '80px',
        textAlign: 'center',
        '&:hover': {
            color: primary
        }
    }
}))(InputLabel);
const FileUploadInput = withStyles(createStyles({
    root: {
        display: 'none'
    }
}))(Input);
export class ModalWithBackButton extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false
        };
        this.handleOpen = () => {
            this.setState({ open: true });
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
        this.handleState = () => {
            if (this.state.open === true) {
                this.setState({ open: false });
            }
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Grid, { container: true, direction: "column", justify: "center", alignItems: "center" },
                React.createElement(IncorporationsIcon, null),
                React.createElement("br", null),
                React.createElement(Typography, { variant: "h1", gutterBottom: true }, "Manage My Crypto"),
                React.createElement("br", null),
                React.createElement(Typography, { variant: "body1", color: "textSecondary", gutterBottom: true }, "Manage your ERC20 tokens displayed in the SelfKey Identity Wallet dashboard."),
                React.createElement("br", null),
                React.createElement(Button, { id: "handleOpen", variant: "outlined", size: "large", onClick: this.handleOpen }, "Add Token")),
            React.createElement("br", null),
            React.createElement(Modal, { open: this.state.open, onClick: this.handleClose, id: "handleClose" },
                React.createElement(ModalWrap, null,
                    React.createElement(BackButton, { id: "handleState", leftPosition: "25px", onClick: this.handleState }),
                    React.createElement(ModalBody2, null,
                        React.createElement(Typography, { variant: "h2" }, "Add Attribute"),
                        React.createElement(Typography, { variant: "body1", color: "textSecondary", gutterBottom: true }, "Select the type of attribute you would like to add to your identity wallet."),
                        React.createElement(Typography, { variant: "body1", color: "textSecondary", gutterBottom: true }, "Add Identity Wallet Attribute"),
                        React.createElement(FileUploadGrid, { container: true, direction: "column", alignItems: "center", justify: "center" },
                            React.createElement(FileUploadHeaderGrid, { item: true },
                                React.createElement(Typography, { variant: "h2" }, "Upload Your National ID Document")),
                            React.createElement("br", null),
                            React.createElement(Grid, { container: true, justify: "center", alignItems: "center", direction: "column" },
                                React.createElement(FileUploadLabel, { htmlFor: "key-upload" },
                                    React.createElement(HardDriveIcon, null),
                                    React.createElement("div", null,
                                        React.createElement(Typography, { variant: "subtitle1", gutterBottom: true }, "Select Document"),
                                        React.createElement(Typography, { variant: "subtitle2", color: "secondary", gutterBottom: true }, "This is stored locally on your machine."))),
                                React.createElement(FileUploadInput, { id: "key-upload", type: "file" }))),
                        React.createElement("br", null))))));
    }
}
export default ModalWithBackButton;
//# sourceMappingURL=modal-with-back-button.js.map