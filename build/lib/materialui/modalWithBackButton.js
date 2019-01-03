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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Typography_1 = require("@material-ui/core/Typography");
var Modal_1 = require("@material-ui/core/Modal");
var core_1 = require("@material-ui/core");
var modalElements_1 = require("./modalElements");
// import { OutlineButton, OutlineSecondaryButton } from "./buttons";
var typography_1 = require("./typography");
var incorporations_1 = require("../icons/incorporations");
var inputs_1 = require("./inputs");
var hard_drive_1 = require("../icons/hard-drive");
var colors_1 = require("colors");
exports.ModalWrap = core_1.withStyles({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        boxSizing: 'border-box',
        boxShadow: 'none',
        left: 0,
        margin: '30px auto 0',
        outline: 'none',
        padding: '0 20px',
        position: 'absolute',
        top: 0,
        width: '100%',
    },
})(core_1.Paper);
exports.FileUploadGrid = core_1.withStyles({
    container: {
        backgroundColor: colors_1.base,
        border: '1px solid #303C49',
        borderRadius: '4px',
        height: '400px',
        width: '760px',
    },
})(core_1.Grid);
exports.FileUploadHeaderGrid = core_1.withStyles({
    item: {
        marginLeft: '-210px',
        marginTop: '-150px',
        position: 'absolute',
    },
})(core_1.Grid);
var ModalWithBackButton = /** @class */ (function (_super) {
    __extends(ModalWithBackButton, _super);
    function ModalWithBackButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false
        };
        _this.handleOpen = function () {
            _this.setState({ open: true });
        };
        _this.handleClose = function () {
            _this.setState({ open: false });
        };
        _this.handleState = function () {
            if (_this.state.open === true) {
                _this.setState({ open: false });
            }
        };
        return _this;
    }
    ModalWithBackButton.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'center', alignItems: 'center' },
                React.createElement(incorporations_1.default, null),
                React.createElement("br", null),
                React.createElement(Typography_1.default, { variant: "h1", gutterBottom: true }, "Manage My Crypto"),
                React.createElement("br", null),
                React.createElement(typography_1.ExplanatoryLarge, { gutterBottom: true }, "Manage your ERC20 tokens displayed in the SelfKey Identity Wallet dashboard."),
                React.createElement("br", null),
                React.createElement(core_1.Button, { variant: 'outlined', size: "large", onClick: this.handleOpen }, "Add Token")),
            React.createElement("br", null),
            React.createElement(Modal_1.default, { open: this.state.open, onClose: this.handleClose },
                React.createElement(exports.ModalWrap, null,
                    React.createElement(core_1.Button, { variant: 'outlined', color: 'secondary', size: 'small', onClick: this.handleState }, "\u2039 Back"),
                    React.createElement(modalElements_1.ModalBody2, null,
                        React.createElement(Typography_1.default, { variant: "h2" }, "Add Attribute"),
                        React.createElement(typography_1.ExplanatoryLarge, { gutterBottom: true }, "Select the type of attribute you would like to add to your identity wallet."),
                        React.createElement(typography_1.ExplanatoryLarge, { gutterBottom: true }, "Add Identity Wallet Attribute"),
                        React.createElement(exports.FileUploadGrid, { container: true, direction: 'column', alignItems: 'center', justify: 'center' },
                            React.createElement(exports.FileUploadHeaderGrid, { item: true },
                                React.createElement(Typography_1.default, { variant: 'h2' }, "Upload Your National ID Document")),
                            React.createElement("br", null),
                            React.createElement(core_1.Grid, { justify: 'center', alignItems: 'center', direction: 'column' },
                                React.createElement(inputs_1.FileUploadLabel, { htmlFor: "key-upload" },
                                    React.createElement(hard_drive_1.default, null),
                                    React.createElement("div", null,
                                        React.createElement(typography_1.TableSmallText, null, "Select Document"),
                                        React.createElement(typography_1.Explanatory, null, "This is stored locally on your machine."))),
                                React.createElement(inputs_1.FileUploadInput, { id: "key-upload", type: "file" }))),
                        React.createElement("br", null))))));
    };
    return ModalWithBackButton;
}(React.Component));
exports.default = ModalWithBackButton;
//# sourceMappingURL=modalWithBackButton.js.map