import * as React from 'react';
import {
	withStyles,
	Input,
	InputLabel,
	Typography,
	Grid,
	Button,
	IconButton,
	Theme,
	createStyles,
} from '@material-ui/core';
import injectSheet, { StyleSheet } from 'react-jss';
import { DeleteIcon } from '../icons/delete';
import classNames from 'classnames';
import { HardDriveIcon } from '../icons/hard-drive';
import { FileDefaultIcon } from '../icons/file-default';
import { primary, baseDark, base, error } from '../colors';

export const FileUploadLabel = withStyles({
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

export type FileViewProps = any;

const fileViewStyles = (theme: Theme) =>
	createStyles({
		fileItem: {
			padding: '5px 20px',
			boxSizing: 'border-box',
			border: `1px solid transparent`,
		},
		fileItemError: {
			border: `1px solid ${error}`,
			borderRadius: '5px',
		},
	});

export const FileView = withStyles(fileViewStyles)(({ classes, file, onClearForm, errors = [] }: FileViewProps) => (
	<Grid item className={classNames(classes.fileItem, errors && errors.length && classes.fileItemError)}>
		<Grid container direction="row" justify="space-between" alignItems="center">
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
				<IconButton onClick={() => onClearForm(file)}>
					<DeleteIcon />
				</IconButton>
			</Grid>
		</Grid>
		{errors && errors.length ? (
			<Grid container direction="column">
				{errors.map((err: string) => (
					<Grid item>
						<Typography variant="body1" color="error">
							{err}
						</Typography>
					</Grid>
				))}
			</Grid>
		) : null}
	</Grid>
));

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
};

export const FileUploadWidget = injectSheet(fileUploadStyles)<FileUploadWidgetProps>(
	({ classes, id, file, onClearForm, onChange, onBlur, onFocus, required, ...props }) => {
		const eventHandlers: any = {};
		if (onChange) {
			eventHandlers.onChange = (evt: any) => {
				onChange(Array.from(evt.target.files));
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
									{props.placeholder || 'Please upload a document'}
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
				{file ? <FileView file={file} onClearForm={onClearForm} /> : null}
			</Grid>
		);
	}
);

export const FileUploadGrid = withStyles({
	container: {
		backgroundColor: base,
		border: '1px solid #303C49',
		borderRadius: '4px',
		height: '400px',
		minWidth: '500px',
		width: '100%',
		marginTop: '10px',
		marginButtom: '10px',
	},
})(Grid);

export type ArrayFileUploadWidgetProps = any;

const fileUploadWidgetStyles = (theme: Theme) =>
	createStyles({
		fileInput: {
			display: 'none',
		},
		dropArea: {
			width: '100%',
			height: '100%',
			border: '1px solid transparent',
		},
		highlite: {
			border: `1px solid ${primary}`,
		},
		formError: {
			border: `1px solid ${error}`,
		},
	});
class ArrayFileUploadWidgetComponent extends React.Component<ArrayFileUploadWidgetProps> {
	state: any = { dragging: false };
	formRef: any = null;
	setFormRef = (element: any) => {
		this.formRef = element;
	};
	preventDefaults = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
	};
	handleFormFileChange = (evt: any) => {
		this.props.onChange && this.props.onChange(Array.from(evt.target.files), true);
	};
	handleDragStart = (event: any) => {
		this.setState({ dragging: true });
	};
	handleDragEnd = (event: any) => {
		this.setState({ dragging: false });
	};
	handleDrop = (event: any) => {
		console.log(Array.from(event.dataTransfer.files));
		this.props.onChange && this.props.onChange(Array.from(event.dataTransfer.files), true);
	};
	componentDidMount() {
		this.attachDropZoneEvents();
	}
	componentWillUnmount() {
		this.detachDropZoneEvents();
	}
	attachDropZoneEvents() {
		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			this.formRef.addEventListener(eventName, this.preventDefaults, false);
		});
		['dragenter', 'dragover'].forEach(eventName => {
			this.formRef.addEventListener(eventName, this.handleDragStart, false);
		});
		['dragleave', 'drop'].forEach(eventName => {
			this.formRef.addEventListener(eventName, this.handleDragEnd, false);
		});
		this.formRef.addEventListener('drop', this.handleDrop, false);
	}
	detachDropZoneEvents() {
		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			this.formRef.removeEventListener(eventName, this.preventDefaults);
		});
		['dragenter', 'dragover'].forEach(eventName => {
			this.formRef.removeEventListener(eventName, this.handleDragStart);
		});
		['dragleave', 'drop'].forEach(eventName => {
			this.formRef.removeEventListener(eventName, this.handleDragEnd);
		});
		this.formRef.removeEventListener('drop', this.handleDrop);
	}
	render() {
		let {
			classes,
			id,
			files,
			onClearForm,
			onBlur,
			onFocus,
			isError,
			required,
			mimeTypes,
			errorFiles,
			...props
		} = this.props;
		const eventHandlers: any = {};
		const accept: string = (mimeTypes || []).join(',');
		eventHandlers.onChange = this.handleFormFileChange;
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

		let additionalClass = null;

		if (isError) {
			additionalClass = classes.formError;
		}

		if (this.state.dragging) {
			additionalClass = classes.highlite;
		}

		const formClassNames = classNames(classes.dropArea, additionalClass);
		return (
			<Grid container direction="column">
				<FileUploadGrid container direction="column" alignItems="center" justify="center" style={{ marginBottom: '10px' }}>
					<div ref={this.setFormRef} className={formClassNames}>
						<Grid container justify="center" alignItems="center" direction="column">
							<FileUploadLabel htmlFor="key-upload">
								<Grid item>
									<HardDriveIcon />
								</Grid>
								<Grid item>
									<Typography variant="subtitle1" gutterBottom>
										Drag & drop files here
									</Typography>
									<Typography variant="subtitle2" color="secondary" gutterBottom>
										- OR -
									</Typography>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="secondary" component="label">
										Browse Files
										<input
											id={id}
											type="file"
											multiple
											accept={accept}
											{...props}
											{...eventHandlers}
											className={classes.fileInput}
										/>
									</Button>
								</Grid>
							</FileUploadLabel>
							<FileUploadInput id="key-upload" type="file" />
						</Grid>
					</div>
				</FileUploadGrid>
				{(files || []).map((f: any, ind: number) => (
					<FileView key={ind} file={f} onClearForm={onClearForm} errors={errorFiles && errorFiles[ind]} />
				))}
			</Grid>
		);
	}
}

export const ArrayFileUploadWidget = withStyles(fileUploadWidgetStyles)(ArrayFileUploadWidgetComponent);
