import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { PriceSummary } from './price-summary';
var styles = createStyles({
    cryptoCurrencyValue: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '40px',
        fontWeight: 300,
        color: '#ffffff'
    },
    currency: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        color: '#93b0c1'
    }
});
export var TokenPrice = withStyles(styles)(function (_a) {
    var classes = _a.classes, locale = _a.locale, cryptoCurrency = _a.cryptoCurrency, cryptoValue = _a.cryptoValue, toCurrency = _a.toCurrency, toValue = _a.toValue;
    return (React.createElement("div", null,
        React.createElement(PriceSummary, { locale: locale, priceStyle: 'decimal', currency: cryptoCurrency, value: cryptoValue, valueClass: classes.cryptoCurrencyValue }),
        React.createElement(PriceSummary, { locale: locale, priceStyle: 'currency', currency: toCurrency, currencyClass: classes.currency, value: toValue, valueClass: classes.currency, prependCurrency: true })));
});
export default TokenPrice;
//# sourceMappingURL=token-price.js.map