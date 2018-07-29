"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    cryptoCurrencyName: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: '18px',
        color: '#ffffff'
    },
    cryptoCurrencyShort: {
        marginTop: '4px',
        opacity: 0.7,
        fontFamily: 'ProximaNovaRegular',
        fontSize: '14px',
        letterSpacing: '1px',
        color: '#ffffff'
    }
};
exports.TransferPrice = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrencyShort = _a.cryptoCurrencyShort, cryptoCurrencyName = _a.cryptoCurrencyName, CryptoCurrencyIconComponent = _a.CryptoCurrencyIconComponent;
    return (React.createElement("div", null,
        React.createElement(core_1.Grid, { container: true },
            React.createElement(core_1.Grid, { item: true, xs: 6 },
                React.createElement(CryptoCurrencyIconComponent, null)),
            React.createElement(core_1.Grid, { item: true, xs: 6 },
                React.createElement("div", { className: classes.cryptoCurrencyName }, cryptoCurrencyName),
                React.createElement("div", { className: classes.cryptoCurrencyShort }, cryptoCurrencyShort))),
        React.createElement(core_1.Grid, null, children)));
});
exports.default = exports.TransferPrice;
//# sourceMappingURL=transfer-price.js.map