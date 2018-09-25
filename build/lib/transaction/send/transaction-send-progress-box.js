"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var transaction_box_1 = require("../transaction-box");
var core_1 = require("@material-ui/core");
var hour_glass_1 = require("../../icons/hour-glass");
var headings_1 = require("../../typography/headings");
var number_format_1 = require("../../price/number-format");
var styles = {
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
        boxShadow: 'inset 3px 3px 10px 0 rgba(0,0,0,0.1)'
    },
    actionButtonsContainer: {
        paddingTop: '50px'
    },
};
var handleViewTransaction = function (event, openLink, transactionHash) {
    event.preventDefault();
    if (!openLink) {
        return;
    }
    openLink("https://etherscan.io/tx/" + transactionHash);
};
var renderIcon = function (status) {
    if (status === 'Pending') {
        return React.createElement(hour_glass_1.HourGlassIcon, null);
    }
    else if (status === 'Sent!') {
        return React.createElement("span", null, "Missing Icon");
    }
    return;
};
exports.TransactionSendProgressBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrency = _a.cryptoCurrency, closeAction = _a.closeAction, amount = _a.amount, address = _a.address, openLink = _a.openLink, locale = _a.locale, status = _a.status, transactionHash = _a.transactionHash;
    return (React.createElement(transaction_box_1.TransactionBox, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
        React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'flex-start' },
            React.createElement(core_1.Grid, { item: true, xs: 2 }, renderIcon(status)),
            React.createElement(core_1.Grid, { item: true, xs: 10 },
                React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start' },
                    React.createElement(core_1.Grid, { item: true, id: 'header' },
                        React.createElement(headings_1.H2, { className: classes.headerText }, status)),
                    React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body },
                        React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start', spacing: 16 },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: 'display2' },
                                    React.createElement(core_1.Grid, { container: true },
                                        React.createElement(core_1.Grid, { item: true },
                                            React.createElement(number_format_1.NumberFormat, { locale: locale, style: 'decimal', currency: cryptoCurrency, value: amount, fractionDigits: 15 })),
                                        React.createElement(core_1.Grid, { item: true }, cryptoCurrency)))),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "body2" }, "sent to")),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "headline" }, address))))),
                transactionHash &&
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Grid, { container: true },
                            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "center", alignItems: "center", className: classes.actionButtonsContainer, spacing: 24 },
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement("button", { className: classes.button, onClick: function (e) { return handleViewTransaction(e, openLink, transactionHash); } }, " VIEW TRANSACTION ")),
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement("button", { className: classes.button2 }, " COPY TRANSACTION ID ")))))))));
});
exports.default = exports.TransactionSendProgressBox;
//# sourceMappingURL=transaction-send-progress-box.js.map