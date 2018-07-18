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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var react_google_charts_1 = require("react-google-charts");
var price_summary_1 = require("./price-summary");
var number_format_1 = require("./number-format");
var gear_1 = require("../icons/gear");
var styles = {
    cryptoBox: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        color: '#ffffff',
        fontFamily: 'ProximaNovaRegular'
    },
    horizontalDivider: {
        height: '1px',
        backgroundColor: '#303c49'
    },
    coloredBox: {
        width: '44px !important',
        height: '44px !important',
        borderRadius: '8px !important',
        position: 'relative',
    },
    coloredBoxText: {
        position: 'absolute',
        textAlign: 'center',
        cursor: 'default',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    prices: {
        paddingTop: '0px',
    },
    texts: {
        fontSize: '18px',
    },
    active: {
        borderRadius: '4px',
        boxShadow: '0px 0px 5px 1px #0dc7dd',
        outlineWidth: 0,
        border: 'none'
    },
    totalPrice: {
        fontSize: '30px',
        fontWeight: 300,
        textAlign: 'center',
        color: '#ffffff'
    },
    totalPriceText: {
        fontSize: '14px',
        marginTop: '5px',
        textAlign: 'center',
        color: '#93b0c1'
    },
    chartCenterContainer: {
        position: 'absolute',
        textAlign: 'center',
        cursor: 'default',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    chart: {
        position: 'relative'
    },
    gearButton: {
        cursor: 'pointer',
        display: 'flex',
        background: 'none',
        border: 'none',
        outline: 'none'
    },
    buttonViewMore: {
        outline: 'none',
        fontSize: '12px',
        color: '#93b0c1',
        cursor: 'pointer',
        textTransform: 'uppercase'
    },
    buttonViewMoreText: {
        borderBottom: '1px dashed #93b0c1'
    },
    expandMore: {
        verticalAlign: 'middle !important'
    }
};
var CryptoChartBoxComponent = /** @class */ (function (_super) {
    __extends(CryptoChartBoxComponent, _super);
    function CryptoChartBoxComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.TOP_TOKEN_LIST_SIZE = 5;
        _this.activations = [];
        _this.topTokens = [];
        _this.state = {
            activations: _this.activations,
            displayedTokens: _this.topTokens,
        };
        _this.selection = [];
        _this.selectEvent = {
            eventName: 'select',
            callback: function (Chart, chartItem) {
                _this.initSelection();
                var selection = Chart.chart.getSelection();
                if (!selection || !selection[0]) {
                    return;
                }
                var row = selection[0].row;
                var newTokens = _this.state.activations.map(function (activation, index) {
                    if (index !== row) {
                        return { active: false };
                    }
                    else {
                        _this.selection = selection;
                        _this.chart = Chart.chart;
                        return { active: true };
                    }
                });
                _this.setState({ activations: newTokens });
            },
        };
        _this.onMouseOverEvent = {
            eventName: 'onmouseover',
            callback: function (Chart, chartItem) {
                var selection = Chart.chart.getSelection();
                var newTokens = _this.state.activations.slice(0);
                if (newTokens[chartItem.row] && newTokens[chartItem.row].active) {
                    return;
                }
                if (selection && selection.length && selection[0].row === chartItem.row) {
                    newTokens[chartItem.row] = { active: false };
                    _this.setState({ activations: newTokens });
                    setTimeout(function () {
                        newTokens[chartItem.row] = { active: true };
                        _this.setState({ activations: newTokens });
                    }, 100);
                    return;
                }
                newTokens[chartItem.row] = { active: true };
                _this.setState({ activations: newTokens });
            },
        };
        _this.onMouseOutEvent = {
            eventName: 'onmouseout',
            callback: function (Chart, chartItem) {
                var selection = Chart.chart.getSelection();
                if (selection && selection.length && selection[0].row === chartItem.row) {
                    return;
                }
                var newTokens = _this.state.activations.slice(0);
                newTokens[chartItem.row] = { active: false };
                _this.setState({ activations: newTokens });
            },
        };
        _this.chartEvents = [
            _this.selectEvent,
            _this.onMouseOutEvent,
            _this.onMouseOverEvent
        ];
        _this.initState(props);
        _this.initSelection();
        return _this;
    }
    CryptoChartBoxComponent.prototype.initState = function (props) {
        var _this = this;
        props.tokens.forEach(function (token, index) {
            _this.state.activations[index] = { active: false };
        });
        this.state.displayedTokens = props.tokens.slice(0, this.TOP_TOKEN_LIST_SIZE);
        var otherTokens = props.tokens.slice(this.TOP_TOKEN_LIST_SIZE, props.tokens.length);
        this.state.displayedTokens.push(this.getOthersToken(otherTokens));
    };
    CryptoChartBoxComponent.prototype.getOthersToken = function (otherTokens) {
        return {
            name: 'Others',
            symbol: 'OTHERS',
            balance: this.getOthersTokenBalance(otherTokens, 'balance'),
            balanceInFiat: this.getOthersTokenBalance(otherTokens, 'balanceInFiat')
        };
    };
    CryptoChartBoxComponent.prototype.getOthersTokenBalance = function (otherTokens, balanceType) {
        return otherTokens.reduce(function (a, b) {
            return a + b[balanceType];
        }, 0);
    };
    CryptoChartBoxComponent.prototype.initSelection = function () {
        this.selection = [];
        this.chart = { setSelection: function () { return; } };
    };
    CryptoChartBoxComponent.prototype.componentDidUpdate = function () {
        this.chart.setSelection(this.selection);
    };
    CryptoChartBoxComponent.prototype.getTokensLegend = function (classes, tokens, locale, fiatCurrency) {
        var _this = this;
        return tokens.map(function (token, index) {
            return (React.createElement(core_1.Grid, { item: true, xs: 6, key: index, className: _this.state.activations[index] && _this.state.activations[index].active ? classes.active : '' },
                React.createElement(core_1.Grid, { container: true, alignItems: 'flex-start' },
                    React.createElement(core_1.Grid, { item: true, xs: 2 },
                        React.createElement("div", { className: classes.coloredBox, style: { backgroundColor: _this.getColors()[index] } },
                            React.createElement("div", { className: classes.coloredBoxText }, token.name.charAt(0)))),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement(core_1.Grid, { container: true, alignItems: 'flex-start', className: classes.texts },
                            React.createElement(core_1.Grid, { item: true, xs: 12 }, token.name),
                            React.createElement(core_1.Grid, { item: true, xs: 12 }, token.symbol))),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement(core_1.Grid, { container: true, alignItems: 'flex-start' },
                            React.createElement(core_1.Grid, { item: true, xs: 12 },
                                React.createElement(price_summary_1.PriceSummary, { locale: locale, style: 'decimal', currency: token.symbol, className: classes.prices, valueClass: classes.texts, value: token.balance, justify: 'flex-end' })),
                            React.createElement(core_1.Grid, { item: true, xs: 12 },
                                React.createElement(price_summary_1.PriceSummary, { locale: locale, style: 'currency', currency: fiatCurrency, className: classes.prices, valueClass: classes.texts, value: token.balanceInFiat, justify: 'flex-end' })))))));
        });
    };
    ;
    CryptoChartBoxComponent.prototype.viewAllTokens = function (tokens) {
        this.setState(__assign({}, this.state, { displayedTokens: tokens }));
    };
    CryptoChartBoxComponent.prototype.getChartData = function (tokens) {
        var data = [['Content', 'percents']];
        var dataPoints = tokens.map(function (token) {
            return [token.name, token.balanceInFiat];
        });
        return data.concat(dataPoints);
    };
    CryptoChartBoxComponent.prototype.getColors = function () {
        return ['#46dfba', '#46b7df', '#238db4', '#1d7999', '#0e4b61'];
    };
    CryptoChartBoxComponent.prototype.getTotalBalanceInFiat = function (tokens) {
        return tokens.reduce(function (a, b) {
            return a + b['balanceInFiat'];
        }, 0);
    };
    CryptoChartBoxComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, locale = _a.locale, fiatCurrency = _a.fiatCurrency, tokens = _a.tokens, manageCryptoAction = _a.manageCryptoAction;
        return (React.createElement("div", { className: classes.cryptoBox },
            React.createElement(core_1.Grid, { container: true, alignItems: 'center', spacing: 16 },
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Grid, { container: true, justify: 'space-between', alignItems: 'center' },
                        React.createElement(core_1.Grid, { item: true, xs: 11 }, "My Crypto"),
                        React.createElement(core_1.Grid, { item: true, xs: 1, justify: 'flex-end' },
                            React.createElement("button", { className: classes.gearButton, onClick: manageCryptoAction },
                                React.createElement(gear_1.GearIcon, null))))),
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement("div", { className: classes.horizontalDivider })),
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Grid, { container: true, alignItems: 'flex-start', spacing: 0 },
                        React.createElement(core_1.Grid, { item: true, xs: 4, className: classes.chart },
                            React.createElement(react_google_charts_1.Chart, { chartType: "PieChart", data: this.getChartData(this.state.displayedTokens), options: {
                                    backgroundColor: 'transparent',
                                    title: '',
                                    chartArea: { left: 15, top: 15, bottom: 15, right: 15 },
                                    pieHole: 0.7,
                                    pieSliceBorderColor: 'none',
                                    colors: this.getColors(),
                                    legend: {
                                        position: 'none'
                                    },
                                    pieSliceText: 'none',
                                    tooltip: {
                                        trigger: 'focus',
                                        isHtml: true
                                    },
                                    animation: {
                                        startup: true
                                    }
                                }, graph_id: "PieChart", width: "100%", height: "300px", legend_toggle: true, chartEvents: this.chartEvents }),
                            React.createElement("div", { className: classes.chartCenterContainer },
                                React.createElement("div", { className: classes.totalPrice },
                                    React.createElement(number_format_1.NumberFormat, { locale: locale, currency: fiatCurrency, style: 'currency', value: this.getTotalBalanceInFiat(tokens) })),
                                React.createElement("div", { className: classes.totalPriceText },
                                    "Total Value ",
                                    fiatCurrency))),
                        React.createElement(core_1.Grid, { item: true, xs: 8 },
                            React.createElement(core_1.Grid, { container: true, spacing: 16 }, this.getTokensLegend(classes, this.state.displayedTokens, locale, fiatCurrency))))),
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Grid, { container: true, justify: 'center' },
                        React.createElement(core_1.Grid, { item: true, className: classes.buttonViewMore, onClick: function () { return _this.viewAllTokens(tokens); } },
                            React.createElement(icons_1.ExpandMore, { className: classes.expandMore }),
                            React.createElement("span", { className: classes.buttonViewMoreText }, "VIEW ALL TOKENS")))))));
    };
    return CryptoChartBoxComponent;
}(React.Component));
exports.CryptoChartBoxComponent = CryptoChartBoxComponent;
exports.CryptoChartBox = react_jss_1.default(styles)(CryptoChartBoxComponent);
exports.default = exports.CryptoChartBox;
//# sourceMappingURL=crypto-chart-box.js.map