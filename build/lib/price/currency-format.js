"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.CurrencyFormat = function (_a) {
    var locale = _a.locale, currency = _a.currency, value = _a.value;
    return (React.createElement("div", null, (locale) ? new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumFractionDigits: 10
    }).format(Number(value)) : value));
};
//# sourceMappingURL=currency-format.js.map