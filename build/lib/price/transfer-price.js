"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferPrice = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    cryptoCurrencyName: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '18px',
        color: '#ffffff'
    },
    cryptoCurrencyShort: {
        marginTop: '4px',
        opacity: 0.7,
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        letterSpacing: '1px',
        color: '#ffffff'
    }
});
exports.TransferPrice = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrencyShort = _a.cryptoCurrencyShort, cryptoCurrencyName = _a.cryptoCurrencyName, CryptoCurrencyIconComponent = _a.CryptoCurrencyIconComponent;
    return (React.createElement("div", null,
        React.createElement(core_2.Grid, { container: true },
            React.createElement(core_2.Grid, { item: true, xs: 1 },
                React.createElement(CryptoCurrencyIconComponent, null)),
            React.createElement(core_2.Grid, { item: true, xs: 11 },
                React.createElement("div", { className: classes.cryptoCurrencyName }, cryptoCurrencyName),
                React.createElement("div", { className: classes.cryptoCurrencyShort }, cryptoCurrencyShort))),
        React.createElement(core_2.Grid, null, children)));
});
exports.default = exports.TransferPrice;
//# sourceMappingURL=transfer-price.js.map