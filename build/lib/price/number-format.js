"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var formatters = {};
exports.NumberFormat = function (_a) {
    var locale = _a.locale, style = _a.style, currency = _a.currency, value = _a.value, fractionDigits = _a.fractionDigits;
    var formatString = locale + ":" + style + ":" + currency + ":" + (fractionDigits || "default");
    if (locale && !formatters[formatString]) {
        formatters[formatString] = new Intl.NumberFormat(locale, {
            style: style || "decimal",
            currency: currency,
            maximumFractionDigits: fractionDigits || (Number(value) >= 1) ? 2 : 10
        });
    }
    return (React.createElement("div", null, formatters[formatString].format(Number(value))));
};
//# sourceMappingURL=number-format.js.map