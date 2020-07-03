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
import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Chart } from 'react-google-charts';
import { PriceSummary } from './price-summary';
import { NumberFormat } from './number-format';
import { GearIcon } from '../icons/gear';
var styles = createStyles({
    cryptoBox: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        color: '#ffffff',
        fontFamily: 'Lato, arial, sans-serif',
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
});
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
        _this.DEFAULT_COLLOR = '#2A3540';
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
    CryptoChartBoxComponent.prototype.componentDidUpdate = function (prevProps) {
        this.chart.setSelection(this.selection);
    };
    CryptoChartBoxComponent.prototype.getChartEvents = function () {
        return this.hasBalance() ? [
            this.selectEvent,
            this.onMouseOutEvent,
            this.onMouseOverEvent
        ] : [];
    };
    CryptoChartBoxComponent.prototype.getTokensLegend = function (classes, tokens, locale, fiatCurrency) {
        var _this = this;
        return tokens.map(function (token, index) {
            return (React.createElement(Grid, { item: true, xs: 6, key: index, className: _this.state.activations[index] && _this.state.activations[index].active ? classes.active : '', onMouseEnter: function () { return _this.onItemHoverEnter(index); }, onMouseLeave: function () { return _this.onItemHoverLeave(); } },
                React.createElement(Grid, { container: true, alignItems: 'flex-start' },
                    React.createElement(Grid, { item: true, xs: 2 },
                        React.createElement("div", { className: classes.coloredBox, style: { backgroundColor: (index <= 4) ? _this.getColors()[index] : _this.OTHERS_COLOR } },
                            React.createElement("div", { className: classes.coloredBoxText }, token.name.charAt(0)))),
                    React.createElement(Grid, { item: true, xs: 4 },
                        React.createElement(Grid, { container: true, alignItems: 'flex-start', className: classes.texts },
                            React.createElement(Grid, { item: true, xs: 12 }, token.name),
                            React.createElement(Grid, { item: true, xs: 12 }, token.symbol))),
                    React.createElement(Grid, { item: true, xs: 4 },
                        React.createElement(Grid, { container: true, alignItems: 'flex-start' },
                            React.createElement(Grid, { item: true, xs: 12 },
                                React.createElement(PriceSummary, { locale: locale, priceStyle: 'decimal', currency: token.symbol, className: classes.prices, valueClass: classes.texts, value: token.balance, justify: 'flex-end' })),
                            React.createElement(Grid, { item: true, xs: 12 },
                                React.createElement(PriceSummary, { locale: locale, priceStyle: 'currency', currency: fiatCurrency, className: classes.prices, valueClass: classes.texts, value: token.balanceInFiat, justify: 'flex-end' })))))));
        });
    };
    ;
    CryptoChartBoxComponent.prototype.hasBalance = function () {
        var tokens = this.props.tokens;
        tokens = tokens || [];
        var check = tokens.find(function (token) {
            return token.balanceInFiat > 0;
        });
        return !!check;
    };
    CryptoChartBoxComponent.prototype.getChartData = function (tokens) {
        var data = [['Content', 'percents']];
        var dataPoints = null;
        if (this.hasBalance()) {
            dataPoints = tokens.map(function (token) {
                return [token.name, token.balanceInFiat];
            });
        }
        else {
            dataPoints = [['', 1]]; // positive value is needed for pie chart
        }
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
    CryptoChartBoxComponent.prototype.getChart = function () {
        var wrapper = this.refs.pieChart.wrapper;
        if (!wrapper) {
            return;
        }
        return wrapper.getChart();
    };
    CryptoChartBoxComponent.prototype.onItemHoverEnter = function (index) {
        var chart = this.getChart();
        if (!chart || !this.hasBalance()) {
            return;
        }
        chart.setSelection([{ row: index }]);
    };
    CryptoChartBoxComponent.prototype.onItemHoverLeave = function () {
        var chart = this.getChart();
        if (!chart || !this.hasBalance()) {
            return;
        }
        chart.setSelection([]);
    };
    CryptoChartBoxComponent.prototype.toggleViewAll = function () {
        var _a = this.props, toggleViewAll = _a.toggleViewAll, viewAll = _a.viewAll;
        if (!toggleViewAll) {
            return;
        }
        toggleViewAll(viewAll);
    };
    CryptoChartBoxComponent.prototype.getViewAllSection = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, tokens = _a.tokens, topTokenListSize = _a.topTokenListSize, viewAll = _a.viewAll;
        return (tokens.length > topTokenListSize) ? (React.createElement(Grid, { item: true, xs: 12 },
            React.createElement(Grid, { container: true, justify: 'center' },
                React.createElement(Grid, { item: true, className: classes.buttonViewMore, onClick: function () { return _this.toggleViewAll(); } },
                    !viewAll ? (React.createElement(ExpandMore, { className: classes.expandMore })) : (React.createElement(ExpandLess, { className: classes.expandMore })),
                    React.createElement("span", { className: classes.buttonViewMoreText }, !viewAll ? 'View All' : 'Collapse'))))) : '';
    };
    CryptoChartBoxComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, locale = _a.locale, fiatCurrency = _a.fiatCurrency, tokens = _a.tokens, manageCryptoAction = _a.manageCryptoAction;
        var hasBalance = this.hasBalance();
        var colors = hasBalance ? this.getColors() : [this.DEFAULT_COLLOR];
        var tooltip = hasBalance ? {
            trigger: 'focus',
            isHtml: true
        } : { trigger: 'none' };
        return (React.createElement("div", { className: classes.cryptoBox },
            React.createElement(Grid, { container: true, alignItems: 'center', spacing: 4 },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Grid, { container: true, justify: 'space-between', alignItems: 'flex-end', className: classes.header },
                        React.createElement(Grid, { item: true, xs: 11, className: classes.headerText }, "My Crypto"),
                        React.createElement(Grid, { item: true, xs: 1 },
                            React.createElement("button", { className: classes.gearButton, onClick: manageCryptoAction },
                                React.createElement(GearIcon, null))))),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement("div", { className: classes.horizontalDivider })),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Grid, { container: true, alignItems: 'flex-start', spacing: 0 },
                        React.createElement(Grid, { item: true, xs: 4, className: classes.chart },
                            React.createElement(Chart, { chartType: "PieChart", data: this.getChartData(tokens), options: {
                                    backgroundColor: 'transparent',
                                    title: '',
                                    chartArea: { left: 15, top: 15, bottom: 15, right: 15 },
                                    pieHole: 0.7,
                                    pieSliceBorderColor: 'none',
                                    colors: colors,
                                    legend: {
                                        position: 'none'
                                    },
                                    pieSliceText: 'none',
                                    tooltip: tooltip,
                                    animation: {
                                        startup: true
                                    }
                                }, graph_id: "PieChart", width: "100%", height: "300px", legend_toggle: true, chartEvents: this.getChartEvents(), ref: 'pieChart' }),
                            React.createElement("div", { className: classes.chartCenterContainer },
                                React.createElement("div", { className: classes.totalPrice },
                                    React.createElement(NumberFormat, { locale: locale, currency: fiatCurrency, priceStyle: 'currency', value: this.getTotalBalanceInFiat(tokens) })),
                                React.createElement("div", { className: classes.totalPriceText },
                                    "Total Value ",
                                    fiatCurrency))),
                        React.createElement(Grid, { item: true, xs: 8 },
                            React.createElement(Grid, { container: true, spacing: 4 }, this.getTokensLegend(classes, tokens, locale, fiatCurrency))))),
                this.getViewAllSection())));
    };
    return CryptoChartBoxComponent;
}(React.Component));
export { CryptoChartBoxComponent };
export var CryptoChartBox = withStyles(styles)(CryptoChartBoxComponent);
export default CryptoChartBox;
//# sourceMappingURL=crypto-chart-box.js.map