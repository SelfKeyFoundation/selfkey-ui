"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var react_google_charts_1 = require("react-google-charts");
var price_summary_1 = require("./price-summary");
var styles = {
    cryptoBox: {
        width: '100% !important',
        padding: '20px',
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
        backgroundColor: 'rgb(70, 223, 186)',
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
};
var getTokensLegend = function (classes, wallet, locale, fiatCurrency) {
    return wallet.tokens.map(function (token) {
        return (React.createElement(core_1.Grid, { item: true, xs: 6 },
            React.createElement(core_1.Grid, { container: true },
                React.createElement(core_1.Grid, { item: true, xs: 4, sm: 2 },
                    React.createElement("div", { className: classes.coloredBox },
                        React.createElement("div", { className: classes.coloredBoxText }, token.name.charAt(0)))),
                React.createElement(core_1.Grid, { item: true, xs: 4, sm: 2 },
                    React.createElement(core_1.Grid, { container: true },
                        React.createElement(core_1.Grid, { item: true, xs: 12 }, token.name),
                        React.createElement(core_1.Grid, { item: true, xs: 12 }, token.symbol))),
                React.createElement(core_1.Grid, { item: true, xs: 4, sm: 3 },
                    React.createElement(core_1.Grid, { container: true },
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(price_summary_1.PriceSummary, { locale: locale, style: 'decimal', currency: token.symbol, value: token.balance, justify: 'flex-end' })),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(price_summary_1.PriceSummary, { locale: locale, style: 'currency', currency: fiatCurrency, value: token.balanceInFiat, justify: 'flex-end' })))))));
    });
};
var getChartData = function (wallet) {
    var data = [['Content', 'percents']];
    var dataPoints = wallet.tokens.map(function (token) {
        return [token.name, token.balanceInFiat];
    });
    return data.concat(dataPoints);
};
var getColors = function () {
    return ['#46dfba', '#46b7df', '#238db4', '#1d7999', '#0e4b61'];
};
exports.CryptoChartBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, locale = _a.locale, fiatCurrency = _a.fiatCurrency, wallet = _a.wallet;
    return (React.createElement("div", { className: classes.cryptoBox },
        React.createElement(core_1.Grid, { container: true, alignItems: 'center', spacing: 16 },
            React.createElement(core_1.Grid, { item: true, xs: 12 }, "My Crypto"),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement("div", { className: classes.horizontalDivider })),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Grid, { container: true, alignItems: 'flex-start' },
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement(react_google_charts_1.Chart, { chartType: "PieChart", data: getChartData(wallet), options: {
                                backgroundColor: 'transparent',
                                title: '',
                                chartArea: { left: 15, top: 15, bottom: 15, right: 15 },
                                pieHole: 0.7,
                                pieSliceBorderColor: 'none',
                                colors: getColors(),
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
                            }, graph_id: "PieChart", width: "100%", height: "200px", legend_toggle: true })),
                    React.createElement(core_1.Grid, { item: true, xs: 8 },
                        React.createElement(core_1.Grid, { container: true, spacing: 8 }, getTokensLegend(classes, wallet, locale, fiatCurrency))))))));
});
exports.default = exports.CryptoChartBox;
//# sourceMappingURL=crypto-chart-box.js.map