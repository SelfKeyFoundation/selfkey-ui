"use strict";
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
        marginTop: '100px',
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
    fileItem: {
        padding: '0 20px',
        boxSizing: 'border-box',
    },
};
exports.FileUploadWidget = react_jss_1.default(fileUploadStyles)(function (_a) {
    var classes = _a.classes, id = _a.id, file = _a.file, onClearForm = _a.onClearForm, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, props = __rest(_a, ["classes", "id", "file", "onClearForm", "onChange", "onBlur", "onFocus"]);
    var eventHandlers = {};
    if (onChange) {
        eventHandlers.onChange = function (evt) {
            onChange(evt);
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
                        React.createElement(core_1.Typography, { color: "secondary", variant: "caption" }, "Test")),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Button, { variant: "contained", size: "large", component: "label", className: classes.button },
                            "Upload",
                            React.createElement("input", __assign({ id: id, type: "file" }, props, eventHandlers, { className: classes.fileInput }))))))),
        file ? (React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.fileItem },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Grid, { container: true, direction: "row", alignItems: "center", spacing: 16 },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(file_default_1.FileDefaultIcon, null)),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement("a", { href: file.url },
                                React.createElement(core_1.Typography, { variant: "body2" }, file.name))))),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.IconButton, { onClick: onClearForm },
                        React.createElement(delete_1.DeleteIcon, null)))))) : null));
});
//# sourceMappingURL=inputs.js.map