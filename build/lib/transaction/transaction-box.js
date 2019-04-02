"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var ethereum_1 = require("../icons/ethereum");
var selfkey_1 = require("../icons/selfkey");
var selfkey_dark_theme_1 = require("../theme/selfkey-dark-theme");
var styles = {
    transactionBox: {
        padding: '90px 30px 40px 30px',
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        boxShadow: '0 0 16px 1px #15222e',
    },
    iconWrapper: {
        position: 'absolute',
        top: '-32px',
        left: '50%',
        transform: 'translate(-50%)'
    },
    icon: {
        width: '64px !important',
        height: '64px !important'
    },
    closeDialogIconWrapper: {
        position: 'absolute',
        left: '-100px',
        top: 0,
        cursor: 'pointer'
    },
    custom: {
        padding: '10px',
        display: 'block',
        backgroundColor: '#1e262d',
        border: 'solid 1px #303c49',
        color: '#fff',
        fontSize: '25px',
        fontWeight: 600,
        fontFamily: 'Lato, arial, sans-serif'
    }
};
var renderIcon = function (shortName, classes) {
    switch (shortName) {
        case 'KEY':
            return (React.createElement(selfkey_1.default, { className: classes.icon }));
        case 'KI':
            return (React.createElement(selfkey_1.default, { className: classes.icon }));
        case 'ETH':
            return (React.createElement(ethereum_1.default, { className: classes.icon }));
        default:
            return (React.createElement("div", { className: classes.custom }, shortName));
    }
};
exports.TransactionBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrency = _a.cryptoCurrency, closeAction = _a.closeAction;
    return (React.createElement("div", { className: classes.transactionBox },
        React.createElement("div", { className: classes.closeDialogIconWrapper, onClick: closeAction },
            React.createElement(selfkey_dark_theme_1.ModalCloseIcon, null)),
        React.createElement("div", { className: classes.iconWrapper }, renderIcon(cryptoCurrency, classes)),
        React.createElement("div", null, children)));
});
exports.default = exports.TransactionBox;
//# sourceMappingURL=transaction-box.js.map