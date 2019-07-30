"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var price_summary_1 = require("./price-summary");
var styles = {
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
    test: {
        color: 'red'
    }
};
exports.CryptoPriceBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, locale = _a.locale, cryptoCurrency = _a.cryptoCurrency, cryptoValue = _a.cryptoValue, toCurrency = _a.toCurrency, toValue = _a.toValue;
    return (React.createElement("div", { className: classes.cryptoPriceBox },
        React.createElement(price_summary_1.PriceSummary, { className: classes.test, locale: locale, priceStyle: "decimal", currency: cryptoCurrency, value: cryptoValue, appendCurrency: true }),
        React.createElement(price_summary_1.PriceSummary, { locale: locale, priceStyle: "currency", currency: toCurrency, value: toValue, appendCurrency: true })));
});
exports.default = exports.CryptoPriceBox;
//# sourceMappingURL=crypto-price-box.js.map