"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var transaction_box_1 = require("./transaction-box");
var headings_1 = require("../typography/headings");
var paragraph_1 = require("../typography/paragraph");
var copy_1 = require("../common/copy");
var core_1 = require("@material-ui/core");
var styles = {
    header: {
        textAlign: 'center'
    },
    body: {
        textAlign: 'justify'
    },
    publicKeyWrapper: {
        textAlign: 'center'
    },
    publicKey: {
        fontFamily: 'ProximaNovaRegular',
        color: '#93b0c1'
    }
};
exports.TransactionNoGasError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrency = _a.cryptoCurrency, publicKey = _a.publicKey, closeAction = _a.closeAction;
    return (React.createElement(core_1.Grid, { container: true },
        React.createElement(transaction_box_1.TransactionBox, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
            React.createElement(headings_1.H2, { className: classes.header }, "Transaction Failed"),
            React.createElement("div", { className: classes.body },
                React.createElement(paragraph_1.P, null, "You don't have enough Ethereum (ETH) to pay for the network transaction fee. Please transfer some ETH to this address and try again. Your ETH address of this wallet is listed below. To learn more about transaction fees, click here."),
                React.createElement("div", { className: classes.publicKeyWrapper },
                    React.createElement("span", { className: classes.publicKey }, publicKey),
                    React.createElement(copy_1.Copy, { text: publicKey }))))));
});
exports.default = exports.TransactionNoGasError;
//# sourceMappingURL=transaction-no-gas-error.js.map