import * as React from 'react';
import { Input, InputLabel, Typography, Grid, Button, IconButton, Modal, List, ListItem, ListItemText, Divider, } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles, createStyles } from '@material-ui/core';
import { DeleteIcon } from '../icons/delete';
import { HardDriveIcon } from '../icons/hard-drive';
import { FileDefaultIcon } from '../icons/file-default';
import { primary, baseDark, base, error, white } from '../colors';
import { ModalWrap } from './modal-with-back-button';
import { ModalBody2 } from './modal-elements';
import { FileImageIcon } from '../icons/file-image';
import { FilePdfIcon } from '../icons/file-pdf';
import { FileAudioIcon } from '../icons/file-audio';
const multilineSelectStyles = (theme) => createStyles({
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
export const MultilineSelect = withStyles(multilineSelectStyles)((props) => {
    const { classes, multiselect, selected = [], items = [], onSelectUpdated, onAdd } = props;
    const isSelected = (item) => selected.includes(item.key);
    const handleItemClick = (item) => {
        return (evt) => {
            if (evt) {
                evt.preventDefault();
            }
            if (!onSelectUpdated)
                return;
            if (!multiselect) {
                if (isSelected(item)) {
                    return onSelectUpdated([]);
                }
                return onSelectUpdated([item.key]);
            }
            if (isSelected(item)) {
                return onSelectUpdated(selected.filter((x) => x !== item.key));
            }
            return onSelectUpdated([...selected, item.key]);
        };
    };
    return (React.createElement("div", null,
        React.createElement(List, { className: classes.root },
            items.map((item) => (React.createElement(ListItem, { key: item.key, className: classes.item, selected: isSelected(item), onClick: handleItemClick(item) },
                React.createElement(ListItemText, { className: classes.itemText }, item.value)))),
            onAdd && items.length > 0 ? React.createElement(Divider, null) : null,
            onAdd ? (React.createElement(ListItem, { className: classes.itemAdd, onClick: onAdd }, "+Add Option")) : null)));
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
const fileViewStyles = (theme) => createStyles({
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
    fileViewContainerDragAndDrop: {
        marginTop: '10px'
    },
    fileViewContainer: {
        marginTop: '-42px'
    },
});
export const FileView = withStyles(fileViewStyles)(({ classes, file, onClearForm, errors = [] }) => (React.createElement(Grid, { item: true, className: classNames(classes.fileItem, errors && errors.length && classes.fileItemError) },
    React.createElement(Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", wrap: "nowrap" },
        React.createElement(Grid, { item: true },
            React.createElement(Grid, { container: true, direction: "row", alignItems: "center", spacing: 4, wrap: "nowrap" },
                React.createElement(Grid, { item: true },
                    React.createElement(FileDefaultIcon, null)),
                React.createElement(Grid, { item: true, className: classes.breakAll },
                    React.createElement("a", { href: file.url, className: classes.noDecoration },
                        React.createElement(Typography, { variant: "body2" }, file.name))))),
        React.createElement(Grid, { item: true },
            React.createElement(IconButton, { onClick: () => onClearForm(file) },
                React.createElement(DeleteIcon, null)))),
    errors && errors.length ? (React.createElement(Grid, { container: true, direction: "column", className: classes.fileErrorContainer }, errors.map((err) => (React.createElement(Grid, { item: true },
        React.createElement(Typography, { variant: "body1", color: "error" }, err)))))) : null)));
const isImageType = (mime) => ['image/png', 'image/jpeg'].includes(mime);
const isAudioType = (mime) => ['audio/ogg', 'audio/mp3', 'audio/m4a', 'audio/x-wav'].includes(mime);
const isPDFType = (mime) => ['application/pdf'].includes(mime);
const dataURItoBlob = (dataURI) => {
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
    }
    else {
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
const PreviewFileType = withStyles(fileViewStyles)(({ classes, file, url, mime }) => {
    if (isImageType(mime)) {
        return React.createElement("img", { src: url, alt: file.name, className: classes.imageWidth });
    }
    else {
        return React.createElement("audio", { src: url, controls: true });
    }
});
export const FilePreviewModalView = withStyles(fileViewStyles)(({ classes, open, onClose, onBack, file, url, mime }) => (React.createElement(Modal, { open: open, onClose: onClose },
    React.createElement(ModalWrap, null,
        React.createElement(Button, { variant: "outlined", color: "secondary", size: "small", onClick: onBack, className: `${classes.back}` }, "\u2039 Back"),
        React.createElement(ModalBody2, { className: `${classes.fullWidth} ${classes.topSpacing}` },
            React.createElement(PreviewFileType, { file: file, url: url, mime: mime }))))));
class FileLinkWithModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = () => {
            this.setState({ open: false });
        };
        this.handleOpen = (evt) => {
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
    componentDidUpdate(prevProps, prevState) {
        if (this.props.file.name !== prevProps.file.name || this.props.file.contents !== prevProps.file.contents) {
            const { file } = this.props;
            const mime = file.mimeType.fileType || file.mimeType;
            const state = { file, url: file.url, urlCreated: false, mime };
            this.setState(state);
            if (prevState.urlCreated) {
                URL.revokeObjectURL(prevState.url);
            }
        }
    }
    isSupportedFile(mime) {
        return isImageType(mime) || isAudioType(mime) || isPDFType(mime);
    }
    createFileUrl(document, mime) {
        const { blob, name } = dataURItoBlob(document.content);
        const file = new File([blob], name, { type: mime });
        const url = URL.createObjectURL(file);
        this.setState({ url, urlCreated: true });
        return url;
    }
    render() {
        const { classes, className = '', small = false } = this.props;
        const { open, file, url, mime } = this.state;
        const textProps = {
            variant: 'subtitle1',
            className: classes.fileName,
        };
        if (small) {
            textProps.color = 'secondary';
            textProps.className = `${textProps.className} ${classes.ellipsis}`;
            textProps.title = file.name;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("a", { className: `${classes.noDecoration} ${classes.link} ${className}`, onClick: this.handleOpen, href: file.url, target: "_blank", rel: "noopener noreferrer" },
                React.createElement(Typography, Object.assign({}, textProps), file.name)),
            React.createElement(FilePreviewModalView, { open: open, onClose: this.handleClose, file: file, url: url, mime: mime, onBack: this.handleClose })));
    }
}
export const FileLinkWithModal = withStyles(fileViewStyles)(FileLinkWithModalComponent);
class FileViewWithModal extends React.Component {
    render() {
        const { classes, file, onClearForm, dragAndDrop = false, errors = [] } = this.props;
        const FileTypeIcon = (fileType) => {
            const type = fileType.fileType || fileType;
            if (isImageType(type)) {
                return React.createElement(FileImageIcon, null);
            }
            else if (isPDFType(type)) {
                return React.createElement(FilePdfIcon, null);
            }
            else if (isAudioType(type)) {
                return React.createElement(FileAudioIcon, null);
            }
            else {
                return React.createElement(FileDefaultIcon, null);
            }
        };
        return (React.createElement(Grid, { item: true, className: dragAndDrop ? classes.fileViewContainerDragAndDrop : classes.fileViewContainer },
            React.createElement(Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", wrap: "nowrap", className: classes.bottomSpace },
                React.createElement(Grid, { item: true, className: classes.padding },
                    React.createElement(Grid, { container: true, direction: "row", alignItems: "center", spacing: 4, wrap: "nowrap" },
                        React.createElement(Grid, { item: true },
                            React.createElement(FileTypeIcon, { fileType: file.mimeType })),
                        React.createElement(Grid, { item: true, className: classes.breakAll },
                            React.createElement(FileLinkWithModal, { file: file, onPDFOpen: this.props.onPDFOpen })))),
                React.createElement(Grid, { item: true },
                    React.createElement(IconButton, { onClick: () => onClearForm(file) },
                        React.createElement(DeleteIcon, null)))),
            errors && errors.length ? (React.createElement(Grid, { container: true, direction: "column", className: classes.fileErrorContainer }, errors.map((err) => (React.createElement(Grid, { item: true },
                React.createElement(Typography, { variant: "body1", color: "error" }, err)))))) : null));
    }
}
export const FileViewWithModalComponent = withStyles(fileViewStyles)(FileViewWithModal);
const fileUploadStyles = createStyles({
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
});
export const FileUploadWidget = withStyles(fileUploadStyles)(({ classes, id, file, isError, onClearForm, onChange, onBlur, onFocus, onPDFOpen, required, ...props }) => {
    const eventHandlers = {};
    if (onChange) {
        eventHandlers.onChange = (evt) => {
            onChange(Array.from(evt.target.files));
        };
    }
    if (onBlur) {
        eventHandlers.onBlur = (evt) => {
            onBlur(evt);
        };
    }
    if (onFocus) {
        eventHandlers.onFocus = (evt) => {
            onFocus(evt);
        };
    }
    if (!onClearForm) {
        onClearForm = () => { };
    }
    let additionalClass = null;
    if (isError) {
        additionalClass = classes.formError;
    }
    id = id || 'key-upload';
    const formClassNames = classNames(additionalClass);
    return (React.createElement(Grid, { container: true, direction: "column", spacing: 8 },
        React.createElement(Grid, { item: true },
            React.createElement("div", { className: `${classes.form} ${formClassNames}` },
                React.createElement(Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
                    React.createElement(Grid, { item: true },
                        React.createElement(Typography, { variant: "subtitle2", color: "secondary" }, props.placeholder || 'Please upload a document')),
                    React.createElement(Grid, { item: true },
                        React.createElement(Button, { variant: "contained", size: "large", component: "label", className: classes.button },
                            "Upload",
                            React.createElement("input", Object.assign({ id: id, type: "file" }, props, eventHandlers, { className: classes.fileInput }))))))),
        file ? (React.createElement(FileViewWithModalComponent, { file: file, onClearForm: onClearForm, onPDFOpen: onPDFOpen })) : null));
});
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
const fileUploadWidgetStyles = (theme) => createStyles({
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
class ArrayFileUploadWidgetComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { dragging: false };
        this.formRef = null;
        this.setFormRef = (element) => {
            this.formRef = element;
        };
        this.preventDefaults = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        this.handleFormFileChange = (evt) => {
            this.props.onChange && this.props.onChange(Array.from(evt.target.files), true);
        };
        this.handleDragStart = (event) => {
            this.setState({ dragging: true });
        };
        this.handleDragEnd = (event) => {
            this.setState({ dragging: false });
        };
        this.handleDrop = (event) => {
            console.log(Array.from(event.dataTransfer.files));
            this.props.onChange && this.props.onChange(Array.from(event.dataTransfer.files), true);
        };
    }
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
        let { classes, id, files, onClearForm, onBlur, onFocus, isError, required, mimeTypes, errorFiles, uploadError, onPDFOpen, ...props } = this.props;
        const eventHandlers = {};
        const accept = (mimeTypes || []).join(',');
        eventHandlers.onChange = this.handleFormFileChange;
        if (onBlur) {
            eventHandlers.onBlur = (evt) => {
                onBlur(evt);
            };
        }
        if (onFocus) {
            eventHandlers.onFocus = (evt) => {
                onFocus(evt);
            };
        }
        if (!onClearForm) {
            onClearForm = () => { };
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
        return (React.createElement(Grid, { container: true, direction: "column" },
            React.createElement(FileUploadGrid, { container: true, direction: "column", alignItems: "center", justify: "center" },
                React.createElement("div", { id: "dragging", ref: this.setFormRef, className: formClassNames },
                    React.createElement(Grid, { container: true, justify: "center", alignItems: "center", direction: "column" },
                        React.createElement(FileUploadLabel, { htmlFor: "key-upload" },
                            React.createElement(Grid, { item: true, className: classes.bottomSpace },
                                React.createElement(HardDriveIcon, null)),
                            React.createElement(Grid, { item: true },
                                React.createElement(Typography, { variant: "subtitle1", className: classes.bottomSpace }, "Drag & drop files here"),
                                React.createElement(Typography, { variant: "subtitle2", color: "secondary", className: classes.bottomSpace }, "- OR -")),
                            React.createElement(Grid, { item: true },
                                React.createElement(Button, { variant: "outlined", color: "secondary", component: "label", className: classes.bottomSpace },
                                    "Browse Files",
                                    React.createElement("input", Object.assign({ id: id, type: "file", multiple: true, accept: accept }, props, eventHandlers, { className: classes.fileInput })))),
                            uploadError ? (React.createElement(Grid, { item: true },
                                React.createElement(Typography, { variant: "subtitle1", color: "error" }, uploadError))) : null),
                        React.createElement(FileUploadInput, { id: "key-upload", type: "file" })))),
            (files || []).map((f, ind) => (React.createElement(FileViewWithModalComponent, { key: ind, file: f, onClearForm: onClearForm, errors: errorFiles && errorFiles[ind], onPDFOpen: onPDFOpen, dragAndDrop: true })))));
    }
}
export const ArrayFileUploadWidget = withStyles(fileUploadWidgetStyles)(ArrayFileUploadWidgetComponent);
//# sourceMappingURL=inputs.js.map