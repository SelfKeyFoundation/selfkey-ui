import * as React from 'react';
import { withStyles, Input, InputLabel, Typography, Grid, Button, IconButton } from '@material-ui/core';
import injectSheet, { StyleSheet } from 'react-jss';
import { DeleteIcon } from '../icons/delete';
import { FileDefaultIcon } from '../icons/file-default';
import { primary, baseDark } from '../colors';

export const FileUploadLabel = withStyles({
	root: {
		alignItems: 'center',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		height: '120px',
		justifyContent: 'space-between',
		marginTop: '100px',
		textAlign: 'center',
		'&:hover': {
			color: primary,
		},
	},
})(InputLabel);

export const FileUploadInput = withStyles({
	root: {
		display: 'none',
	},
})(Input);

export const DecimalInput = withStyles({
	inputType: {
		textAlign: 'right',
	},
})(Input);

export type FileUploadWidgetProps = any;

const fileUploadStyles: StyleSheet = {
	form: {
		width: '100%',
		height: '46px',
		backgroundColor: baseDark,
		border: '1px solid #384656',
		paddingLeft: '15px',
		boxSizing: 'border-box',
	},
	button: {
		width: '129px',
		minWidth: '129px',
	},
	fileInput: {
		display: 'none',
	},
	fileItem: {
		padding: '0 20px',
		boxSizing: 'border-box',
	},
};

export const FileUploadWidget = injectSheet(fileUploadStyles)<FileUploadWidgetProps>(
	({ classes, id, file, onClearForm, onChange, onBlur, onFocus, ...props }) => {
		const eventHandlers: any = {};
		if (onChange) {
			eventHandlers.onChange = (evt: any) => {
				onChange(evt);
			};
		}
		if (onBlur) {
			eventHandlers.onBlur = (evt: any) => {
				onBlur(evt);
			};
		}
		if (onFocus) {
			eventHandlers.onFocus = (evt: any) => {
				onFocus(evt);
			};
		}

		if (!onClearForm) {
			onClearForm = () => {};
		}

		id = id || 'key-upload';

		return (
			<Grid container direction="column" spacing={24}>
				<Grid item>
					<div className={classes.form}>
						<Grid container direction="row" justify="space-between" alignItems="center">
							<Grid item>
								<Typography color="secondary" variant="caption">
									{props.placeholder} || 'Please upload a document'
								</Typography>
							</Grid>
							<Grid item>
								<Button variant="contained" size="large" component="label" className={classes.button}>
									Upload
									<input
										id={id}
										type="file"
										{...props}
										{...eventHandlers}
										className={classes.fileInput}
									/>
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
				{file ? (
					<Grid item>
						<Grid
							container
							direction="row"
							justify="space-between"
							alignItems="center"
							className={classes.fileItem}
						>
							<Grid item>
								<Grid container direction="row" alignItems="center" spacing={16}>
									<Grid item>
										<FileDefaultIcon />
									</Grid>
									<Grid item>
										<a href={file.url}>
											<Typography variant="body2">{file.name}</Typography>
										</a>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<IconButton onClick={onClearForm}>
									<DeleteIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				) : null}
			</Grid>
		);
	}
);
