"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var colors_1 = require("colors");
var typography_1 = require("./typography");
var buttons_1 = require("./buttons");
var modal_close_1 = require("../../src/icons/modal-close");
var modalElements_1 = require("./modalElements");
exports.ModalWrap = core_1.withStyles({
    root: {
        backgroundColor: colors_1.base,
        boxSizing: 'border-box',
        boxShadow: 'none',
        left: 'calc(50% - 390px)',
        margin: '0 auto',
        outline: 'none',
        position: 'absolute',
        top: '100px',
        width: '780px',
    },
})(core_1.Paper);
var SimpleModal = /** @class */ (function (_super) {
    __extends(SimpleModal, _super);
    function SimpleModal() {
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
    SimpleModal.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(buttons_1.OutlineButton, { size: "large", onClick: this.handleOpen }, "Open Modal"),
            React.createElement(Modal_1.default, { open: this.state.open, onClose: this.handleClose },
                React.createElement(exports.ModalWrap, null,
                    React.createElement(modalElements_1.ModalCloseButton, { onClick: this.handleState },
                        React.createElement(modal_close_1.default, null)),
                    React.createElement(modalElements_1.ModalHeader, null,
                        React.createElement(Typography_1.default, { variant: "h6", id: "modal-title" }, "Token Removed")),
                    React.createElement(modalElements_1.ModalBody, null,
                        React.createElement(typography_1.Paragraph, { id: "simple-modal-description", gutterBottom: true }, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(core_1.Grid, { container: true, spacing: 24 },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(buttons_1.FullButton, { size: "large" }, "Continue")),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(buttons_1.OutlineButton, { size: "large" }, "Cancel"))))))));
    };
    return SimpleModal;
}(React.Component));
exports.default = SimpleModal;
//# sourceMappingURL=modal.js.map