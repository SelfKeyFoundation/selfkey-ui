import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { Grid, Button } from "@material-ui/core";
import { 
    OutlineButton, 
} from "../../../src/materialui/buttons";
import { 
    ModalWrap, 
    ModalCloseButton, 
    ModalHeader,
    ModalBody,
} from "../../../src/materialui/modalElements";
import { Paragraph } from "../../../src/materialui/typography";
import ModalCloseIcon from "../../../src/icons/modal-close";


class SimpleModalStory extends React.Component {
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
                                    <Button size="large">Continue</Button>
                                </Grid>

                                <Grid item>
                                    <OutlineButton size="large" onClick={this.handleState}>Cancel</OutlineButton>
                                </Grid>
                            </Grid>
                        </ModalBody>
                    </ModalWrap>
                </Modal>
            </div>
        );
    }
}

export default SimpleModalStory;
