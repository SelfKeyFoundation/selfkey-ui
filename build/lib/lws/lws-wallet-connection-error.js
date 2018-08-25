"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var lws_button_1 = require("./lws-button");
var common_style_1 = require("../common/common-style");
var wallet_1 = require("../icons/wallet");
var styles = {
    buttonPrimary: common_style_1.default.buttonPrimary,
    buttonSecondary: common_style_1.default.buttonSecondary,
    form: common_style_1.default.form,
    formSubmitRow: {
        marginTop: '15px',
        '& button': {
            marginTop: '30px'
        }
    },
    supportText: {
        textAlign: 'center',
        lineHeight: '22px',
        fontFamily: 'ProximaNovaSemibold',
        color: '#C5DCE9',
        padding: '0 0 30px'
    },
    areaTitle: {
        textAlign: 'center',
        '& h2': {
            textTransform: 'uppercase',
            fontWeight: 'normal',
            fontSize: '16px',
            padding: '25px 0',
            margin: 0,
            color: '#D97300'
        },
        '& h3': {
            fontWeight: 'normal',
            fontSize: '21px',
            padding: '0 0 45px',
            margin: 0,
            color: '#93B0C1'
        }
    },
};
exports.LWSWalletConnectionError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, downloadWalletAction = _a.downloadWalletAction, retryAction = _a.retryAction;
    return (React.createElement("div", null,
        React.createElement("div", { className: classes.areaTitle },
            React.createElement(wallet_1.WalletIcon, null),
            React.createElement("h2", null, "Action Required"),
            React.createElement("h3", null, "Install & Open The SelfKey Identity Wallet")),
        React.createElement("div", { className: classes.form },
            React.createElement("p", { className: classes.supportText }, "The SelfKey Identity Wallet is required to securely authenticate with this website. Please download and open the SelfKey Identity Wallet to proceed."),
            React.createElement("div", { className: classes.formSubmitRow },
                React.createElement(lws_button_1.LWSButton, { className: classes.buttonPrimary, onClick: downloadWalletAction }, "Download The SelfKey Wallet"),
                React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry")))));
});
exports.default = exports.LWSWalletConnectionError;
//# sourceMappingURL=lws-wallet-connection-error.js.map