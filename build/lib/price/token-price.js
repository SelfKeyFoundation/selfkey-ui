"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var price_summary_1 = require("./price-summary");
var styles = {
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
};
exports.TokenPrice = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, locale = _a.locale, cryptoCurrency = _a.cryptoCurrency, cryptoValue = _a.cryptoValue, toCurrency = _a.toCurrency, toValue = _a.toValue;
    return (React.createElement("div", null,
        React.createElement(price_summary_1.PriceSummary, { locale: locale, priceStyle: 'decimal', currency: cryptoCurrency, value: cryptoValue, valueClass: classes.cryptoCurrencyValue }),
        React.createElement(price_summary_1.PriceSummary, { locale: locale, priceStyle: 'currency', currency: toCurrency, currencyClass: classes.currency, value: toValue, valueClass: classes.currency, prependCurrency: true })));
});
exports.default = exports.TokenPrice;
//# sourceMappingURL=token-price.js.map