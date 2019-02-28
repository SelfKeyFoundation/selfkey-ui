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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var react_jss_1 = require("react-jss");
var delete_1 = require("../icons/delete");
var classnames_1 = require("classnames");
var hard_drive_1 = require("../icons/hard-drive");
var file_default_1 = require("../icons/file-default");
var colors_1 = require("../colors");
exports.FileUploadLabel = core_1.withStyles({
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
exports.FileUploadInput = core_1.withStyles({
    root: {
        display: 'none',
    },
})(core_1.Input);
exports.DecimalInput = core_1.withStyles({
    inputType: {
        textAlign: 'right',
    },
})(core_1.Input);
var fileViewStyles = function (theme) {
    return core_1.createStyles({
        fileItem: {
            padding: '0 20px',
            boxSizing: 'border-box',
        },
    });
};
exports.FileView = core_1.withStyles(fileViewStyles)(function (_a) {
    var classes = _a.classes, file = _a.file, onClearForm = _a.onClearForm;
    return (React.createElement(core_1.Grid, { item: true },
        React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.fileItem },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Grid, { container: true, direction: "row", alignItems: "center", spacing: 16 },
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(file_default_1.FileDefaultIcon, null)),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement("a", { href: file.url },
                            React.createElement(core_1.Typography, { variant: "body2" }, file.name))))),
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.IconButton, { onClick: function () { return onClearForm(file); } },
                    React.createElement(delete_1.DeleteIcon, null))))));
});
var fileUploadStyles = {
    form: {
        width: '100%',
        height: '46px',
        backgroundColor: colors_1.baseDark,
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
exports.FileUploadWidget = react_jss_1.default(fileUploadStyles)(function (_a) {
    var classes = _a.classes, id = _a.id, file = _a.file, onClearForm = _a.onClearForm, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, props = __rest(_a, ["classes", "id", "file", "onClearForm", "onChange", "onBlur", "onFocus"]);
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
    id = id || 'key-upload';
    return (React.createElement(core_1.Grid, { container: true, direction: "column", spacing: 24 },
        React.createElement(core_1.Grid, { item: true },
            React.createElement("div", { className: classes.form },
                React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Typography, { color: "secondary", variant: "caption" }, props.placeholder || 'Please upload a document')),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Button, { variant: "contained", size: "large", component: "label", className: classes.button },
                            "Upload",
                            React.createElement("input", __assign({ id: id, type: "file" }, props, eventHandlers, { className: classes.fileInput }))))))),
        file ? React.createElement(exports.FileView, { file: file, onClearForm: onClearForm }) : null));
});
exports.FileUploadGrid = core_1.withStyles({
    container: {
        backgroundColor: colors_1.base,
        border: '1px solid #303C49',
        borderRadius: '4px',
        height: '400px',
        minWidth: '500px',
        width: '100%',
    },
})(core_1.Grid);
var fileUploadWidgetStyles = function (theme) {
    return core_1.createStyles({
        fileInput: {
            display: 'none',
        },
        dropArea: {
            width: '100%',
            height: '100%',
            border: '1px solid transparent',
        },
        highlite: {
            border: "1px solid " + colors_1.warning,
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
            _this.props.onChange && _this.props.onChange(Array.from(event.dataTransfer.files), true);
        };
        return _this;
    }
    ArrayFileUploadWidgetComponent.prototype.componentDidMount = function () {
        this.attachDropZoneEvents();
    };
    ArrayFileUploadWidgetComponent.prototype.componentDidUnmount = function () {
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
            _this.formRef.removeEventListiner(eventName, _this.preventDefaults);
        });
        ['dragenter', 'dragover'].forEach(function (eventName) {
            _this.formRef.removeEventListiner(eventName, _this.handleDragStart);
        });
        ['dragleave', 'drop'].forEach(function (eventName) {
            _this.formRef.removeEventListiner(eventName, _this.handleDragEnd);
        });
        this.formRef.removeEventListiner('drop', this.handleDrop);
    };
    ArrayFileUploadWidgetComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, id = _a.id, files = _a.files, onClearForm = _a.onClearForm, onBlur = _a.onBlur, onFocus = _a.onFocus, props = __rest(_a, ["classes", "id", "files", "onClearForm", "onBlur", "onFocus"]);
        var eventHandlers = {};
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
        var formClassNames = classnames_1.default(classes.dropArea, this.state.dragging ? classes.highlite : null);
        return (React.createElement(core_1.Grid, { container: true, direction: "column", spacing: 24 },
            React.createElement(exports.FileUploadGrid, { container: true, direction: "column", alignItems: "center", justify: "center" },
                React.createElement("form", { ref: this.setFormRef, className: formClassNames },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignItems: "center", direction: "column" },
                        React.createElement(exports.FileUploadLabel, { htmlFor: "key-upload" },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(hard_drive_1.HardDriveIcon, null)),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "subtitle1", gutterBottom: true }, "Drag & drop files here"),
                                React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary", gutterBottom: true }, "- OR -")),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Button, { variant: "outlined", color: "secondary", component: "label" },
                                    "Browse Files",
                                    React.createElement("input", __assign({ id: id, type: "file", multiple: true }, props, eventHandlers, { className: classes.fileInput }))))),
                        React.createElement(exports.FileUploadInput, { id: "key-upload", type: "file" })))),
            (files || []).map(function (f, ind) { return (React.createElement(exports.FileView, { key: ind, file: f, onClearForm: onClearForm })); })));
    };
    return ArrayFileUploadWidgetComponent;
}(React.Component));
exports.ArrayFileUploadWidget = core_1.withStyles(fileUploadWidgetStyles)(ArrayFileUploadWidgetComponent);
//# sourceMappingURL=inputs.js.map