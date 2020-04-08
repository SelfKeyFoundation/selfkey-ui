"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
        fontFamily: 'Lato, arial, sans-serif',
        width: '1140px',
        '& td, & th': {
            fontFamily: 'Lato, arial, sans-serif!important'
        }
    },
    table: {
        borderSpacing: '0px',
        width: '100%',
        '& tbody tr:nth-child(odd)': {
            background: '#262f39',
        },
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
            paddingLeft: '0px',
        },
        '& th:first-child': {
            paddingLeft: '24px !important',
        },
    },
    bodyTableRow: {
        '& td': {
            padding: '0px',
            fontSize: '15px',
            textAlign: 'left',
            color: '#ffffff',
            borderBottom: '0px',
        },
        '& td & svg g': {
            fill: '#ffffff',
        },
        '& td:first-child': {
            paddingLeft: '24px !important',
        },
        cursor: 'pointer',
        height: '74px',
    },
    iconSize: {
        width: '19.6px !important',
        height: '23.1px !important',
    },
};
var CryptoPriceTableComponent = /** @class */ (function (_super) {
    __extends(CryptoPriceTableComponent, _super);
    function CryptoPriceTableComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CryptoPriceTableComponent.prototype.renderVisibilityButton = function (token) {
        var _a = this.props, classes = _a.classes, toggleAction = _a.toggleAction, _b = _a.alwaysVisible, alwaysVisible = _b === void 0 ? [] : _b;
        if (alwaysVisible.includes(token.address || ''))
            return;
        var icon;
        if (token.hidden) {
            icon = React.createElement(visibility_off_1.VisibilityOffIcon, { className: classes.iconSize });
        }
        else {
            icon = React.createElement(visibility_on_1.VisibilityOnIcon, { className: classes.iconSize });
        }
        return (React.createElement("div", { onClick: function (event) {
                if (toggleAction) {
                    toggleAction(event, token);
                }
            } }, icon));
    };
    CryptoPriceTableComponent.prototype.renderRow = function (token, index) {
        var _a = this.props, locale = _a.locale, fiatCurrency = _a.fiatCurrency, showCurrency = _a.showCurrency, classes = _a.classes;
        var visibilityButton = this.renderVisibilityButton(token);
        return (React.createElement(core_1.TableRow, { key: index, className: classes.bodyTableRow },
            React.createElement(core_1.TableCell, null, token.name),
            React.createElement(core_1.TableCell, null, token.symbol),
            React.createElement(core_1.TableCell, { align: "right" },
                React.createElement(price_summary_1.PriceSummary, { className: classes.test, locale: locale, priceStyle: "decimal", currency: token.symbol, value: token.balance })),
            React.createElement(core_1.TableCell, { align: "right" },
                React.createElement(price_summary_1.PriceSummary, { locale: locale, priceStyle: "currency", currency: fiatCurrency, value: token.price, showCurrency: showCurrency })),
            React.createElement(core_1.TableCell, { align: "right" },
                React.createElement(price_summary_1.PriceSummary, { locale: locale, priceStyle: "currency", currency: fiatCurrency, value: token.balanceInFiat })),
            React.createElement(core_1.TableCell, null, token.address),
            React.createElement(core_1.TableCell, null, visibilityButton)));
    };
    CryptoPriceTableComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, tokens = _a.tokens;
        var tokenRows = tokens.map(this.renderRow.bind(this));
        return (React.createElement("div", { className: classes.cryptoPriceTable },
            React.createElement(core_1.Table, { className: classes.table },
                React.createElement(core_1.TableHead, null,
                    React.createElement(core_1.TableRow, { className: classes.headerTableRow },
                        React.createElement(core_1.TableCell, null, "NAME"),
                        React.createElement(core_1.TableCell, { align: "right" }, "TOKEN SYMBOL"),
                        React.createElement(core_1.TableCell, { align: "right" }, "BALANCE"),
                        React.createElement(core_1.TableCell, { align: "right" }, "LAST PRICE"),
                        React.createElement(core_1.TableCell, { align: "right" }, "TOTAL VALUE"),
                        React.createElement(core_1.TableCell, { align: "right" }, "TOKEN CONTRACT ADDRESS"))),
                React.createElement(core_1.TableBody, null, tokenRows))));
    };
    return CryptoPriceTableComponent;
}(React.Component));
exports.CryptoPriceTableComponent = CryptoPriceTableComponent;
exports.CryptoPriceTable = react_jss_1.default(exports.styles)(CryptoPriceTableComponent);
exports.default = exports.CryptoPriceTable;
//# sourceMappingURL=crypto-price-table.js.map