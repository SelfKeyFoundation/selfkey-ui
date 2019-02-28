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
import { primary, baseDark, base, warning } from '../colors';

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
			padding: '0 20px',
			boxSizing: 'border-box',
		},
	});

export const FileView = withStyles(fileViewStyles)(({ classes, file, onClearForm }: FileViewProps) => (
	<Grid item>
		<Grid container direction="row" justify="space-between" alignItems="center" className={classes.fileItem}>
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
	({ classes, id, file, onClearForm, onChange, onBlur, onFocus, ...props }) => {
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
			border: `1px solid ${warning}`,
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
		this.props.onChange && this.props.onChange(Array.from(event.dataTransfer.files), true);
	};
	componentDidMount() {
		this.attachDropZoneEvents();
    }
    componentWillUnmount(){
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
		let { classes, id, files, onClearForm, onBlur, onFocus, ...props } = this.props;
		const eventHandlers: any = {};
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

		const formClassNames = classNames(classes.dropArea, this.state.dragging ? classes.highlite : null);
		return (
			<Grid container direction="column" spacing={24}>
				<FileUploadGrid container direction="column" alignItems="center" justify="center">
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
					<FileView key={ind} file={f} onClearForm={onClearForm} />
				))}
			</Grid>
		);
	}
}

export const ArrayFileUploadWidget = withStyles(fileUploadWidgetStyles)(ArrayFileUploadWidgetComponent);
