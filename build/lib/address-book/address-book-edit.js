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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styled_button_1 = require("../common/styled-button");
exports.styles = {
    errorText: {
        height: '19px',
        width: '242px',
        color: '#FE4B61',
        fontFamily: 'Lato',
        fontSize: '13px',
        lineHeight: '19px'
    },
    errorColor: {
        color: '#FE4B61 !important',
        border: '2px solid #FE4B61 !important',
        backgroundColor: 'rgba(255,46,99,0.09) !important'
    },
    input: {
        boxSizing: 'border-box',
        height: '46px',
        width: '722px',
        border: '1px solid #384656',
        borderRadius: '4px',
        backgroundColor: '#1E262E',
        color: '#a9c5d6',
        fontSize: '14px',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)',
        paddingLeft: '10px',
        '&::-webkit-input-placeholder': {
            fontSize: '14px',
            color: '#93B0C1',
        }
    },
    inputError: {
        borderBottom: '2px solid #FE4B61 !important'
    },
    label: {
        color: '#93A4AF',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '15px'
    }
};
var AddressBookEditComponent = /** @class */ (function (_super) {
    __extends(AddressBookEditComponent, _super);
    function AddressBookEditComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleLabelChange = function (event) {
            event.preventDefault();
            var label = event.target.value;
            _this.setState(__assign({}, _this.state, { label: label }));
            _this.props.onLabelChange(label);
        };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            return _this.props.onSave(_this.state.label);
        };
        _this.state = { label: props.label };
        return _this;
    }
    AddressBookEditComponent.prototype.componentDidUpdate = function () {
        this.state = { label: this.props.label };
    };
    AddressBookEditComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, labelError = _a.labelError, onCancel = _a.onCancel;
        var hasLabelError = (labelError !== '' && labelError !== undefined);
        var labelInputClass = classes.input + " " + (hasLabelError ? classes.errorColor : '');
        return (React.createElement("form", { id: "formwrap", className: classes.container, noValidate: true, autoComplete: "off", onSubmit: this.handleSubmit },
            React.createElement(core_1.Grid, { container: true, direction: 'column', spacing: 32 },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Grid, { container: true, direction: 'column', spacing: 8 },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement("label", { className: classes.label }, "LABEL")),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement("input", { type: 'text', id: 'labelInput', onChange: this.handleLabelChange, value: this.state.label, className: labelInputClass, placeholder: "Address label" }),
                            hasLabelError &&
                                React.createElement("span", { id: 'labelError', className: classes.errorText }, labelError)))),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Grid, { container: true, direction: 'row', spacing: 24 },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(styled_button_1.default, { id: 'saveButton', variant: "contained", size: "medium", type: "submit", disabled: (!this.state.label || hasLabelError) }, "Save")),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(styled_button_1.default, { id: 'cancelButton', variant: "outlined", size: "medium", onClick: onCancel }, "Cancel")))))));
    };
    return AddressBookEditComponent;
}(React.Component));
exports.AddressBookEditComponent = AddressBookEditComponent;
exports.AddressBookEdit = react_jss_1.default(exports.styles)(AddressBookEditComponent);
exports.default = exports.AddressBookEdit;
//# sourceMappingURL=address-book-edit.js.map