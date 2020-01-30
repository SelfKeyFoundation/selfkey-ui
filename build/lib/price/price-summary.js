"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var common_style_1 = require("../common/common-style");
var number_format_1 = require("./number-format");
var core_1 = require("@material-ui/core");
var styles = {
    row: {
        marginTop: '4px',
    },
    currency: {
        opacity: 0.7,
        fontFamily: common_style_1.default.fontFamily,
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '1px',
        color: '#ffffff',
    },
    value: {
        fontFamily: common_style_1.default.fontFamily,
        fontSize: '17px',
        color: '#ffffff'
    }
};
exports.PriceSummary = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className, justify = _a.justify, currencyClass = _a.currencyClass, valueClass = _a.valueClass, locale = _a.locale, priceStyle = _a.priceStyle, currency = _a.currency, value = _a.value, appendCurrency = _a.appendCurrency, prependCurrency = _a.prependCurrency, showCurrency = _a.showCurrency;
    return (React.createElement(core_1.Grid, { container: true, className: className ? className : classes.row, justify: justify, alignItems: 'center', spacing: 8 },
        appendCurrency &&
            React.createElement(core_1.Grid, { item: true, className: currencyClass ? currencyClass : classes.currency }, currency),
        React.createElement(core_1.Grid, { item: true, className: valueClass ? valueClass : classes.value },
            React.createElement(number_format_1.NumberFormat, { locale: locale, priceStyle: priceStyle, currency: currency, value: value, showCurrency: showCurrency })),
        prependCurrency &&
            React.createElement(core_1.Grid, { item: true, className: currencyClass ? currencyClass : classes.currency }, currency)));
});
exports.default = exports.PriceSummary;
//# sourceMappingURL=price-summary.js.map