"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var ethereum_1 = require("../icons/ethereum");
var selfkey_1 = require("../icons/selfkey");
var close_dialog_1 = require("../icons/close-dialog");
var styles = {
    transactionBox: {
        padding: '90px 30px 40px 30px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        boxShadow: '0 0 16px 1px #15222e',
        alignItems: 'center',
    },
    iconWrapper: {
        position: 'absolute',
        top: '-32px',
        left: 'calc(50% - 32px)'
    },
    icon: {
        width: '64px !important',
        height: '64px !important'
    },
    closeDialogIconWrapper: {
        position: 'absolute',
        right: '-18px',
        top: '-18px',
        cursor: 'pointer',
    }
};
var renderIcon = function (shortName, classes) {
    switch (shortName) {
        case 'KEY':
            return (React.createElement(selfkey_1.default, { className: classes.icon }));
        case 'ETH':
            return (React.createElement(ethereum_1.default, { className: classes.icon }));
        default:
            return;
    }
};
exports.TransactionBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrency = _a.cryptoCurrency, closeAction = _a.closeAction;
    return (React.createElement("div", { className: classes.transactionBox, onClick: closeAction },
        React.createElement("div", { className: classes.closeDialogIconWrapper },
            React.createElement(close_dialog_1.default, null)),
        React.createElement("div", { className: classes.iconWrapper }, renderIcon(cryptoCurrency, classes)),
        React.createElement("div", null, children)));
});
exports.default = exports.TransactionBox;
//# sourceMappingURL=transaction-box.js.map