import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core'
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Chart, ChartEvent } from 'react-google-charts';
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

type Token = {
    name: string,
    symbol: string,
    balance: number,
    balanceInFiat: number
}

export type CryptoChartBoxProps = {
    locale: string,
    fiatCurrency: string,
    tokens: Array<Token>,
    manageCryptoAction?: ((event: React.MouseEvent<HTMLElement>) => void),
    topTokenListSize: number,
    viewAll: boolean,
    toggleViewAll?: Function
}

type StyledProps = WithStyles<keyof typeof styles> & CryptoChartBoxProps;

export type Active = {
    active: boolean;
};

export type CryptoChartBoxState = {
    activations: Array<Active>
};

export type ChartType = {
    setSelection: Function
}

export type ChartElementType = {
    wrapper: ChartWrapperType
}

export type ChartWrapperType = {
    getChart: Function
}

export class CryptoChartBoxComponent extends React.Component<StyledProps, CryptoChartBoxState> {

    OTHERS_COLOR = '#71a6b8';

    activations: Array<Active> = [];

    state = {
        activations: this.activations
    }

    selection = [];
    chart: ChartType;

    public refs: {
        pieChart: HTMLElement & ChartElementType;
    };

    constructor(props: StyledProps) {
        super(props);
        this.initActivations(props.tokens);
        this.initSelection();
    }

    initActivations(tokens: Array<Token>) {
        if (!tokens) {
            return;
        }
        const activations = [...this.state.activations];
        tokens.forEach((token, index) => {
            activations[index] = {active: false};
        });
        this.setState({activations});
    }

    initSelection() {
        this.selection = [];
        this.chart = { setSelection: () =>{ return; } };
    }

    componentDidUpdate(prevProps: StyledProps) {
        this.chart.setSelection(this.selection);
    }

    selectEvent: ChartEvent = {
        eventName: 'select',
        callback: (Chart: any, chartItem: any) => {

        this.initSelection();
        const selection = Chart.chart.getSelection();

        if (!selection || !selection[0]) {
            return;
        }
        const row = selection[0].row;
        const newTokens = this.state.activations.map((activation, index) => {
            if (index !== row) {
            return {active: false}
            } else {
            this.selection = selection;
            this.chart = Chart.chart;
            return {active: true}
            }
        });
        this.setState({activations: newTokens});
        },
    }

    onMouseOverEvent: ChartEvent = {
        eventName: 'onmouseover',
        callback: (Chart: any, chartItem: any) => {
        const selection = Chart.chart.getSelection();

        let newTokens = this.state.activations.slice(0);

        if (newTokens[chartItem.row] && newTokens[chartItem.row].active) {
            return;
        }
        if (selection && selection.length && selection[0].row === chartItem.row) {
            newTokens[chartItem.row] = {active: false};
            this.setState({activations: newTokens});
            setTimeout(() => {
            newTokens[chartItem.row] = {active: true};
            this.setState({activations: newTokens});
            }, 100);
            return;
        }
        newTokens[chartItem.row] = {active: true};
        this.setState({activations: newTokens});
        },
    }

    onMouseOutEvent: ChartEvent = {
        eventName: 'onmouseout',
        callback: (Chart: any, chartItem: any) => {
        const selection = Chart.chart.getSelection();
        if (selection && selection.length && selection[0].row === chartItem.row) {
            return;
        }
        const newTokens = this.state.activations.slice(0);
        newTokens[chartItem.row] = {active: false};
        this.setState({activations: newTokens});
        },
    }

    getChartEvents() {
        return this.hasBalance() ? [
        this.selectEvent,
        this.onMouseOutEvent,
        this.onMouseOverEvent
        ] : [];
    }

    getTokensLegend(classes: any, tokens: Array<Token>, locale: string, fiatCurrency: string) {
        return tokens.map((token, index) => {
        return (
            <Grid item xs={6} key={index} className={this.state.activations[index] && this.state.activations[index].active? classes.active: ''} onMouseEnter={() => this.onItemHoverEnter(index)} onMouseLeave={() => this.onItemHoverLeave()}>
            <Grid container alignItems='flex-start'>
                <Grid item xs={2}>
                <div className={classes.coloredBox} style={{backgroundColor: (index <= 4)? this.getColors()[index]: this.OTHERS_COLOR}}>
                    <div className={classes.coloredBoxText} >
                    {token.name.charAt(0)}
                    </div>
                </div>
                </Grid>
                <Grid item xs={4}>
                <Grid container alignItems='flex-start' className={classes.texts}>
                    <Grid item xs={12}>
                    {token.name}
                    </Grid>
                    <Grid item xs={12}>
                    {token.symbol}
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={4}>
                <Grid container alignItems='flex-start'>
                    <Grid item xs={12}>
                    <PriceSummary locale={locale} priceStyle='decimal' currency={token.symbol} className={classes.prices} valueClass={classes.texts} value={token.balance} justify='flex-end'/>
                    </Grid>
                    <Grid item xs={12}>
                    <PriceSummary locale={locale} priceStyle='currency' currency={fiatCurrency} className={classes.prices} valueClass={classes.texts} value={token.balanceInFiat} justify='flex-end'/>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        );
        });
    };

    hasBalance() {
    let { tokens } = this.props;
    tokens = tokens || [];
        let check = tokens.find(token => {
        return token.balanceInFiat > 0;
        });

        return !!check;
    }

    getChartData(tokens: Array<Token>) {
        const data: Array<Array<string | number>> = [['Content', 'percents']];
        let dataPoints = null;
        if (this.hasBalance()) {
        dataPoints = tokens.map(token => {
            return [token.name, token.balanceInFiat]
        });
        } else {
        dataPoints = [['', 1]]; // positive value is needed for pie chart
        }

        return data.concat(dataPoints);
    }

    DEFAULT_COLLOR = '#2A3540';

    getColors() {
        return ['#46dfba', '#46b7df', '#238db4', '#1d7999', '#0e4b61'];
    }

    getTotalBalanceInFiat(tokens: Array<Token>) {
        return tokens.reduce((a, b) => {
        return a + b['balanceInFiat'];
        }, 0);
    }

    getChart() {
        const wrapper = this.refs.pieChart.wrapper;
        if (!wrapper) {
        return;
        }
        return wrapper.getChart();
    }

    onItemHoverEnter(index: number) {
        const chart = this.getChart();
        if (!chart || !this.hasBalance()) {
        return;
        }
        chart.setSelection([{row: index}]);
    }

    onItemHoverLeave() {
        const chart = this.getChart();
        if (!chart || !this.hasBalance()) {
        return;
        }
        chart.setSelection([]);
    }

    toggleViewAll() {
        const {toggleViewAll, viewAll} = this.props
        if(!toggleViewAll) {
        return;
        }
        toggleViewAll(viewAll);
    }

    getViewAllSection() {
        const {classes, tokens, topTokenListSize, viewAll} = this.props;
        return (tokens.length > topTokenListSize) ? (
        <Grid item xs={12}>
            <Grid container justify='center'>
            <Grid item className={classes.buttonViewMore} onClick={() => this.toggleViewAll()}>
                {!viewAll? (
                <ExpandMore className={classes.expandMore}/>
                ) : (
                <ExpandLess className={classes.expandMore} />
                )}
                <span className={classes.buttonViewMoreText}>{!viewAll ? 'View All' : 'Collapse'}</span>
            </Grid>
            </Grid>
        </Grid>
        ) : '';
    }

    render() {
        const {classes, locale, fiatCurrency, tokens, manageCryptoAction} = this.props;

        let hasBalance = this.hasBalance();
        let colors = hasBalance ? this.getColors() : [this.DEFAULT_COLLOR];
        let tooltip = hasBalance ? {
        trigger: 'focus',
        isHtml: true
        } : { trigger: 'none' };

        return (
        <div className={classes.cryptoBox}>
            <Grid container alignItems='center' spacing={4}>
            <Grid item xs={12}>
                <Grid container justify='space-between' alignItems='flex-end' className={classes.header}>
                <Grid item xs={11} className={classes.headerText}>
                    My Crypto
                </Grid>
                <Grid item xs={1}>
                    <button className={classes.gearButton} onClick={manageCryptoAction}>
                    <GearIcon/>
                    </button>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.horizontalDivider}></div>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems='flex-start' spacing={0}>
                <Grid item xs={4} className={classes.chart}>
                    <Chart
                    chartType="PieChart"
                    data={this.getChartData(tokens)}
                    options={{
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
                    }}
                    graph_id="PieChart"
                    width="100%"
                    height="300px"
                    legend_toggle
                    chartEvents={this.getChartEvents()}
                    ref='pieChart'
                    />
                    <div className={classes.chartCenterContainer}>
                    <div className={classes.totalPrice}>
                        <NumberFormat locale={locale} currency={fiatCurrency} priceStyle='currency' value={this.getTotalBalanceInFiat(tokens)}/>
                    </div>
                    <div className={classes.totalPriceText}>
                        Total Value {fiatCurrency}
                    </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={4}>
                        {this.getTokensLegend(classes, tokens, locale, fiatCurrency)}
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            {this.getViewAllSection()}
            </Grid>
        </div>
        );
    }
}

export const CryptoChartBox = withStyles(styles)(CryptoChartBoxComponent);

export default CryptoChartBox;
