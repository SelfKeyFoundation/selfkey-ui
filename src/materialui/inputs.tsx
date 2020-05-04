import * as React from 'react';
import {
    Input,
    InputLabel,
    Typography,
    Grid,
    Button,
    IconButton,
    Theme,
    Modal,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/styles';
import injectSheet, { StyleSheet } from 'react-jss';
import { DeleteIcon } from '../icons/delete';
import classNames from 'classnames';
import { HardDriveIcon } from '../icons/hard-drive';
import { FileDefaultIcon } from '../icons/file-default';
import { primary, baseDark, base, error, white } from '../colors';
import { ModalWrap } from './modalWithBackButton';
import { ModalBody2 } from './modalElements';
import { FileImageIcon } from '../icons/file-image';
import { FilePdfIcon } from '../icons/file-pdf';
import { FileAudioIcon } from '../icons/file-audio';

const multilineSelectStyles = (theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: baseDark,
            borderRadius: '4px',
            border: '1px solid #384656',
            boxSizing: 'border-box',
            maxWidth: '360px',
            color: white,
            fontSize: '14px',
            overflow: 'auto',
            lineHeight: '21px',
            '&$focused': {
                '&$focused:not($error):not($disabled)': {
                    border: `1px solid ${primary}`,
                    boxShadow: `0 0 3px 1px ${primary}`,
                },
            },
        },
        item: {
            borderRadius: '4px',
            fontSize: '14px',
            lineHeight: '21px',
            cursor: 'pointer',
        },
        itemText: {
            '& span': { fontSize: '14px', lineHeight: '17px', padding: '5px 0' },
        },
        itemAdd: {
            background: 'none',
            color: primary,
            cursor: 'pointer',
            lineHeight: '21px',
            padding: '10px 16px',
            marginBottom: 0,
        },
    });

export type MultilineSelectType = any;

export const MultilineSelect = withStyles(multilineSelectStyles)((props: MultilineSelectType) => {
    const { classes, multiselect, selected = [], items = [], onSelectUpdated, onAdd } = props;
    const isSelected = (item: any) => selected.includes(item.key);
    const handleItemClick = (item: any) => {
        return (evt: React.SyntheticEvent) => {
            if (evt) {
                evt.preventDefault();
            }
            if (!onSelectUpdated) return;
            if (!multiselect) {
                if (isSelected(item)) {
                    return onSelectUpdated([]);
                }
                return onSelectUpdated([item.key]);
            }
            if (isSelected(item)) {
                return onSelectUpdated(selected.filter((x: any) => x !== item.key));
            }
            return onSelectUpdated([...selected, item.key]);
        };
    };
    return (
        <div>
            <List className={classes.root}>
                {items.map((item: any) => (
                    <ListItem
                        key={item.key}
                        className={classes.item}
                        selected={isSelected(item)}
                        onClick={handleItemClick(item)}
                    >
                        <ListItemText className={classes.itemText}>{item.value}</ListItemText>
                    </ListItem>
                ))}
                {onAdd && items.length > 0 ? <Divider /> : null}
                {onAdd ? (
                    <ListItem className={classes.itemAdd} onClick={onAdd}>
                        +Add Option
                    </ListItem>
                ) : null}
            </List>
        </div>
    );
});

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
    input: {
        textAlign: 'right'
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
            textDecoration: 'none',
        },
        link: {
            cursor: 'pointer',
        },
        fileName: {
            '&:hover': {
                color: primary,
            },
        },
        breakAll: {
            wordBreak: 'break-all',
        },
        fileErrorContainer: {
            marginLeft: '45px',
        },
        fullWidth: {
            width: '100%',
        },
        imageWidth: {
            maxWidth: '100%',
        },
        topSpacing: {
            marginTop: '20px',
        },
        padding: {
            padding: '0 15px',
        },
        bottomSpace: {
            marginBottom: '20px',
        },
        back: {
            zIndex: 1000,
        },
        ellipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '222px',
        },
    });

export const FileView = withStyles(fileViewStyles)(({ classes, file, onClearForm, errors = [] }: FileViewProps) => (
    <Grid item className={classNames(classes.fileItem, errors && errors.length && classes.fileItemError)}>
        <Grid container direction="row" justify="space-between" alignItems="center" wrap="nowrap">
            <Grid item>
                <Grid container direction="row" alignItems="center" spacing={4} wrap="nowrap">
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

const isImageType = (mime: string) => ['image/png', 'image/jpeg'].includes(mime);
const isAudioType = (mime: string) => ['audio/ogg', 'audio/mp3', 'audio/m4a', 'audio/x-wav'].includes(mime);
const isPDFType = (mime: string) => ['application/pdf'].includes(mime);
const dataURItoBlob = (dataURI: string) => {
    // Split metadata from data
    const splitted = dataURI.split(',');
    // Split params
    const params = splitted[0].split(';');
    // Get mime-type from params
    const type = params[0].replace('data:', '');
    // Filter the name property from params
    const properties = params.filter(param => {
        return param.split('=')[0] === 'name';
    });
    // Look for the name and use unknown if no name property.
    let name;
    if (properties.length !== 1) {
        name = 'unknown';
    } else {
        // Because we filtered out the other property,
        // we only have the name case here.
        name = properties[0].split('=')[1];
    }

    // Built the Uint8Array Blob parameter from the base64 string.
    const binary = atob(splitted[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    // Create the blob object
    const blob = new window.Blob([new Uint8Array(array)], { type });

    return { blob, name };
};

export type FilePreviewModalProps = any;

const PreviewFileType = withStyles(fileViewStyles)(({ classes, file, url, mime }: any) => {
    if (isImageType(mime)) {
        return <img src={url} alt={file.name} className={classes.imageWidth} />;
    } else {
        return <audio src={url} controls />;
    }
});

export const FilePreviewModalView = withStyles(fileViewStyles)(
    ({ classes, open, onClose, onBack, file, url, mime }: FilePreviewModalProps) => (
        <Modal open={open} onClose={onClose}>
            <ModalWrap>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={onBack}
                    className={`${classes.back}`}
                >
                    ‹ Back
                </Button>
                <ModalBody2 className={`${classes.fullWidth} ${classes.topSpacing}`}>
                    <PreviewFileType file={file} url={url} mime={mime} />
                </ModalBody2>
            </ModalWrap>
        </Modal>
    )
);

class FileLinkWithModalComponent extends React.Component<FileViewProps, any> {
    constructor(props: FileViewProps) {
        super(props);

        const { file } = props;
        const { url } = file;
        const mime = file.mimeType.fileType || file.mimeType;
        this.state = { open: false, file, mime, url, urlCreated: false };
    }

    componentDidMount() {
        const { file, mime, url } = this.state;

        if (!url && !this.isSupportedFile(mime)) {
            this.createFileUrl(file, mime);
        }
    }

    componentWillUnmount() {
        const { url, urlCreated } = this.state;
        if (urlCreated) {
            URL.revokeObjectURL(url);
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.file.name !== prevProps.file.name || this.props.file.contents !== prevProps.file.contents) {
            const { file } = this.props;
            const mime: string = file.mimeType.fileType || file.mimeType;
            const state: any = { file, url: file.url, urlCreated: false, mime };
            this.setState(state);
            if (prevState.urlCreated) {
                URL.revokeObjectURL(prevState.url);
            }
        }
    }

    isSupportedFile(mime: string) {
        return isImageType(mime) || isAudioType(mime) || isPDFType(mime);
    }

    createFileUrl(document: any, mime: string) {
        const { blob, name } = dataURItoBlob(document.content);
        const file = new File([blob], name, { type: mime });
        const url = URL.createObjectURL(file);
        this.setState({ url, urlCreated: true });
        return url;
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = (evt: any) => {
        let { url, mime, file } = this.state;
        if (!url && this.isSupportedFile(mime)) {
            url = this.createFileUrl(file, mime);
        }
        if (isImageType(mime) || isAudioType(mime)) {
            evt && evt.preventDefault();
            return this.setState({ open: true });
        }

        if (isPDFType(mime) && this.props.onPDFOpen) {
            evt && evt.preventDefault();
            return this.props.onPDFOpen({ ...file, url });
        }
    };

    render() {
        const { classes, className = '', small = false } = this.props;
        const { open, file, url, mime } = this.state;

        const textProps: any = {
            variant: 'subtitle1',
            className: classes.fileName,
        };

        if (small) {
            textProps.color = 'secondary';
            textProps.className = `${textProps.className} ${classes.ellipsis}`;
            textProps.title = file.name;
        }

        return (
            <React.Fragment>
                <a
                    className={`${classes.noDecoration} ${classes.link} ${className}`}
                    onClick={this.handleOpen}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Typography {...textProps}>{file.name}</Typography>
                </a>
                <FilePreviewModalView
                    open={open}
                    onClose={this.handleClose}
                    file={file}
                    url={url}
                    mime={mime}
                    onBack={this.handleClose}
                />
            </React.Fragment>
        );
    }
}

export const FileLinkWithModal = withStyles(fileViewStyles)(FileLinkWithModalComponent);

class FileViewWithModal extends React.Component<FileViewProps> {
    render() {
        const { classes, file, onClearForm, errors = [] } = this.props;

        const FileTypeIcon = (fileType: any) => {
            const type = fileType.fileType || fileType;
            if (isImageType(type)) {
                return <FileImageIcon />;
            } else if (isPDFType(type)) {
                return <FilePdfIcon />;
            } else if (isAudioType(type)) {
                return <FileAudioIcon />;
            } else {
                return <FileDefaultIcon />;
            }
        };

        return (
            <Grid item style={{ marginTop: '-42px' }}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    wrap="nowrap"
                    className={classes.bottomSpace}
                >
                    <Grid item className={classes.padding}>
                        <Grid container direction="row" alignItems="center" spacing={4} wrap="nowrap">
                            <Grid item>
                                <FileTypeIcon fileType={file.mimeType} />
                            </Grid>
                            <Grid item className={classes.breakAll}>
                                <FileLinkWithModal file={file} onPDFOpen={this.props.onPDFOpen} />
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
        );
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
    },
    formError: {
        backgroundColor: 'rgba(255, 46, 99, 0.09)',
        border: `1px solid ${error}`,
    },
};

export const FileUploadWidget = injectSheet(fileUploadStyles)<FileUploadWidgetProps>(
    ({ classes, id, file, isError, onClearForm, onChange, onBlur, onFocus, onPDFOpen, required, ...props }) => {
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

        let additionalClass = null;

        if (isError) {
            additionalClass = classes.formError;
        }

        id = id || 'key-upload';

        const formClassNames = classNames(additionalClass);

        return (
            <Grid container direction="column" spacing={8}>
                <Grid item>
                    <div className={`${classes.form} ${formClassNames}`}>
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
                {file ? (
                    <FileViewWithModalComponent file={file} onClearForm={onClearForm} onPDFOpen={onPDFOpen} />
                ) : null}
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
            onPDFOpen,
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
                    <div id="dragging" ref={this.setFormRef} className={formClassNames}>
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
                    <FileViewWithModalComponent
                        key={ind}
                        file={f}
                        onClearForm={onClearForm}
                        errors={errorFiles && errorFiles[ind]}
                        onPDFOpen={onPDFOpen}
                    />
                ))}
            </Grid>
        );
    }
}

export const ArrayFileUploadWidget = withStyles(fileUploadWidgetStyles)(ArrayFileUploadWidgetComponent);
