"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var common_style_1 = require("../common/common-style");
var currency_format_1 = require("./currency-format");
var styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: '4px',
    },
    currency: {
        opacity: '0.7',
        fontFamily: common_style_1.default.fontFamily,
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '1px',
        color: '#ffffff',
        marginRight: '6px',
    },
    value: {
        fontFamily: common_style_1.default.fontFamily,
        fontSize: '17px',
        color: '#ffffff'
    }
};
var PriceSummaryComponent = function (_a) {
    var classes = _a.classes, children = _a.children, locale = _a.locale, currency = _a.currency, value = _a.value;
    return (React.createElement("div", { className: "" + classes.row },
        React.createElement("div", { className: "" + classes.currency }, currency),
        React.createElement("div", { className: "" + classes.value },
            React.createElement(currency_format_1.default, { locale: locale, currency: currency, value: value }))));
};
/** Test description */
exports.PriceSummary = react_jss_1.default(styles)(PriceSummaryComponent);
exports.default = exports.PriceSummary;
//# sourceMappingURL=price-summary.js.map