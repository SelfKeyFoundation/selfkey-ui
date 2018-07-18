import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps, ClassNameMap, WithStyles } from 'react-jss';

import { Grid } from '@material-ui/core'
import { Chart, ChartEvent } from 'react-google-charts';
import { PriceSummary } from './price-summary';
import { NumberFormat } from './number-format';

const styles: StyleSheet = {
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
  }

};

export type Token = {
  name: string,
  symbol: string,
  balance: number,
  balanceInFiat: number
}

export type CryptoChartBoxProps = {
  locale: string,
  fiatCurrency: string,
  tokens: Array<Token>
}

export type StyledProps = WithStyles<keyof typeof styles> & CryptoChartBoxProps;

export type Active = {
  active: boolean;
};

export type CryptoChartBoxState = {
  tokens: Array<Active>;
};

export type chartType = {
  setSelection: Function
}

export class CryptoChartBoxComponent extends React.Component<StyledProps, CryptoChartBoxState> {
  
  tokens: Array<Active> = [];
  
  state = {
    tokens: this.tokens
  }

  selection = [];
  chart: chartType;
  
  constructor(props: StyledProps) {
    super(props);

    props.tokens.map((token, index) => {
      this.state.tokens[index] = {active: false};
    });

    this.initSelection();
  }

  initSelection() {
    this.selection = [];
    this.chart = { setSelection: () =>{ return; } };
  }

  componentDidUpdate() {
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
      const newTokens = this.state.tokens.map((token, index) => {
        if (index !== row) {
          return {active: false}
        } else {
          this.selection = selection;
          this.chart = Chart.chart;
          return {active: true}
        }  
      }); 
      this.setState({tokens: newTokens});
    },
  }
  
  onMouseOverEvent: ChartEvent = {
    eventName: 'onmouseover',
    callback: (Chart: any, chartItem: any) => {
      const selection = Chart.chart.getSelection();
      const newTokens = this.state.tokens.slice(0);
      if (newTokens[chartItem.row] && newTokens[chartItem.row].active) {
        return;
      }
      if (selection && selection.length && selection[0].row === chartItem.row) {
        newTokens[chartItem.row] = {active: false};
        this.setState({tokens: newTokens});
        setTimeout(() => {
          newTokens[chartItem.row] = {active: true};
          this.setState({tokens: newTokens});
        }, 100);
        return;
      }
      newTokens[chartItem.row] = {active: true};
      this.setState({tokens: newTokens});
    },
  }

  onMouseOutEvent: ChartEvent = {
    eventName: 'onmouseout',
    callback: (Chart: any, chartItem: any) => {
      const selection = Chart.chart.getSelection();
      if (selection && selection.length && selection[0].row === chartItem.row) {
        return;
      }
      const newTokens = this.state.tokens.slice(0);
      newTokens[chartItem.row] = {active: false};
      this.setState({tokens: newTokens});
    },
  }

  chartEvents = [
    this.selectEvent,
    this.onMouseOutEvent,
    this.onMouseOverEvent
  ];

  getTokensLegend(classes: Partial<ClassNameMap<string>>, tokens: Array<Token>, locale: string, fiatCurrency: string) {
    return tokens.map((token, index) => {
      return (
        <Grid item xs={6} key={index} className={this.state.tokens[index] && this.state.tokens[index].active? classes.active: ''}>
          <Grid container alignItems='flex-start'>  
            <Grid item xs={2}>
              <div className={classes.coloredBox} style={{backgroundColor: this.getColors()[index]}}>
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
                  <PriceSummary locale={locale} style='decimal' currency={token.symbol} className={classes.prices} valueClass={classes.texts} value={token.balance} justify='flex-end'/>
                </Grid>
                <Grid item xs={12}>
                  <PriceSummary locale={locale} style='currency' currency={fiatCurrency} className={classes.prices} valueClass={classes.texts} value={token.balanceInFiat} justify='flex-end'/>
                </Grid>
              </Grid>
            </Grid>          
          </Grid>
        </Grid>
      );
    });
  };

  getChartData(tokens: Array<Token>) {
    const data: Array<Array<string | number>>  = [['Content', 'percents']];
    const dataPoints = tokens.map(token => {
      return [token.name, token.balanceInFiat]
    });
  
    return data.concat(dataPoints);
  }

  getColors() {
    return ['#46dfba', '#46b7df', '#238db4', '#1d7999', '#0e4b61'];
  }

  getTotalBalanceInFiat(tokens: Array<Token>) {
    return tokens.reduce((a, b) => {
      return a + b['balanceInFiat'];
    }, 0);
  }

  render() {
    const {classes, locale, fiatCurrency, tokens} = this.props;
    return (
      <div className={classes.cryptoBox}>
        <Grid container alignItems='center' spacing={16}>
          <Grid item xs={12}>
            My Crypto
          </Grid>
          <Grid item xs={12}>
            <div className={classes.horizontalDivider}></div>
          </Grid> 
          <Grid item xs={12}>
            <Grid container alignItems='flex-start'>
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
                  }}
                  graph_id="PieChart"
                  width="100%"
                  height="200px"
                  legend_toggle
                  chartEvents={this.chartEvents}
                />
                <div className={classes.chartCenterContainer}>
                  <div className={classes.totalPrice}>
                    <NumberFormat locale={locale} currency={fiatCurrency} style='currency' value={this.getTotalBalanceInFiat(tokens)}/> 
                  </div>
                  <div className={classes.totalPriceText}>
                    Total Value {fiatCurrency}
                  </div>  
                </div>
              </Grid>
              <Grid item xs={8}>
                  <Grid container spacing={24}>
                    {this.getTokensLegend(classes, tokens, locale, fiatCurrency)}
                  </Grid>
              </Grid>
            </Grid>   
          </Grid> 
        </Grid>
      </div>
    );
  }

}

export const CryptoChartBox = injectSheet(styles)(CryptoChartBoxComponent);

export default CryptoChartBox;
