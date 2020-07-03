import * as React from 'react';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import CommonStyle from '../common/common-style';
import { NumberFormat } from './number-format';
var styles = createStyles({
    row: {
        marginTop: '4px',
    },
    currency: {
        opacity: 0.7,
        fontFamily: CommonStyle.fontFamily,
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '1px',
        color: '#ffffff',
        minWidth: '40px'
    },
    value: {
        fontFamily: CommonStyle.fontFamily,
        fontSize: '17px',
        color: '#ffffff'
    }
});
export var PriceSummary = withStyles(styles)(function (_a) {
    var classes = _a.classes, className = _a.className, justify = _a.justify, currencyClass = _a.currencyClass, valueClass = _a.valueClass, locale = _a.locale, fractionDigits = _a.fractionDigits, priceStyle = _a.priceStyle, currency = _a.currency, value = _a.value, appendCurrency = _a.appendCurrency, prependCurrency = _a.prependCurrency;
    return (React.createElement(Grid, { container: true, className: className ? className : classes.row, justify: justify, alignItems: 'center', spacing: 1 },
        appendCurrency &&
            React.createElement(Grid, { item: true, className: currencyClass ? currencyClass : classes.currency }, currency),
        React.createElement(Grid, { item: true, className: valueClass ? valueClass : classes.value },
            React.createElement(NumberFormat, { locale: locale, priceStyle: priceStyle, currency: currency, value: value, fractionDigits: fractionDigits })),
        prependCurrency &&
            React.createElement(Grid, { item: true, className: currencyClass ? currencyClass : classes.currency }, currency)));
});
export default PriceSummary;
//# sourceMappingURL=price-summary.js.map