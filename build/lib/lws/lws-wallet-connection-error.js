"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var lws_button_1 = require("./lws-button");
var common_style_1 = require("../common/common-style");
var wallet_1 = require("../icons/wallet");
var lws_error_1 = require("./lws-error");
var styles = {
    buttonPrimary: common_style_1.default.buttonPrimary,
    buttonSecondary: common_style_1.default.buttonSecondary,
};
exports.LWSWalletConnectionError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, downloadWalletAction = _a.downloadWalletAction, retryAction = _a.retryAction;
    return (React.createElement(lws_error_1.LWSError, { actionIcon: React.createElement(wallet_1.WalletIcon, null), actionName: "Action Required", errorName: "Install & Open The SelfKey Identity Wallet", supportText: "The SelfKey Identity Wallet is required to securely authenticate with this website. Please download and open the SelfKey Identity Wallet to proceed.", actionButton: React.createElement("div", null,
            React.createElement(lws_button_1.LWSButton, { className: classes.buttonPrimary, onClick: downloadWalletAction }, "Download The SelfKey Wallet"),
            React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry")) }));
});
exports.default = exports.LWSWalletConnectionError;
//# sourceMappingURL=lws-wallet-connection-error.js.map