"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var formatters = {};
exports.CurrencyFormat = function (_a) {
    var locale = _a.locale, currency = _a.currency, value = _a.value, fractionDigits = _a.fractionDigits;
    var formatString = locale + ":" + currency + ":" + (fractionDigits || "default");
    if (locale && !formatters[formatString]) {
        formatters[formatString] = new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
            maximumFractionDigits: fractionDigits || 10
        });
    }
    return (React.createElement("div", null, locale ? formatters[formatString].format(Number(value)) : value));
};
//# sourceMappingURL=currency-format.js.map