import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { 
    withStyles, 
    Paper,
    Grid,
} from "@material-ui/core";
import { base } from "colors";
import { Paragraph } from "./typography";
import { 
    OutlineButton,
    FullButton, 
} from "./buttons";
import ModalCloseIcon from '../../src/icons/modal-close';
import { 
    ModalHeader, 
    ModalBody,
    ModalCloseButton,
} from "./modalElements";

export const ModalWrap = withStyles({
	root: {
        backgroundColor: base,
        boxSizing: 'border-box',
        boxShadow: 'none',
        left: 'calc(50% - 390px)',
        margin: '0 auto',
        outline: 'none',
        position: 'absolute',
        top: '100px',
        width: '780px',
    },
})(Paper);

class SimpleModal extends React.Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleState = () => {
        if (this.state.open === true) {
            this.setState({ open: false });
        }
    };

    render() {
        return (
            <div>
                <OutlineButton size="large" onClick={this.handleOpen}>Open Modal</OutlineButton>
                <Modal open={this.state.open}>
                    <ModalWrap>
                        <ModalCloseButton onClick={this.handleState} >
                            <ModalCloseIcon />
                        </ModalCloseButton>
                        <ModalHeader>
                            <Typography variant="h6" id="modal-title">
                                Token Removed
                            </Typography>
                        </ModalHeader>

                        <ModalBody>
                            <Paragraph id="simple-modal-description" gutterBottom>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Paragraph>
                            <br/><br/>
                            <Grid container spacing={24}>
                                <Grid item>
                                    <FullButton size="large">Continue</FullButton>
                                </Grid>

                                <Grid item>
                                    <OutlineButton size="large">Cancel</OutlineButton>
                                </Grid>
                            </Grid>
                        </ModalBody>
                    </ModalWrap>
                </Modal>
            </div>
        );
    }
}

export default SimpleModal;
