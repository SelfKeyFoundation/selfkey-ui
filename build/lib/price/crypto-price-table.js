import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core';
import { PriceSummary } from './price-summary';
import { VisibilityOnIcon } from '../icons/visibility-on';
import { VisibilityOffIcon } from '../icons/visibility-off';
export const styles = createStyles({
    cryptoPriceTable: {
        fontFamily: 'Lato, arial, sans-serif',
        width: '1140px',
        '& td, & th': {
            fontFamily: 'Lato, arial, sans-serif!important'
        }
    },
    table: {
        borderSpacing: '0px',
        width: '100%',
        '& tbody tr:nth-child(odd)': {
            background: '#262f39',
        },
    },
    headerTableRow: {
        height: '38px',
        '& th': {
            fontSize: '12px',
            fontWeight: 600,
            textAlign: 'left',
            color: '#7f8fa4',
            textTransform: 'uppercase',
            borderBottom: '0px',
            paddingLeft: '0px',
        },
        '& th:first-child': {
            paddingLeft: '24px !important',
        },
    },
    bodyTableRow: {
        '& td': {
            padding: '0px',
            fontSize: '15px',
            textAlign: 'left',
            color: '#ffffff',
            borderBottom: '0px',
        },
        '& td & svg g': {
            fill: '#ffffff',
        },
        '& td:first-child': {
            paddingLeft: '24px !important',
        },
        cursor: 'pointer',
        height: '74px',
    },
    iconSize: {
        width: '19.6px !important',
        height: '23.1px !important',
    },
});
export class CryptoPriceTableComponent extends React.Component {
    renderVisibilityButton(token) {
        const { classes, toggleAction, alwaysVisible = [] } = this.props;
        if (alwaysVisible.includes(token.address || ''))
            return;
        let icon;
        if (token.hidden) {
            icon = React.createElement(VisibilityOffIcon, { className: classes.iconSize });
        }
        else {
            icon = React.createElement(VisibilityOnIcon, { className: classes.iconSize });
        }
        return (React.createElement("div", { onClick: (event) => {
                if (toggleAction) {
                    toggleAction(event, token);
                }
            } }, icon));
    }
    renderRow(token, index) {
        const { locale, fiatCurrency, showCurrency, classes } = this.props;
        const visibilityButton = this.renderVisibilityButton(token);
        return (React.createElement(TableRow, { key: index, className: classes.bodyTableRow },
            React.createElement(TableCell, null, token.name),
            React.createElement(TableCell, null, token.symbol),
            React.createElement(TableCell, { align: "right" },
                React.createElement(PriceSummary, { locale: locale, priceStyle: "decimal", currency: token.symbol, value: token.balance })),
            React.createElement(TableCell, { align: "right" },
                React.createElement(PriceSummary, { locale: locale, priceStyle: "currency", currency: fiatCurrency, value: token.price, showCurrency: showCurrency })),
            React.createElement(TableCell, { align: "right" },
                React.createElement(PriceSummary, { locale: locale, priceStyle: "currency", currency: fiatCurrency, value: token.balanceInFiat })),
            React.createElement(TableCell, null, token.address),
            React.createElement(TableCell, null, visibilityButton)));
    }
    render() {
        const { classes, tokens } = this.props;
        const tokenRows = tokens.map(this.renderRow.bind(this));
        return (React.createElement("div", { className: classes.cryptoPriceTable },
            React.createElement(Table, { className: classes.table },
                React.createElement(TableHead, null,
                    React.createElement(TableRow, { className: classes.headerTableRow },
                        React.createElement(TableCell, null, "NAME"),
                        React.createElement(TableCell, { align: "right" }, "TOKEN SYMBOL"),
                        React.createElement(TableCell, { align: "right" }, "BALANCE"),
                        React.createElement(TableCell, { align: "right" }, "LAST PRICE"),
                        React.createElement(TableCell, { align: "right" }, "TOTAL VALUE"),
                        React.createElement(TableCell, { align: "right" }, "TOKEN CONTRACT ADDRESS"))),
                React.createElement(TableBody, null, tokenRows))));
    }
}
export const CryptoPriceTable = withStyles(styles)(CryptoPriceTableComponent);
export default CryptoPriceTable;
//# sourceMappingURL=crypto-price-table.js.map