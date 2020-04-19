"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var react_jss_1 = require("react-jss");
var delete_1 = require("../icons/delete");
var classnames_1 = require("classnames");
var hard_drive_1 = require("../icons/hard-drive");
var file_default_1 = require("../icons/file-default");
var colors_1 = require("../colors");
var modalWithBackButton_1 = require("./modalWithBackButton");
var modalElements_1 = require("./modalElements");
var file_image_1 = require("../icons/file-image");
var file_pdf_1 = require("../icons/file-pdf");
var file_audio_1 = require("../icons/file-audio");
var multilineSelectStyles = function (theme) {
    return styles_1.createStyles({
        root: {
            backgroundColor: colors_1.baseDark,
            borderRadius: '4px',
            border: '1px solid #384656',
            boxSizing: 'border-box',
            maxWidth: '360px',
            color: colors_1.white,
            fontSize: '14px',
            overflow: 'auto',
            lineHeight: '21px',
            '&$focused': {
                '&$focused:not($error):not($disabled)': {
                    border: "1px solid " + colors_1.primary,
                    boxShadow: "0 0 3px 1px " + colors_1.primary,
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
            color: colors_1.primary,
            cursor: 'pointer',
            lineHeight: '21px',
            padding: '10px 16px',
            marginBottom: 0,
        },
    });
};
exports.MultilineSelect = styles_1.withStyles(multilineSelectStyles)(function (props) {
    var classes = props.classes, multiselect = props.multiselect, _a = props.selected, selected = _a === void 0 ? [] : _a, _b = props.items, items = _b === void 0 ? [] : _b, onSelectUpdated = props.onSelectUpdated, onAdd = props.onAdd;
    var isSelected = function (item) { return selected.includes(item.key); };
    var handleItemClick = function (item) {
        return function (evt) {
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
                return onSelectUpdated(selected.filter(function (x) { return x !== item.key; }));
            }
            return onSelectUpdated(__spreadArrays(selected, [item.key]));
        };
    };
    return (React.createElement("div", null,
        React.createElement(core_1.List, { className: classes.root },
            items.map(function (item) { return (React.createElement(core_1.ListItem, { key: item.key, className: classes.item, selected: isSelected(item), onClick: handleItemClick(item) },
                React.createElement(core_1.ListItemText, { className: classes.itemText }, item.value))); }),
            onAdd && items.length > 0 ? React.createElement(core_1.Divider, null) : null,
            onAdd ? (React.createElement(core_1.ListItem, { className: classes.itemAdd, onClick: onAdd }, "+Add Option")) : null)));
});
exports.FileUploadLabel = styles_1.withStyles({
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
            color: colors_1.primary,
        },
    },
})(core_1.InputLabel);
exports.FileUploadInput = styles_1.withStyles({
    root: {
        display: 'none',
    },
})(core_1.Input);
exports.DecimalInput = styles_1.withStyles({
    input: {
        textAlign: 'right'
    },
})(core_1.Input);
var fileViewStyles = function (theme) {
    return styles_1.createStyles({
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
                color: colors_1.primary,
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
};
exports.FileView = styles_1.withStyles(fileViewStyles)(function (_a) {
    var classes = _a.classes, file = _a.file, onClearForm = _a.onClearForm, _b = _a.errors, errors = _b === void 0 ? [] : _b;
    return (React.createElement(core_1.Grid, { item: true, className: classnames_1.default(classes.fileItem, errors && errors.length && classes.fileItemError) },
        React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", wrap: "nowrap" },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Grid, { container: true, direction: "row", alignItems: "center", spacing: 4, wrap: "nowrap" },
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(file_default_1.FileDefaultIcon, null)),
                    React.createElement(core_1.Grid, { item: true, className: classes.breakAll },
                        React.createElement("a", { href: file.url, className: classes.noDecoration },
                            React.createElement(core_1.Typography, { variant: "body2" }, file.name))))),
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.IconButton, { onClick: function () { return onClearForm(file); } },
                    React.createElement(delete_1.DeleteIcon, null)))),
        errors && errors.length ? (React.createElement(core_1.Grid, { container: true, direction: "column", className: classes.fileErrorContainer }, errors.map(function (err) { return (React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Typography, { variant: "body1", color: "error" }, err))); }))) : null));
});
var isImageType = function (mime) { return ['image/png', 'image/jpeg'].includes(mime); };
var isAudioType = function (mime) { return ['audio/ogg', 'audio/mp3', 'audio/m4a', 'audio/x-wav'].includes(mime); };
var isPDFType = function (mime) { return ['application/pdf'].includes(mime); };
var dataURItoBlob = function (dataURI) {
    // Split metadata from data
    var splitted = dataURI.split(',');
    // Split params
    var params = splitted[0].split(';');
    // Get mime-type from params
    var type = params[0].replace('data:', '');
    // Filter the name property from params
    var properties = params.filter(function (param) {
        return param.split('=')[0] === 'name';
    });
    // Look for the name and use unknown if no name property.
    var name;
    if (properties.length !== 1) {
        name = 'unknown';
    }
    else {
        // Because we filtered out the other property,
        // we only have the name case here.
        name = properties[0].split('=')[1];
    }
    // Built the Uint8Array Blob parameter from the base64 string.
    var binary = atob(splitted[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    // Create the blob object
    var blob = new window.Blob([new Uint8Array(array)], { type: type });
    return { blob: blob, name: name };
};
var PreviewFileType = styles_1.withStyles(fileViewStyles)(function (_a) {
    var classes = _a.classes, file = _a.file, url = _a.url, mime = _a.mime;
    if (isImageType(mime)) {
        return React.createElement("img", { src: url, alt: file.name, className: classes.imageWidth });
    }
    else {
        return React.createElement("audio", { src: url, controls: true });
    }
});
exports.FilePreviewModalView = styles_1.withStyles(fileViewStyles)(function (_a) {
    var classes = _a.classes, open = _a.open, onClose = _a.onClose, onBack = _a.onBack, file = _a.file, url = _a.url, mime = _a.mime;
    return (React.createElement(core_1.Modal, { open: open, onClose: onClose },
        React.createElement(modalWithBackButton_1.ModalWrap, null,
            React.createElement(core_1.Button, { variant: "outlined", color: "secondary", size: "small", onClick: onBack, className: "" + classes.back }, "\u2039 Back"),
            React.createElement(modalElements_1.ModalBody2, { className: classes.fullWidth + " " + classes.topSpacing },
                React.createElement(PreviewFileType, { file: file, url: url, mime: mime })))));
});
var FileLinkWithModalComponent = /** @class */ (function (_super) {
    __extends(FileLinkWithModalComponent, _super);
    function FileLinkWithModalComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.setState({ open: false });
        };
        _this.handleOpen = function (evt) {
            var _a = _this.state, url = _a.url, mime = _a.mime, file = _a.file;
            if (!url && _this.isSupportedFile(mime)) {
                url = _this.createFileUrl(file, mime);
            }
            if (isImageType(mime) || isAudioType(mime)) {
                evt && evt.preventDefault();
                return _this.setState({ open: true });
            }
            if (isPDFType(mime) && _this.props.onPDFOpen) {
                evt && evt.preventDefault();
                return _this.props.onPDFOpen(__assign(__assign({}, file), { url: url }));
            }
        };
        var file = props.file;
        var url = file.url;
        var mime = file.mimeType.fileType || file.mimeType;
        _this.state = { open: false, file: file, mime: mime, url: url, urlCreated: false };
        return _this;
    }
    FileLinkWithModalComponent.prototype.componentDidMount = function () {
        var _a = this.state, file = _a.file, mime = _a.mime, url = _a.url;
        if (!url && !this.isSupportedFile(mime)) {
            this.createFileUrl(file, mime);
        }
    };
    FileLinkWithModalComponent.prototype.componentWillUnmount = function () {
        var _a = this.state, url = _a.url, urlCreated = _a.urlCreated;
        if (urlCreated) {
            URL.revokeObjectURL(url);
        }
    };
    FileLinkWithModalComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.file.name !== prevProps.file.name || this.props.file.contents !== prevProps.file.contents) {
            var file = this.props.file;
            var mime = file.mimeType.fileType || file.mimeType;
            var state = { file: file, url: file.url, urlCreated: false, mime: mime };
            this.setState(state);
            if (prevState.urlCreated) {
                URL.revokeObjectURL(prevState.url);
            }
        }
    };
    FileLinkWithModalComponent.prototype.isSupportedFile = function (mime) {
        return isImageType(mime) || isAudioType(mime) || isPDFType(mime);
    };
    FileLinkWithModalComponent.prototype.createFileUrl = function (document, mime) {
        var _a = dataURItoBlob(document.content), blob = _a.blob, name = _a.name;
        var file = new File([blob], name, { type: mime });
        var url = URL.createObjectURL(file);
        this.setState({ url: url, urlCreated: true });
        return url;
    };
    FileLinkWithModalComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.small, small = _c === void 0 ? false : _c;
        var _d = this.state, open = _d.open, file = _d.file, url = _d.url, mime = _d.mime;
        var textProps = {
            variant: 'subtitle1',
            className: classes.fileName,
        };
        if (small) {
            textProps.color = 'secondary';
            textProps.className = textProps.className + " " + classes.ellipsis;
            textProps.title = file.name;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("a", { className: classes.noDecoration + " " + classes.link + " " + className, onClick: this.handleOpen, href: file.url, target: "_blank", rel: "noopener noreferrer" },
                React.createElement(core_1.Typography, __assign({}, textProps), file.name)),
            React.createElement(exports.FilePreviewModalView, { open: open, onClose: this.handleClose, file: file, url: url, mime: mime, onBack: this.handleClose })));
    };
    return FileLinkWithModalComponent;
}(React.Component));
exports.FileLinkWithModal = styles_1.withStyles(fileViewStyles)(FileLinkWithModalComponent);
var FileViewWithModal = /** @class */ (function (_super) {
    __extends(FileViewWithModal, _super);
    function FileViewWithModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileViewWithModal.prototype.render = function () {
        var _a = this.props, classes = _a.classes, file = _a.file, onClearForm = _a.onClearForm, _b = _a.errors, errors = _b === void 0 ? [] : _b;
        var FileTypeIcon = function (fileType) {
            var type = fileType.fileType || fileType;
            if (isImageType(type)) {
                return React.createElement(file_image_1.FileImageIcon, null);
            }
            else if (isPDFType(type)) {
                return React.createElement(file_pdf_1.FilePdfIcon, null);
            }
            else if (isAudioType(type)) {
                return React.createElement(file_audio_1.FileAudioIcon, null);
            }
            else {
                return React.createElement(file_default_1.FileDefaultIcon, null);
            }
        };
        return (React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", wrap: "nowrap", className: classes.bottomSpace },
                    React.createElement(core_1.Grid, { item: true, className: classes.padding },
                        React.createElement(core_1.Grid, { container: true, direction: "row", alignItems: "center", spacing: 4, wrap: "nowrap" },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(FileTypeIcon, { fileType: file.mimeType })),
                            React.createElement(core_1.Grid, { item: true, className: classes.breakAll },
                                React.createElement(exports.FileLinkWithModal, { file: file, onPDFOpen: this.props.onPDFOpen })))),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.IconButton, { onClick: function () { return onClearForm(file); } },
                            React.createElement(delete_1.DeleteIcon, null)))),
                errors && errors.length ? (React.createElement(core_1.Grid, { container: true, direction: "column", className: classes.fileErrorContainer }, errors.map(function (err) { return (React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Typography, { variant: "body1", color: "error" }, err))); }))) : null)));
    };
    return FileViewWithModal;
}(React.Component));
exports.FileViewWithModalComponent = styles_1.withStyles(fileViewStyles)(FileViewWithModal);
var fileUploadStyles = {
    form: {
        width: '100%',
        height: '46px',
        backgroundColor: colors_1.baseDark,
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
        border: "1px solid " + colors_1.error,
    },
};
exports.FileUploadWidget = react_jss_1.default(fileUploadStyles)(function (_a) {
    var classes = _a.classes, id = _a.id, file = _a.file, isError = _a.isError, onClearForm = _a.onClearForm, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, onPDFOpen = _a.onPDFOpen, required = _a.required, props = __rest(_a, ["classes", "id", "file", "isError", "onClearForm", "onChange", "onBlur", "onFocus", "onPDFOpen", "required"]);
    var eventHandlers = {};
    if (onChange) {
        eventHandlers.onChange = function (evt) {
            onChange(Array.from(evt.target.files));
        };
    }
    if (onBlur) {
        eventHandlers.onBlur = function (evt) {
            onBlur(evt);
        };
    }
    if (onFocus) {
        eventHandlers.onFocus = function (evt) {
            onFocus(evt);
        };
    }
    if (!onClearForm) {
        onClearForm = function () { };
    }
    var additionalClass = null;
    if (isError) {
        additionalClass = classes.formError;
    }
    id = id || 'key-upload';
    var formClassNames = classnames_1.default(additionalClass);
    return (React.createElement(core_1.Grid, { container: true, direction: "column", spacing: 8 },
        React.createElement(core_1.Grid, { item: true },
            React.createElement("div", { className: classes.form + " " + formClassNames },
                React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, props.placeholder || 'Please upload a document')),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Button, { variant: "contained", size: "large", component: "label", className: classes.button },
                            "Upload",
                            React.createElement("input", __assign({ id: id, type: "file" }, props, eventHandlers, { className: classes.fileInput }))))))),
        file ? (React.createElement(exports.FileViewWithModalComponent, { file: file, onClearForm: onClearForm, onPDFOpen: onPDFOpen })) : null));
});
exports.FileUploadGrid = styles_1.withStyles({
    container: {
        backgroundColor: colors_1.base,
        border: '1px solid #303C49',
        borderRadius: '4px',
        height: '400px',
        minWidth: '500px',
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px',
    },
})(core_1.Grid);
var fileUploadWidgetStyles = function (theme) {
    return styles_1.createStyles({
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
            border: "1px solid " + colors_1.primary,
        },
        formError: {
            border: "1px solid " + colors_1.error,
        },
        bottomSpace: {
            marginBottom: '10px',
        },
    });
};
var ArrayFileUploadWidgetComponent = /** @class */ (function (_super) {
    __extends(ArrayFileUploadWidgetComponent, _super);
    function ArrayFileUploadWidgetComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { dragging: false };
        _this.formRef = null;
        _this.setFormRef = function (element) {
            _this.formRef = element;
        };
        _this.preventDefaults = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        _this.handleFormFileChange = function (evt) {
            _this.props.onChange && _this.props.onChange(Array.from(evt.target.files), true);
        };
        _this.handleDragStart = function (event) {
            _this.setState({ dragging: true });
        };
        _this.handleDragEnd = function (event) {
            _this.setState({ dragging: false });
        };
        _this.handleDrop = function (event) {
            console.log(Array.from(event.dataTransfer.files));
            _this.props.onChange && _this.props.onChange(Array.from(event.dataTransfer.files), true);
        };
        return _this;
    }
    ArrayFileUploadWidgetComponent.prototype.componentDidMount = function () {
        this.attachDropZoneEvents();
    };
    ArrayFileUploadWidgetComponent.prototype.componentWillUnmount = function () {
        this.detachDropZoneEvents();
    };
    ArrayFileUploadWidgetComponent.prototype.attachDropZoneEvents = function () {
        var _this = this;
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
            _this.formRef.addEventListener(eventName, _this.preventDefaults, false);
        });
        ['dragenter', 'dragover'].forEach(function (eventName) {
            _this.formRef.addEventListener(eventName, _this.handleDragStart, false);
        });
        ['dragleave', 'drop'].forEach(function (eventName) {
            _this.formRef.addEventListener(eventName, _this.handleDragEnd, false);
        });
        this.formRef.addEventListener('drop', this.handleDrop, false);
    };
    ArrayFileUploadWidgetComponent.prototype.detachDropZoneEvents = function () {
        var _this = this;
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
            _this.formRef.removeEventListener(eventName, _this.preventDefaults);
        });
        ['dragenter', 'dragover'].forEach(function (eventName) {
            _this.formRef.removeEventListener(eventName, _this.handleDragStart);
        });
        ['dragleave', 'drop'].forEach(function (eventName) {
            _this.formRef.removeEventListener(eventName, _this.handleDragEnd);
        });
        this.formRef.removeEventListener('drop', this.handleDrop);
    };
    ArrayFileUploadWidgetComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, id = _a.id, files = _a.files, onClearForm = _a.onClearForm, onBlur = _a.onBlur, onFocus = _a.onFocus, isError = _a.isError, required = _a.required, mimeTypes = _a.mimeTypes, errorFiles = _a.errorFiles, uploadError = _a.uploadError, onPDFOpen = _a.onPDFOpen, props = __rest(_a, ["classes", "id", "files", "onClearForm", "onBlur", "onFocus", "isError", "required", "mimeTypes", "errorFiles", "uploadError", "onPDFOpen"]);
        var eventHandlers = {};
        var accept = (mimeTypes || []).join(',');
        eventHandlers.onChange = this.handleFormFileChange;
        if (onBlur) {
            eventHandlers.onBlur = function (evt) {
                onBlur(evt);
            };
        }
        if (onFocus) {
            eventHandlers.onFocus = function (evt) {
                onFocus(evt);
            };
        }
        if (!onClearForm) {
            onClearForm = function () { };
        }
        id = id || 'key-upload';
        var additionalClass = null;
        if (isError) {
            additionalClass = classes.formError;
        }
        if (this.state.dragging) {
            additionalClass = classes.highlite;
        }
        var formClassNames = classnames_1.default(classes.dropArea, additionalClass);
        return (React.createElement(core_1.Grid, { container: true, direction: "column" },
            React.createElement(exports.FileUploadGrid, { container: true, direction: "column", alignItems: "center", justify: "center" },
                React.createElement("div", { id: "dragging", ref: this.setFormRef, className: formClassNames },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignItems: "center", direction: "column" },
                        React.createElement(exports.FileUploadLabel, { htmlFor: "key-upload" },
                            React.createElement(core_1.Grid, { item: true, className: classes.bottomSpace },
                                React.createElement(hard_drive_1.HardDriveIcon, null)),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "subtitle1", className: classes.bottomSpace }, "Drag & drop files here"),
                                React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary", className: classes.bottomSpace }, "- OR -")),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Button, { variant: "outlined", color: "secondary", component: "label", className: classes.bottomSpace },
                                    "Browse Files",
                                    React.createElement("input", __assign({ id: id, type: "file", multiple: true, accept: accept }, props, eventHandlers, { className: classes.fileInput })))),
                            uploadError ? (React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "subtitle1", color: "error" }, uploadError))) : null),
                        React.createElement(exports.FileUploadInput, { id: "key-upload", type: "file" })))),
            (files || []).map(function (f, ind) { return (React.createElement(exports.FileViewWithModalComponent, { key: ind, file: f, onClearForm: onClearForm, errors: errorFiles && errorFiles[ind], onPDFOpen: onPDFOpen })); })));
    };
    return ArrayFileUploadWidgetComponent;
}(React.Component));
exports.ArrayFileUploadWidget = styles_1.withStyles(fileUploadWidgetStyles)(ArrayFileUploadWidgetComponent);
//# sourceMappingURL=inputs.js.map