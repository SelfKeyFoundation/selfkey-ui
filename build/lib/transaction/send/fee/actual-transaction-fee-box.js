"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var common_style_1 = require("../../../common/common-style");
var number_format_1 = require("../../../price/number-format");
var core_1 = require("@material-ui/core");
exports.styles = {
    root: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: common_style_1.default.fontFamily,
    }
};
exports.ActualTransactionFeeBox = react_jss_1.default(exports.styles)(function (_a) {
    var classes = _a.classes, locale = _a.locale, ethFee = _a.ethFee, usdFee = _a.usdFee, fiatCurrency = _a.fiatCurrency;
    return (React.createElement(core_1.Grid, { container: true, className: classes.root, direction: 'row', spacing: 8 },
        React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, spacing: 8 },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(number_format_1.NumberFormat, { locale: locale, style: 'decimal', currency: 'ETH', value: ethFee })),
                React.createElement(core_1.Grid, { item: true }, "ETH"),
                React.createElement(core_1.Grid, { item: true }, "/"))),
        React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, spacing: 8 },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(number_format_1.NumberFormat, { locale: locale, style: 'currency', currency: fiatCurrency, value: usdFee })),
                React.createElement(core_1.Grid, { item: true }, fiatCurrency)))));
});
exports.default = exports.ActualTransactionFeeBox;
//# sourceMappingURL=actual-transaction-fee-box.js.map