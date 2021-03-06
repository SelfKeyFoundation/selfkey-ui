"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSummary = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var common_style_1 = require("../common/common-style");
var number_format_1 = require("./number-format");
var styles = core_1.createStyles({
    row: {
        marginTop: '4px'
    },
    currency: {
        opacity: 0.7,
        fontFamily: common_style_1.default.fontFamily,
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '1px',
        color: '#ffffff',
        minWidth: '40px'
    },
    value: {
        fontFamily: common_style_1.default.fontFamily,
        fontSize: '17px',
        color: '#ffffff'
    }
});
exports.PriceSummary = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, className = _a.className, justify = _a.justify, currencyClass = _a.currencyClass, valueClass = _a.valueClass, locale = _a.locale, fractionDigits = _a.fractionDigits, priceStyle = _a.priceStyle, currency = _a.currency, value = _a.value, appendCurrency = _a.appendCurrency, prependCurrency = _a.prependCurrency;
    return (React.createElement(core_1.Grid, { container: true, className: className ? className : classes.row, justify: justify, alignItems: "center", spacing: 1 },
        appendCurrency && (React.createElement(core_1.Grid, { item: true, className: currencyClass ? currencyClass : classes.currency }, currency)),
        React.createElement(core_1.Grid, { item: true, className: valueClass ? valueClass : classes.value },
            React.createElement(number_format_1.NumberFormat, { locale: locale, priceStyle: priceStyle, currency: currency, value: value, fractionDigits: fractionDigits })),
        prependCurrency && (React.createElement(core_1.Grid, { item: true, className: currencyClass ? currencyClass : classes.currency }, currency))));
});
exports.default = exports.PriceSummary;
//# sourceMappingURL=price-summary.js.map