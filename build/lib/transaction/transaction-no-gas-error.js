"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var transaction_box_1 = require("./transaction-box");
var headings_1 = require("../typography/headings");
var paragraph_1 = require("../typography/paragraph");
var link_1 = require("../typography/link");
var copy_1 = require("../common/copy");
var styles = {
    header: {
        textAlign: 'center',
    },
    body: {
        textAlign: 'justify',
    },
    publicKeyWrapper: {
        textAlign: 'center',
    },
    publicKey: {
        fontFamily: '"Proxima Nova", arial, sans-serif',
        color: '#93b0c1',
    },
};
exports.TransactionNoGasError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrency = _a.cryptoCurrency, publicKey = _a.publicKey, openLink = _a.openLink, closeAction = _a.closeAction;
    var gasExplanationUrl = 'https://help.selfkey.org/article/87-how-does-gas-impact-transaction-speed';
    var handleLinkClick = function (event) {
        event.preventDefault();
        if (!openLink) {
            return;
        }
        openLink(gasExplanationUrl);
    };
    return (React.createElement(transaction_box_1.TransactionBox, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
        React.createElement(headings_1.H2, { className: classes.header }, "Transaction Failed"),
        React.createElement("div", { className: classes.body },
            React.createElement(paragraph_1.P, null,
                "You don't have enough Ethereum (ETH) to pay for the network transaction fee. Please transfer some ETH to this address and try again. Your ETH address of this wallet is listed below. To learn more about transaction fees, click",
                ' ',
                React.createElement(link_1.A, { href: gasExplanationUrl, onClick: handleLinkClick }, "here"),
                "."),
            React.createElement("div", { className: classes.publicKeyWrapper },
                React.createElement("span", { className: classes.publicKey }, publicKey),
                React.createElement(copy_1.Copy, { text: publicKey })))));
});
exports.default = exports.TransactionNoGasError;
//# sourceMappingURL=transaction-no-gas-error.js.map