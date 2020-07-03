import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { PriceSummary } from './price-summary';
var styles = createStyles({
    cryptoPriceBox: {
        height: 'calc(100% - 36px)',
        padding: '18px 0 18px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginRight: '10px',
        marginLeft: '40px',
    },
    smallText: {
        color: '#fff',
        fontSize: '12px',
        marginTop: '3px !important'
    },
    test: {
        color: 'red'
    }
});
export var CryptoPriceBox = withStyles(styles)(function (_a) {
    var classes = _a.classes, locale = _a.locale, cryptoCurrency = _a.cryptoCurrency, cryptoValue = _a.cryptoValue, toCurrency = _a.toCurrency, toValue = _a.toValue;
    return (React.createElement("div", { className: classes.cryptoPriceBox },
        React.createElement(PriceSummary, { className: classes.test, locale: locale, priceStyle: "decimal", currency: cryptoCurrency, value: cryptoValue, appendCurrency: true }),
        React.createElement(PriceSummary, { locale: locale, priceStyle: "currency", currency: toCurrency, value: toValue, appendCurrency: true, valueClass: classes.smallText })));
});
export default CryptoPriceBox;
//# sourceMappingURL=crypto-price-box.js.map