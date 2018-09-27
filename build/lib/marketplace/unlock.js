"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var paragraph_1 = require("../typography/paragraph");
var exchange_large_1 = require("../icons/exchange-large");
var transaction_fee_selector_1 = require("../transaction/transaction-fee-selector");
var styles = {
    text: {
        fontSize: '18px',
        lineHeight: '30px',
    },
};
exports.Unlock = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, _b = _a.amount, amount = _b === void 0 ? 25 : _b, _c = _a.token, token = _c === void 0 ? 'KEY' : _c, _d = _a.days, days = _d === void 0 ? 30 : _d, minGasPrice = _a.minGasPrice, maxGasPrice = _a.maxGasPrice, gasLimit = _a.gasLimit, fiat = _a.fiat, fiatRate = _a.fiatRate, onTransactionFeeChange = _a.onTransactionFeeChange;
    return (React.createElement(core_1.Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "flex-start" },
        React.createElement(core_1.Grid, { item: true, xs: 2 },
            React.createElement(exchange_large_1.default, null)),
        React.createElement(core_1.Grid, { item: true, xs: 10 },
            React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(paragraph_1.P, { className: classes.text },
                        "A refundable deposit of ",
                        amount,
                        " ",
                        token,
                        " tokens is required to unlock this marketplace for",
                        ' ',
                        days,
                        " days.")),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(transaction_fee_selector_1.TransactionFeeSelector, { minGasPrice: minGasPrice, maxGasPrice: maxGasPrice, gasLimit: gasLimit, fiat: fiat, fiatRate: fiatRate, onChange: onTransactionFeeChange }))))));
});
exports.default = exports.Unlock;
//# sourceMappingURL=unlock.js.map