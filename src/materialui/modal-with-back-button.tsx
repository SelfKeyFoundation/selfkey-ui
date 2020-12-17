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

export const ModalWrap = withStyles(
	createStyles({
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
	})
)(Paper);

export const FileUploadGrid = withStyles(
	createStyles({
		container: {
			backgroundColor: base,
			border: '1px solid #303C49',
			borderRadius: '4px',
			height: '400px',
			width: '760px'
		}
	})
)(Grid);

export const FileUploadHeaderGrid = withStyles(
	createStyles({
		item: {
			marginLeft: '-210px',
			marginTop: '-150px',
			position: 'absolute'
		}
	})
)(Grid);

const FileUploadLabel = withStyles(
	createStyles({
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
	})
)(InputLabel);

const FileUploadInput = withStyles(
	createStyles({
		root: {
			display: 'none'
		}
	})
)(Input);

export class ModalWithBackButton extends React.Component {
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
				<Grid container direction="column" justify="center" alignItems="center">
					<IncorporationsIcon />
					<br />
					<Typography variant="h1" gutterBottom>
						Manage My Crypto
					</Typography>
					<br />
					<Typography variant="body1" color="textSecondary" gutterBottom>
						Manage your ERC20 tokens displayed in the SelfKey Identity Wallet dashboard.
					</Typography>
					<br />
					<Button
						id="handleOpen"
						variant="outlined"
						size="large"
						onClick={this.handleOpen}
					>
						Add Token
					</Button>
				</Grid>
				<br />

				<Modal open={this.state.open} onClick={this.handleClose} id="handleClose">
					<ModalWrap>
						<BackButton
							id="handleState"
							leftPosition="25px"
							onClick={this.handleState}
						/>
						<ModalBody2>
							<Typography variant="h2">Add Attribute</Typography>
							<Typography variant="body1" color="textSecondary" gutterBottom>
								Select the type of attribute you would like to add to your identity
								wallet.
							</Typography>

							<Typography variant="body1" color="textSecondary" gutterBottom>
								Add Identity Wallet Attribute
							</Typography>

							<FileUploadGrid
								container
								direction="column"
								alignItems="center"
								justify="center"
							>
								<FileUploadHeaderGrid item>
									<Typography variant="h2">
										Upload Your National ID Document
									</Typography>
								</FileUploadHeaderGrid>

								<br />
								<Grid
									container
									justify="center"
									alignItems="center"
									direction="column"
								>
									<FileUploadLabel htmlFor="key-upload">
										<HardDriveIcon />
										<div>
											<Typography variant="subtitle1" gutterBottom>
												Select Document
											</Typography>
											<Typography
												variant="subtitle2"
												color="secondary"
												gutterBottom
											>
												This is stored locally on your machine.
											</Typography>
										</div>
									</FileUploadLabel>
									<FileUploadInput id="key-upload" type="file" />
								</Grid>
							</FileUploadGrid>
							<br />
						</ModalBody2>
					</ModalWrap>
				</Modal>
			</div>
		);
	}
}

export default ModalWithBackButton;
