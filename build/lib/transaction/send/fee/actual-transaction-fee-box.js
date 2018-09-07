"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var common_style_1 = require("../../../common/common-style");
var styles = {
    container: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: common_style_1.default.fontFamily,
    }
};
exports.ActualTransactionFeeBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, ethValue = _a.ethValue, usdValue = _a.usdValue;
    return (React.createElement("div", { className: classes.container },
        React.createElement("span", null,
            ethValue,
            " ETH"),
        React.createElement("span", null, " / "),
        React.createElement("span", null,
            "$",
            usdValue,
            " USD")));
});
exports.default = exports.ActualTransactionFeeBox;
//# sourceMappingURL=actual-transaction-fee-box.js.map