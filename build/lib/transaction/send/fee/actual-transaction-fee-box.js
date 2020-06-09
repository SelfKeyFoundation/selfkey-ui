"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualTransactionFeeBox = exports.styles = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var common_style_1 = require("../../../common/common-style");
var number_format_1 = require("../../../price/number-format");
var core_2 = require("@material-ui/core");
exports.styles = core_1.createStyles({
    root: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: common_style_1.default.fontFamily,
    }
});
exports.ActualTransactionFeeBox = core_1.withStyles(exports.styles)(function (_a) {
    var classes = _a.classes, locale = _a.locale, ethFee = _a.ethFee, usdFee = _a.usdFee, fiatCurrency = _a.fiatCurrency;
    return (React.createElement(core_2.Grid, { container: true, className: classes.root, direction: 'row', spacing: 1 },
        React.createElement(core_2.Grid, { item: true },
            React.createElement(core_2.Grid, { container: true, spacing: 1 },
                React.createElement(core_2.Grid, { item: true },
                    React.createElement(number_format_1.NumberFormat, { locale: locale, priceStyle: 'decimal', currency: 'ETH', value: ethFee, fractionDigits: 15 })),
                React.createElement(core_2.Grid, { item: true }, "ETH"),
                React.createElement(core_2.Grid, { item: true }, "/"))),
        React.createElement(core_2.Grid, { item: true },
            React.createElement(core_2.Grid, { container: true, spacing: 1 },
                React.createElement(core_2.Grid, { item: true },
                    React.createElement(number_format_1.NumberFormat, { locale: locale, priceStyle: 'currency', currency: fiatCurrency, value: usdFee, fractionDigits: 15 })),
                React.createElement(core_2.Grid, { item: true }, fiatCurrency)))));
});
exports.default = exports.ActualTransactionFeeBox;
//# sourceMappingURL=actual-transaction-fee-box.js.map