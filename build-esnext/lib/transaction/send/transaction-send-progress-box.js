import * as React from 'react';
import { Grid, Typography, withStyles, createStyles } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TransactionBox } from '../transaction-box';
import { HourGlassLargeIcon } from '../../icons/hourglass-large';
import { OkayIcon } from '../../icons/okay';
import { NumberFormat } from '../../price/number-format';
const styles = createStyles({
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
        lineHeight: '48px'
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
const handleViewTransaction = (event, openLink, transactionHash) => {
    event.preventDefault();
    if (!openLink) {
        return;
    }
    openLink(`https://etherscan.io/tx/${transactionHash}`);
};
const renderIcon = (status) => {
    if (status === 'Pending') {
        return React.createElement(HourGlassLargeIcon, null);
    }
    else if (status === 'Sent!') {
        return React.createElement(OkayIcon, null);
    }
    return null;
};
export const TransactionSendProgressBox = withStyles(styles)(({ classes, cryptoCurrency, closeAction, amount, address, openLink, locale, status, transactionHash }) => (React.createElement(TransactionBox, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
    React.createElement(Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "flex-start" },
        React.createElement(Grid, { item: true, xs: 2 }, renderIcon(status)),
        React.createElement(Grid, { item: true, xs: 10 },
            React.createElement(Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
                React.createElement(Grid, { item: true, id: "header" },
                    React.createElement(Typography, { variant: "h2" }, status)),
                React.createElement(Grid, { item: true, id: "body" },
                    React.createElement(Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start", spacing: 4 },
                        React.createElement(Grid, { item: true },
                            React.createElement(Typography, { variant: "h1", className: classes.amountContainer },
                                React.createElement(Grid, { container: true },
                                    React.createElement(Grid, { className: classes.amount, item: true },
                                        React.createElement(NumberFormat, { locale: locale, priceStyle: "decimal", currency: cryptoCurrency, value: amount, fractionDigits: 15 })),
                                    React.createElement(Grid, { item: true }, cryptoCurrency)))),
                        React.createElement(Grid, { item: true },
                            React.createElement(Typography, { variant: "body2", className: classes.sentTo }, "Destination address")),
                        React.createElement(Grid, { item: true },
                            React.createElement(Typography, { variant: "body1", className: classes.address }, address))))),
            transactionHash && (React.createElement(Grid, { item: true },
                React.createElement(Grid, { container: true },
                    React.createElement(Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "flex-start", className: classes.actionButtonsContainer, spacing: 1 },
                        React.createElement(Grid, { item: true },
                            React.createElement("button", { id: "viewTransactionButton", className: classes.button, onClick: e => handleViewTransaction(e, openLink, transactionHash) },
                                ' ',
                                "VIEW TRANSACTION",
                                ' ')),
                        React.createElement(Grid, { item: true },
                            React.createElement(CopyToClipboard, { text: transactionHash },
                                React.createElement("button", { className: classes.button2 },
                                    ' ',
                                    "COPY TRANSACTION ID",
                                    ' '))))))))))));
export default TransactionSendProgressBox;
//# sourceMappingURL=transaction-send-progress-box.js.map