"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
// @ts-ignore
var react_jss_1 = require("react-jss");
var price_summary_1 = require("./price-summary");
var visibility_on_1 = require("../icons/visibility-on");
var visibility_off_1 = require("../icons/visibility-off");
exports.styles = {
    cryptoPriceTable: {
        fontFamily: 'ProximaNovaRegular',
        width: '1140px'
    },
    table: {
        borderSpacing: '0px',
        width: '100%',
        '& tbody tr:nth-child(odd)': {
            background: '#262f39'
        }
    },
    headerTableRow: {
        height: '38px',
        '& th': {
            fontSize: '12px',
            fontWeight: 600,
            textAlign: 'left',
            color: '#7f8fa4',
            textTransform: 'uppercase',
            borderBottom: '0px',
            paddingLeft: '0px'
        },
        '& th:first-child': {
            paddingLeft: '24px !important'
        }
    },
    bodyTableRow: {
        height: '74px',
        cursor: 'pointer',
        '& td': {
            padding: '0px',
            fontSize: '15px',
            textAlign: 'left',
            color: '#ffffff',
            borderBottom: '0px'
        },
        '& td:first-child': {
            paddingLeft: '24px !important'
        }
    },
    iconSize: {
        width: '19.6px !important',
        height: '23.1px !important'
    }
};
var CryptoPriceTableComponent = /** @class */ (function (_super) {
    __extends(CryptoPriceTableComponent, _super);
    function CryptoPriceTableComponent(props) {
        return _super.call(this, props) || this;
    }
    CryptoPriceTableComponent.prototype.showCustomTokenHideToggle = function (isCustomToken, isHidden, toggleAction, classes) {
        if (!isCustomToken) {
            return;
        }
        var icon;
        if (isHidden) {
            icon = React.createElement(visibility_off_1.VisibilityOffIcon, { className: classes.iconSize });
        }
        else {
            icon = React.createElement(visibility_on_1.VisibilityOnIcon, { className: classes.iconSize });
        }
        return (React.createElement("div", { onClick: toggleAction }, icon));
    };
    CryptoPriceTableComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, locale = _a.locale, fiatCurrency = _a.fiatCurrency, tokens = _a.tokens, toggleAction = _a.toggleAction;
        return (React.createElement("div", { className: classes.cryptoPriceTable },
            React.createElement(core_1.Table, { className: classes.table },
                React.createElement(core_1.TableHead, null,
                    React.createElement(core_1.TableRow, { className: classes.headerTableRow },
                        React.createElement(core_1.TableCell, null, "NAME"),
                        React.createElement(core_1.TableCell, { numeric: true }, "TOKEN SYMBOL"),
                        React.createElement(core_1.TableCell, { numeric: true }, "BALANCE"),
                        React.createElement(core_1.TableCell, { numeric: true }, "LAST PRICE"),
                        React.createElement(core_1.TableCell, { numeric: true }, "TOTAL VALUE"),
                        React.createElement(core_1.TableCell, { numeric: true }, "TOKEN CONTRACT ADDRESS"))),
                React.createElement(core_1.TableBody, null, tokens.map(function (token, index) {
                    return (React.createElement(core_1.TableRow, { key: index, className: classes.bodyTableRow },
                        React.createElement(core_1.TableCell, null, token.name),
                        React.createElement(core_1.TableCell, null, token.symbol),
                        React.createElement(core_1.TableCell, { numeric: true },
                            React.createElement(price_summary_1.PriceSummary, { className: classes.test, locale: locale, style: "decimal", currency: token.symbol, value: token.balance })),
                        React.createElement(core_1.TableCell, { numeric: true },
                            React.createElement(price_summary_1.PriceSummary, { locale: locale, style: "currency", currency: fiatCurrency, value: token.price })),
                        React.createElement(core_1.TableCell, { numeric: true },
                            React.createElement(price_summary_1.PriceSummary, { locale: locale, style: "currency", currency: fiatCurrency, value: token.balanceInFiat })),
                        React.createElement(core_1.TableCell, null, token.address),
                        React.createElement(core_1.TableCell, null, _this.showCustomTokenHideToggle(token.isCustom, token.hidden, toggleAction, classes))));
                })))));
    };
    return CryptoPriceTableComponent;
}(React.Component));
exports.CryptoPriceTableComponent = CryptoPriceTableComponent;
exports.CryptoPriceTable = react_jss_1.default(exports.styles)(CryptoPriceTableComponent);
exports.default = exports.CryptoPriceTable;
//# sourceMappingURL=crypto-price-table.js.map