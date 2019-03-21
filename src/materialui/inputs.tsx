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
	Modal,
} from '@material-ui/core';
import injectSheet, { StyleSheet } from 'react-jss';
import { DeleteIcon } from '../icons/delete';
import classNames from 'classnames';
import { HardDriveIcon } from '../icons/hard-drive';
import { FileDefaultIcon } from '../icons/file-default';
import { primary, baseDark, base, error } from '../colors';
import { ModalWrap } from './modalWithBackButton';
import { ModalBody2 } from './modalElements';
import { FileImageIcon } from '../icons/file-image';
import { FilePdfIcon } from '../icons/file-pdf';
import { FileAudioIcon } from '../icons/file-audio';


declare global {
    interface Window { isElectron: any; }
}

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
		},
		fileItemError: {},
		noDecoration: {
			textDecoration: 'none'
		},
		link: {
			cursor: 'pointer',
		},
		fileName: {
			'&:hover': {
				color: primary
			}
		},
		breakAll: {
			wordBreak: 'break-all'
		},
		fileErrorContainer: {
			marginLeft: '45px',
		},
		fullWidth: {
			width: '100%'
		},
		imageWidth: {
			maxWidth: '100%'
		},
		topSpacing: {
			marginTop: '20px'
		},
		padding: {
			padding: '0 15px'
		},
		bottomSpace: {
			marginBottom: '20px'
		}
	});

export const FileView = withStyles(fileViewStyles)(({ classes, file, onClearForm, errors = [] }: FileViewProps) => (
	<Grid item className={classNames(classes.fileItem, errors && errors.length && classes.fileItemError)}>
		<Grid container direction="row" justify="space-between" alignItems="center" wrap="nowrap">
			<Grid item>
				<Grid container direction="row" alignItems="center" spacing={16} wrap="nowrap">
					<Grid item>
						<FileDefaultIcon />
					</Grid>
					<Grid item className={classes.breakAll}>
						<a href={file.url} className={classes.noDecoration}>
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
			<Grid container direction="column" className={classes.fileErrorContainer}>
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

class FileViewWithModal extends React.Component<FileViewProps> {
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
		const { classes, file, onClearForm, errors = [] } = this.props;

		const UploadedFile = (fileType: any) => {
			const type = fileType.fileType;
			if (type === "image/png"|| type === "image/jpeg" || type === "audio/ogg" || type === "audio/mp3" || type === "audio/m4a" || type === "audio/x-wav" || type === "application/pdf") {
				return (
					<a className={`${classes.noDecoration} ${classes.link}`} onClick={this.handleOpen}>
						<Typography variant="subtitle1" className={classes.fileName}>{file.name}</Typography>
					</a>
				)
			} else {
				return (
					<a className={`${classes.noDecoration} ${classes.link}`} href={file.url}>
						<Typography variant="subtitle1" className={classes.fileName}>{file.name}</Typography>
					</a>
				)
			}
		};

		const FileTypeIcon = (fileType: any) => {
			const type = fileType.fileType;
			if (type === "image/png" || type === "image/jpeg") {
				return (
					<FileImageIcon />
				)
			} else if (type === "application/pdf") {
				return (
					<FilePdfIcon />
				)
			} else if (type === "audio/ogg" || type === "audio/mp3" || type === "audio/m4a" || type === "audio/x-wav") {
				return (
					<FileAudioIcon />
				)
			} else {
				return (
					<FileDefaultIcon />
				)
			}
		};

		const PreviewType = (fileType: any) => {
			const type = fileType.fileType;
			if (type === "image/png" || type === "image/jpeg") {
				return (
					<img src={file.url} alt={file.name} className={classes.imageWidth} />
				)
			} else if (type === "audio/ogg" || type === "audio/mp3" || type === "audio/m4a" || type === "audio/x-wav") {
				return (
					<audio src={file.url} controls />
				)
			} else if (type === "application/pdf") {
				return (
					<iframe width='100%' height='100%' src={file.content}></iframe>
				)
			} else {
				return <></>;
			}
		};

		return (
			<Grid item>
				<Grid item>
					<Grid container direction="row" justify="space-between" alignItems="center" wrap="nowrap" className={classes.bottomSpace}>
						<Grid item className={classes.padding}>
							<Grid container direction="row" alignItems="center" spacing={16} wrap="nowrap">
								<Grid item>
									<FileTypeIcon fileType={file.mimeType} />
								</Grid>
								<Grid item className={classes.breakAll}>
									<UploadedFile fileType={file.mimeType} />
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
						<Grid container direction="column" className={classes.fileErrorContainer}>
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

				<Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <ModalWrap>
                        <Button variant='outlined' color='secondary' size='small' onClick={this.handleState}>‹ Back</Button>
                        <ModalBody2 className={`${classes.fullWidth} ${classes.topSpacing}`}>
							<PreviewType fileType={file.mimeType} />
                        </ModalBody2>
                    </ModalWrap>
                </Modal>
			</Grid>
		)
	}
}

export const FileViewWithModalComponent = withStyles(fileViewStyles)(FileViewWithModal);


export type FileUploadWidgetProps = any;


const fileUploadStyles: StyleSheet = {
	form: {
		width: '100%',
		height: '46px',
		backgroundColor: baseDark,
		border: '1px solid #384656',
		borderRadius: '4px',
		paddingLeft: '15px',
		boxSizing: 'border-box',
	},
	button: {
		borderRadius: '0 3px 3px 0',
		boxShadow: 'none',
		width: '129px',
		minWidth: '129px',
	},
	fileInput: {
		display: 'none',
	}
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
								<Typography variant="subtitle2" color="secondary">
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
				{file ? <FileViewWithModalComponent file={file} onClearForm={onClearForm} /> : null}
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
		marginBottom: '10px',
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
			border: '1px dashed #303C49',
			backgroundColor: '#1E262E',
		},
		highlite: {
			border: `1px solid ${primary}`,
		},
		formError: {
			border: `1px solid ${error}`,
		},
		bottomSpace: {
			marginBottom: '10px',
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
			uploadError,
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
				<FileUploadGrid container direction="column" alignItems="center" justify="center">
					<div ref={this.setFormRef} className={formClassNames}>
						<Grid container justify="center" alignItems="center" direction="column">
							<FileUploadLabel htmlFor="key-upload">
								<Grid item className={classes.bottomSpace}>
									<HardDriveIcon />
								</Grid>
								<Grid item>
									<Typography variant="subtitle1" className={classes.bottomSpace}>
										Drag & drop files here
									</Typography>
									<Typography variant="subtitle2" color="secondary" className={classes.bottomSpace}>
										- OR -
									</Typography>
								</Grid>
								<Grid item>
									<Button
										variant="outlined"
										color="secondary"
										component="label"
										className={classes.bottomSpace}
									>
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
								{uploadError ? (
									<Grid item>
										<Typography variant="subtitle1" color="error">
											{uploadError}
										</Typography>
									</Grid>
								) : null}
							</FileUploadLabel>
							<FileUploadInput id="key-upload" type="file" />
						</Grid>
					</div>
				</FileUploadGrid>
				{(files || []).map((f: any, ind: number) => (
					<FileViewWithModalComponent key={ind} file={f} onClearForm={onClearForm} errors={errorFiles && errorFiles[ind]} />
				))}
			</Grid>
		);
	}
}

export const ArrayFileUploadWidget = withStyles(fileUploadWidgetStyles)(ArrayFileUploadWidgetComponent);
