import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Chart } from 'react-google-charts';
import { PriceSummary } from './price-summary';
import { NumberFormat } from './number-format';
import { GearIcon } from '../icons/gear';
const styles = createStyles({
    cryptoBox: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        color: '#ffffff',
        fontFamily: 'Lato, arial, sans-serif',
        padding: '20px'
    },
    horizontalDivider: {
        height: '1px',
        backgroundColor: '#303c49'
    },
    coloredBox: {
        width: '44px !important',
        height: '44px !important',
        borderRadius: '8px !important',
        position: 'relative'
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
        paddingTop: '0px'
    },
    texts: {
        fontSize: '18px'
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
export class CryptoChartBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.OTHERS_COLOR = '#71a6b8';
        this.activations = [];
        this.state = {
            activations: this.activations
        };
        this.selection = [];
        this.selectEvent = {
            eventName: 'select',
            callback: (Chart, chartItem) => {
                this.initSelection();
                const selection = Chart.chart.getSelection();
                if (!selection || !selection[0]) {
                    return;
                }
                const row = selection[0].row;
                const newTokens = this.state.activations.map((activation, index) => {
                    if (index !== row) {
                        return { active: false };
                    }
                    else {
                        this.selection = selection;
                        this.chart = Chart.chart;
                        return { active: true };
                    }
                });
                this.setState({ activations: newTokens });
            }
        };
        this.onMouseOverEvent = {
            eventName: 'onmouseover',
            callback: (Chart, chartItem) => {
                const selection = Chart.chart.getSelection();
                const newTokens = this.state.activations.slice(0);
                if (newTokens[chartItem.row] && newTokens[chartItem.row].active) {
                    return;
                }
                if (selection && selection.length && selection[0].row === chartItem.row) {
                    newTokens[chartItem.row] = { active: false };
                    this.setState({ activations: newTokens });
                    setTimeout(() => {
                        newTokens[chartItem.row] = { active: true };
                        this.setState({ activations: newTokens });
                    }, 100);
                    return;
                }
                newTokens[chartItem.row] = { active: true };
                this.setState({ activations: newTokens });
            }
        };
        this.onMouseOutEvent = {
            eventName: 'onmouseout',
            callback: (Chart, chartItem) => {
                const selection = Chart.chart.getSelection();
                if (selection && selection.length && selection[0].row === chartItem.row) {
                    return;
                }
                const newTokens = this.state.activations.slice(0);
                newTokens[chartItem.row] = { active: false };
                this.setState({ activations: newTokens });
            }
        };
        this.DEFAULT_COLLOR = '#2A3540';
        this.initActivations(props.tokens);
        this.initSelection();
    }
    initActivations(tokens) {
        if (!tokens) {
            return;
        }
        const activations = [...this.state.activations];
        tokens.forEach((token, index) => {
            activations[index] = { active: false };
        });
        this.setState({ activations });
    }
    initSelection() {
        this.selection = [];
        this.chart = {
            setSelection: () => {
                return;
            }
        };
    }
    componentDidUpdate(prevProps) {
        this.chart.setSelection(this.selection);
    }
    getChartEvents() {
        return this.hasBalance()
            ? [this.selectEvent, this.onMouseOutEvent, this.onMouseOverEvent]
            : [];
    }
    getTokensLegend(classes, tokens, locale, fiatCurrency) {
        return tokens.map((token, index) => {
            return (React.createElement(Grid, { item: true, xs: 6, key: index, className: this.state.activations[index] && this.state.activations[index].active
                    ? classes.active
                    : '', onMouseEnter: () => this.onItemHoverEnter(index), onMouseLeave: () => this.onItemHoverLeave() },
                React.createElement(Grid, { container: true, alignItems: "flex-start" },
                    React.createElement(Grid, { item: true, xs: 2 },
                        React.createElement("div", { className: classes.coloredBox, style: {
                                backgroundColor: index <= 4 ? this.getColors()[index] : this.OTHERS_COLOR
                            } },
                            React.createElement("div", { className: classes.coloredBoxText }, token.name.charAt(0)))),
                    React.createElement(Grid, { item: true, xs: 4 },
                        React.createElement(Grid, { container: true, alignItems: "flex-start", className: classes.texts },
                            React.createElement(Grid, { item: true, xs: 12 }, token.name),
                            React.createElement(Grid, { item: true, xs: 12 }, token.symbol))),
                    React.createElement(Grid, { item: true, xs: 4 },
                        React.createElement(Grid, { container: true, alignItems: "flex-start" },
                            React.createElement(Grid, { item: true, xs: 12 },
                                React.createElement(PriceSummary, { locale: locale, priceStyle: "decimal", currency: token.symbol, className: classes.prices, valueClass: classes.texts, value: token.balance, justify: "flex-end" })),
                            React.createElement(Grid, { item: true, xs: 12 },
                                React.createElement(PriceSummary, { locale: locale, priceStyle: "currency", currency: fiatCurrency, className: classes.prices, valueClass: classes.texts, value: token.balanceInFiat, justify: "flex-end" })))))));
        });
    }
    hasBalance() {
        let { tokens } = this.props;
        tokens = tokens || [];
        const check = tokens.find(token => {
            return token.balanceInFiat > 0;
        });
        return !!check;
    }
    getChartData(tokens) {
        const data = [['Content', 'percents']];
        let dataPoints = null;
        if (this.hasBalance()) {
            dataPoints = tokens.map(token => {
                return [token.name, token.balanceInFiat];
            });
        }
        else {
            dataPoints = [['', 1]]; // positive value is needed for pie chart
        }
        return data.concat(dataPoints);
    }
    getColors() {
        return ['#46dfba', '#46b7df', '#238db4', '#1d7999', '#0e4b61'];
    }
    getTotalBalanceInFiat(tokens) {
        return tokens.reduce((a, b) => {
            return a + b.balanceInFiat;
        }, 0);
    }
    getChart() {
        const wrapper = this.refs.pieChart.wrapper;
        if (!wrapper) {
            return;
        }
        return wrapper.getChart();
    }
    onItemHoverEnter(index) {
        const chart = this.getChart();
        if (!chart || !this.hasBalance()) {
            return;
        }
        chart.setSelection([{ row: index }]);
    }
    onItemHoverLeave() {
        const chart = this.getChart();
        if (!chart || !this.hasBalance()) {
            return;
        }
        chart.setSelection([]);
    }
    toggleViewAll() {
        const { toggleViewAll, viewAll } = this.props;
        if (!toggleViewAll) {
            return;
        }
        toggleViewAll(viewAll);
    }
    getViewAllSection() {
        const { classes, tokens, topTokenListSize, viewAll } = this.props;
        return tokens.length > topTokenListSize ? (React.createElement(Grid, { item: true, xs: 12 },
            React.createElement(Grid, { container: true, justify: "center" },
                React.createElement(Grid, { item: true, className: classes.buttonViewMore, onClick: () => this.toggleViewAll() },
                    !viewAll ? (React.createElement(ExpandMore, { className: classes.expandMore })) : (React.createElement(ExpandLess, { className: classes.expandMore })),
                    React.createElement("span", { className: classes.buttonViewMoreText }, !viewAll ? 'View All' : 'Collapse'))))) : ('');
    }
    render() {
        const { classes, locale, fiatCurrency, tokens, manageCryptoAction } = this.props;
        const hasBalance = this.hasBalance();
        const colors = hasBalance ? this.getColors() : [this.DEFAULT_COLLOR];
        const tooltip = hasBalance
            ? {
                trigger: 'focus',
                isHtml: true
            }
            : { trigger: 'none' };
        return (React.createElement("div", { className: classes.cryptoBox },
            React.createElement(Grid, { container: true, alignItems: "center", spacing: 4 },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Grid, { container: true, justify: "space-between", alignItems: "flex-end", className: classes.header },
                        React.createElement(Grid, { item: true, xs: 11, className: classes.headerText }, "My Crypto"),
                        React.createElement(Grid, { item: true, xs: 1 },
                            React.createElement("button", { className: classes.gearButton, onClick: manageCryptoAction },
                                React.createElement(GearIcon, null))))),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement("div", { className: classes.horizontalDivider })),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Grid, { container: true, alignItems: "flex-start", spacing: 0 },
                        React.createElement(Grid, { item: true, xs: 4, className: classes.chart },
                            React.createElement(Chart, { chartType: "PieChart", data: this.getChartData(tokens), options: {
                                    backgroundColor: 'transparent',
                                    title: '',
                                    chartArea: { left: 15, top: 15, bottom: 15, right: 15 },
                                    pieHole: 0.7,
                                    pieSliceBorderColor: 'none',
                                    colors,
                                    legend: {
                                        position: 'none'
                                    },
                                    pieSliceText: 'none',
                                    tooltip,
                                    animation: {
                                        startup: true
                                    }
                                }, graph_id: "PieChart", width: "100%", height: "300px", legend_toggle: true, chartEvents: this.getChartEvents(), ref: "pieChart" }),
                            React.createElement("div", { className: classes.chartCenterContainer },
                                React.createElement("div", { className: classes.totalPrice },
                                    React.createElement(NumberFormat, { locale: locale, currency: fiatCurrency, priceStyle: "currency", value: this.getTotalBalanceInFiat(tokens) })),
                                React.createElement("div", { className: classes.totalPriceText },
                                    "Total Value ",
                                    fiatCurrency))),
                        React.createElement(Grid, { item: true, xs: 8 },
                            React.createElement(Grid, { container: true, spacing: 4 }, this.getTokensLegend(classes, tokens, locale, fiatCurrency))))),
                this.getViewAllSection())));
    }
}
export const CryptoChartBox = withStyles(styles)(CryptoChartBoxComponent);
export default CryptoChartBox;
//# sourceMappingURL=crypto-chart-box.js.map