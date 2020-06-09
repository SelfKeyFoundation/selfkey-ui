import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
const styles = createStyles({
    cryptoCurrencyName: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '18px',
        color: '#ffffff'
    },
    cryptoCurrencyShort: {
        marginTop: '4px',
        opacity: 0.7,
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        letterSpacing: '1px',
        color: '#ffffff'
    }
});
export const TransferPrice = withStyles(styles)(({ classes, children, cryptoCurrencyShort, cryptoCurrencyName, CryptoCurrencyIconComponent }) => (React.createElement("div", null,
    React.createElement(Grid, { container: true },
        React.createElement(Grid, { item: true, xs: 1 },
            React.createElement(CryptoCurrencyIconComponent, null)),
        React.createElement(Grid, { item: true, xs: 11 },
            React.createElement("div", { className: classes.cryptoCurrencyName }, cryptoCurrencyName),
            React.createElement("div", { className: classes.cryptoCurrencyShort }, cryptoCurrencyShort))),
    React.createElement(Grid, null, children))));
export default TransferPrice;
//# sourceMappingURL=transfer-price.js.map