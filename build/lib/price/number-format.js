"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberFormat = void 0;
var React = require("react");
var formatters = {};
var NumberFormat = function (_a) {
    var locale = _a.locale, priceStyle = _a.priceStyle, currency = _a.currency, value = _a.value, fractionDigits = _a.fractionDigits, showCurrency = _a.showCurrency;
    fractionDigits = fractionDigits ? fractionDigits : Number(value) >= 1 ? 2 : 10;
    var formatString = locale + ":" + priceStyle + ":" + currency + ":" + (fractionDigits || 'default');
    if (locale && !formatters[formatString]) {
        var options = {
            style: priceStyle,
            maximumFractionDigits: fractionDigits
        };
        if (priceStyle === 'currency') {
            options.currency = currency;
        }
        formatters[formatString] = new Intl.NumberFormat(locale, options);
    }
    return (React.createElement("div", null,
        formatters[formatString].format(Number(value)),
        " ",
        showCurrency && currency));
};
exports.NumberFormat = NumberFormat;
//# sourceMappingURL=number-format.js.map