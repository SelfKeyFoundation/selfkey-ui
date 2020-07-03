"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSendProgressBox = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var transaction_box_1 = require("../transaction-box");
var hourglass_large_1 = require("../../icons/hourglass-large");
var okay_1 = require("../../icons/okay");
var number_format_1 = require("../../price/number-format");
var styles = core_1.createStyles({
    button: {
        boxSizing: 'border-box',
        height: '45px',
        width: '220px',
        border: '1px solid #0FB8D0',
        borderRadius: '4px',
        background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 0 2px 2px 0 #07C1DC, 2px 0 2px 0 rgba(0,0,0,0.2)',
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '0.67px',
        lineHeight: '20px',
        textAlign: 'center',
        cursor: 'pointer'
    },
    button2: {
        height: '44px',
        width: '220px',
        border: '2px solid #1CA9BA',
        borderRadius: '3px',
        boxShadow: 'inset 3px 3px 10px 0 rgba(0,0,0,0.1)',
        backgroundColor: 'transparent',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '0.67px',
        lineHeight: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#1CA9BA'
    },
    actionButtonsContainer: {
        paddingTop: '50px'
    },
    amountContainer: {
        color: '#FFFFFF',
        fontSize: '40px',
        fontWeight: 300,
        lineHeight: '48px',
    },
    amount: {
        paddingRight: '15px'
    },
    address: {
        color: '#FFFFFF',
        fontSize: '20px',
        letterSpacing: '1px',
        lineHeight: '24px'
    },
    sentTo: {
        height: '28px',
        color: '#93B0C1',
        fontSize: '18px',
        lineHeight: '28px'
    }
});
var handleViewTransaction = function (event, openLink, transactionHash) {
    event.preventDefault();
    if (!openLink) {
        return;
    }
    openLink("https://etherscan.io/tx/" + transactionHash);
};
var renderIcon = function (status) {
    if (status === 'Pending') {
        return React.createElement(hourglass_large_1.HourGlassLargeIcon, null);
    }
    else if (status === 'Sent!') {
        return React.createElement(okay_1.OkayIcon, null);
    }
    return null;
};
exports.TransactionSendProgressBox = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, cryptoCurrency = _a.cryptoCurrency, closeAction = _a.closeAction, amount = _a.amount, address = _a.address, openLink = _a.openLink, locale = _a.locale, status = _a.status, transactionHash = _a.transactionHash;
    return (React.createElement(transaction_box_1.TransactionBox, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
        React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'flex-start' },
            React.createElement(core_1.Grid, { item: true, xs: 2 }, renderIcon(status)),
            React.createElement(core_1.Grid, { item: true, xs: 10 },
                React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start' },
                    React.createElement(core_1.Grid, { item: true, id: 'header' },
                        React.createElement(core_1.Typography, { variant: "h2" }, status)),
                    React.createElement(core_1.Grid, { item: true, id: "body" },
                        React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start', spacing: 4 },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: 'h1', className: classes.amountContainer },
                                    React.createElement(core_1.Grid, { container: true },
                                        React.createElement(core_1.Grid, { className: classes.amount, item: true },
                                            React.createElement(number_format_1.NumberFormat, { locale: locale, priceStyle: 'decimal', currency: cryptoCurrency, value: amount, fractionDigits: 15 })),
                                        React.createElement(core_1.Grid, { item: true }, cryptoCurrency)))),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "body2", className: classes.sentTo }, "Destination address")),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "body1", className: classes.address }, address))))),
                transactionHash &&
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Grid, { container: true },
                            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "flex-start", className: classes.actionButtonsContainer, spacing: 1 },
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement("button", { id: 'viewTransactionButton', className: classes.button, onClick: function (e) { return handleViewTransaction(e, openLink, transactionHash); } }, " VIEW TRANSACTION ")),
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: transactionHash },
                                        React.createElement("button", { className: classes.button2 }, " COPY TRANSACTION ID "))))))))));
});
exports.default = exports.TransactionSendProgressBox;
//# sourceMappingURL=transaction-send-progress-box.js.map