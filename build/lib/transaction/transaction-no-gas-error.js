import * as React from 'react';
import { Typography, withStyles, createStyles } from '@material-ui/core';
import TransactionErrorBox from './transaction-error-box';
var styles = createStyles({
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
});
export var TransactionNoGasError = withStyles(styles)(function (_a) {
    var classes = _a.classes, publicKey = _a.publicKey, openLink = _a.openLink, closeAction = _a.closeAction;
    var gasExplanationUrl = 'https://help.selfkey.org/article/87-how-does-gas-impact-transaction-speed';
    var handleLinkClick = function (event) {
        event.preventDefault();
        if (!openLink) {
            return;
        }
        openLink(gasExplanationUrl);
    };
    return (React.createElement(TransactionErrorBox, { publicKey: publicKey, closeAction: closeAction },
        React.createElement("div", { className: classes.bodyText },
            React.createElement(Typography, { variant: "body1" }, "You don't have enough Ethereum (ETH) to pay for the network transaction fee. Please transfer some ETH to this address and try again. Your ETH address of this wallet is listed below."),
            React.createElement("div", { className: classes.learnMoreText },
                "To learn more about transaction fees, click ",
                ' ',
                React.createElement("a", { className: classes.learnMoreText + "  " + classes.learnMoreLink, href: gasExplanationUrl, onClick: handleLinkClick }, "here.")))));
});
export default TransactionNoGasError;
//# sourceMappingURL=transaction-no-gas-error.js.map