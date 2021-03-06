import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Grid, Button } from '@material-ui/core';
import {
	ModalWrap,
	ModalCloseButton,
	ModalHeader,
	ModalBody
} from '../../../src/materialui/modal-elements';
import ModalCloseIcon from '../../../src/icons/modal-close';

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
				<Button variant="outlined" size="large" onClick={this.handleOpen}>
					Open Modal
				</Button>
				<Modal open={this.state.open}>
					<ModalWrap>
						<ModalCloseButton onClick={this.handleState}>
							<ModalCloseIcon />
						</ModalCloseButton>
						<ModalHeader>
							<Typography variant="body1" id="modal-title">
								Token Removed
							</Typography>
						</ModalHeader>

						<ModalBody>
							<Typography id="simple-modal-description" variant="body2" gutterBottom>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
							</Typography>
							<br />
							<br />
							<Grid container spacing={8}>
								<Grid item>
									<Button variant="contained" size="large">
										Continue
									</Button>
								</Grid>

								<Grid item>
									<Button
										variant="outlined"
										size="large"
										onClick={this.handleState}
									>
										Cancel
									</Button>
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
