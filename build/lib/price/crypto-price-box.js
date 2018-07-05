"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
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
    }
};
var CryptoPriceBoxComponent = function (_a) {
    var classes = _a.classes, children = _a.children, locale = _a.locale, cryptoCurrency = _a.cryptoCurrency, cryptoValue = _a.cryptoValue, toCurrency = _a.toCurrency, toValue = _a.toValue;
    return (React.createElement("div", { className: classes.cryptoPriceBox },
        React.createElement(price_summary_1.PriceSummary, { locale: '', currency: cryptoCurrency, value: cryptoValue }),
        React.createElement(price_summary_1.PriceSummary, { locale: locale, currency: toCurrency, value: toValue })));
};
/** Test description */
exports.CryptoPriceBox = react_jss_1.default(styles)(CryptoPriceBoxComponent);
exports.default = exports.CryptoPriceBox;
//# sourceMappingURL=crypto-price-box.js.map