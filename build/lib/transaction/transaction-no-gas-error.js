"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var transaction_error_box_1 = require("./transaction-error-box");
var core_1 = require("@material-ui/core");
var styles = {
    bodyText: {
        paddingRight: '40px',
        textAlign: 'justify',
    },
    learnMoreText: {
        paddingTop: '15px',
        color: '#93B0C1',
        fontFamily: 'Lato',
        fontSize: '13px',
        lineHeight: '19px'
    },
    learnMoreLink: {
        textDecoration: 'none',
    }
};
exports.TransactionNoGasError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, publicKey = _a.publicKey, openLink = _a.openLink, closeAction = _a.closeAction;
    var gasExplanationUrl = 'https://help.selfkey.org/article/87-how-does-gas-impact-transaction-speed';
    var handleLinkClick = function (event) {
        event.preventDefault();
        if (!openLink) {
            return;
        }
        openLink(gasExplanationUrl);
    };
    return (React.createElement(transaction_error_box_1.default, { publicKey: publicKey, closeAction: closeAction },
        React.createElement("div", { className: classes.bodyText },
            React.createElement(core_1.Typography, { variant: "body1" }, "You don't have enough Ethereum (ETH) to pay for the network transaction fee. Please transfer some ETH to this address and try again. Your ETH address of this wallet is listed below."),
            React.createElement("div", { className: classes.learnMoreText },
                "To learn more about transaction fees, click ",
                ' ',
                React.createElement("a", { className: classes.learnMoreText + "  " + classes.learnMoreLink, href: gasExplanationUrl, onClick: handleLinkClick }, "here.")))));
});
exports.default = exports.TransactionNoGasError;
//# sourceMappingURL=transaction-no-gas-error.js.map