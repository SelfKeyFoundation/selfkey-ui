"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoPriceBox = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var price_summary_1 = require("./price-summary");
var styles = core_1.createStyles({
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
exports.CryptoPriceBox = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, locale = _a.locale, cryptoCurrency = _a.cryptoCurrency, cryptoValue = _a.cryptoValue, toCurrency = _a.toCurrency, toValue = _a.toValue;
    return (React.createElement("div", { className: classes.cryptoPriceBox },
        React.createElement(price_summary_1.PriceSummary, { className: classes.test, locale: locale, priceStyle: "decimal", currency: cryptoCurrency, value: cryptoValue, appendCurrency: true }),
        React.createElement(price_summary_1.PriceSummary, { locale: locale, priceStyle: "currency", currency: toCurrency, value: toValue, appendCurrency: true, valueClass: classes.smallText })));
});
exports.default = exports.CryptoPriceBox;
//# sourceMappingURL=crypto-price-box.js.map