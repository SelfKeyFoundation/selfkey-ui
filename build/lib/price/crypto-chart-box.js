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
        fontFamily: 'ProximaNovaRegular',
        padding: '20px',
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
        outline: 'none',
        float: 'right'
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
    },
    header: {
        margin: '10px'
    },
    headerText: {
        fontSize: '20px',
        lineHeight: 1.8,
        opacity: 0.83
    }
};
var CryptoChartBoxComponent = /** @class */ (function (_super) {
    __extends(CryptoChartBoxComponent, _super);
    function CryptoChartBoxComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.OTHERS_COLOR = '#71a6b8';
        _this.activations = [];
        _this.state = {
            activations: _this.activations
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
        _this.initActivations(props.tokens);
        _this.initSelection();
        return _this;
    }
    CryptoChartBoxComponent.prototype.initActivations = function (tokens) {
        var _this = this;
        if (!tokens) {
            return;
        }
        tokens.forEach(function (token, index) {
            _this.state.activations[index] = { active: false };
        });
    };
    CryptoChartBoxComponent.prototype.initSelection = function () {
        this.selection = [];
        this.chart = { setSelection: function () { return; } };
    };
    CryptoChartBoxComponent.prototype.componentDidUpdate = function () {
        this.chart.setSelection(this.selection);
        this.initActivations(this.props.tokens);
    };
    CryptoChartBoxComponent.prototype.getTokensLegend = function (classes, tokens, locale, fiatCurrency) {
        var _this = this;
        return tokens.map(function (token, index) {
            return (React.createElement(core_1.Grid, { item: true, xs: 6, key: index, className: _this.state.activations[index] && _this.state.activations[index].active ? classes.active : '', onMouseEnter: function () { return _this.onItemHoverEnter(index); }, onMouseLeave: function () { return _this.onItemHoverLeave(index); } },
                React.createElement(core_1.Grid, { container: true, alignItems: 'flex-start' },
                    React.createElement(core_1.Grid, { item: true, xs: 2 },
                        React.createElement("div", { className: classes.coloredBox, style: { backgroundColor: (index <= 4) ? _this.getColors()[index] : _this.OTHERS_COLOR } },
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
    CryptoChartBoxComponent.prototype.onItemHoverEnter = function (index) {
        var chart = this.refs.pieChart.wrapper.getChart();
        chart.setSelection([{ row: index }]);
    };
    CryptoChartBoxComponent.prototype.onItemHoverLeave = function (index) {
        var chart = this.refs.pieChart.wrapper.getChart();
        chart.setSelection([]);
    };
    CryptoChartBoxComponent.prototype.getViewAllSection = function (classes, tokens, topTokenListSize, visibilityFilter, dispatch, toggleVisibilityFilterAction) {
        var viewAll = visibilityFilter === 'SHOW_TOP_ONES';
        return (tokens.length > topTokenListSize) ? (React.createElement(core_1.Grid, { item: true, xs: 12 },
            React.createElement(core_1.Grid, { container: true, justify: 'center' },
                React.createElement(core_1.Grid, { item: true, className: classes.buttonViewMore, onClick: function () { return dispatch(toggleVisibilityFilterAction(viewAll)); } },
                    viewAll ? (React.createElement(icons_1.ExpandMore, { className: classes.expandMore })) : (React.createElement(icons_1.ExpandLess, { className: classes.expandMore })),
                    React.createElement("span", { className: classes.buttonViewMoreText }, viewAll ? 'View All' : 'Collapse'))))) : '';
    };
    CryptoChartBoxComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, locale = _a.locale, fiatCurrency = _a.fiatCurrency, tokens = _a.tokens, manageCryptoAction = _a.manageCryptoAction, topTokenListSize = _a.topTokenListSize, visibilityFilter = _a.visibilityFilter, dispatch = _a.dispatch, toggleVisibilityFilterAction = _a.toggleVisibilityFilterAction;
        return (React.createElement("div", { className: classes.cryptoBox },
            React.createElement(core_1.Grid, { container: true, alignItems: 'center', spacing: 16 },
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Grid, { container: true, justify: 'space-between', alignItems: 'flex-end', className: classes.header },
                        React.createElement(core_1.Grid, { item: true, xs: 11, className: classes.headerText }, "My Crypto"),
                        React.createElement(core_1.Grid, { item: true, xs: 1 },
                            React.createElement("button", { className: classes.gearButton, onClick: manageCryptoAction },
                                React.createElement(gear_1.GearIcon, null))))),
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement("div", { className: classes.horizontalDivider })),
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Grid, { container: true, alignItems: 'flex-start', spacing: 0 },
                        React.createElement(core_1.Grid, { item: true, xs: 4, className: classes.chart },
                            React.createElement(react_google_charts_1.Chart, { chartType: "PieChart", data: this.getChartData(tokens), options: {
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
                                }, graph_id: "PieChart", width: "100%", height: "300px", legend_toggle: true, chartEvents: this.chartEvents, ref: 'pieChart' }),
                            React.createElement("div", { className: classes.chartCenterContainer },
                                React.createElement("div", { className: classes.totalPrice },
                                    React.createElement(number_format_1.NumberFormat, { locale: locale, currency: fiatCurrency, style: 'currency', value: this.getTotalBalanceInFiat(tokens) })),
                                React.createElement("div", { className: classes.totalPriceText },
                                    "Total Value ",
                                    fiatCurrency))),
                        React.createElement(core_1.Grid, { item: true, xs: 8 },
                            React.createElement(core_1.Grid, { container: true, spacing: 16 }, this.getTokensLegend(classes, tokens, locale, fiatCurrency))))),
                this.getViewAllSection(classes, tokens, topTokenListSize, visibilityFilter, dispatch, toggleVisibilityFilterAction))));
    };
    return CryptoChartBoxComponent;
}(React.Component));
exports.CryptoChartBoxComponent = CryptoChartBoxComponent;
exports.CryptoChartBox = react_jss_1.default(styles)(CryptoChartBoxComponent);
exports.default = exports.CryptoChartBox;
//# sourceMappingURL=crypto-chart-box.js.map