import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps, ClassNameMap, WithStyles } from 'react-jss';

import { Grid } from '@material-ui/core'
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Chart, ChartEvent } from 'react-google-charts';
import { PriceSummary } from './price-summary';
import { NumberFormat } from './number-format';

import { GearIcon } from '../icons/gear';


const styles: StyleSheet = {
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
    marginLeft: '70px'
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

export type Token = {
  name: string,
  symbol: string,
  balance: number,
  balanceInFiat: number
}

export type CryptoChartBoxProps = {
  locale: string,
  fiatCurrency: string,
  tokens: Array<Token>,
  manageCryptoAction?: ((event: React.MouseEvent<HTMLElement>) => void) 
}

export type StyledProps = WithStyles<keyof typeof styles> & CryptoChartBoxProps;

export type Active = {
  active: boolean;
};

export type CryptoChartBoxState = {
  activations: Array<Active>,
  displayedTokens: Array<Token>,
  viewAll: boolean
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
  
  TOP_TOKEN_LIST_SIZE = 5;
  OTHERS_COLOR = '#71a6b8';
  otherTokens: Array<Token> = [];

  activations: Array<Active> = [];
  topTokens: Array<Token> = [];
  othersToken: Token = {
    name: 'Others',
    symbol: 'OTHERS',
    balance: 0,
    balanceInFiat: 0
  };

  state = {
    activations: this.activations,
    displayedTokens: this.topTokens,
    viewAll: true
  }

  selection = [];
  chart: ChartType;

  public refs: {
    pieChart: HTMLElement & ChartElementType;
  };
  
  constructor(props: StyledProps) {
    super(props);

    this.initState(props);
    this.initSelection();
  }

  initState(props: StyledProps) {
    props.tokens.forEach((token, index) => {
      this.state.activations[index] = {active: false};
    });

    this.topTokens = props.tokens.slice(0, this.TOP_TOKEN_LIST_SIZE);
    this.otherTokens = props.tokens.slice(this.TOP_TOKEN_LIST_SIZE, props.tokens.length);
    if (this.otherTokens.length) {
      this.othersToken = this.getOthersToken(this.otherTokens);
      this.state.displayedTokens = [...this.topTokens, this.othersToken]; 
    } else {
      this.state.displayedTokens = this.topTokens;
    }
  }

  getOthersToken(otherTokens: Array<Token>){
    return {
      name: 'Others',
      symbol: 'OTHERS',
      balance: this.getOthersTokenBalance(otherTokens, 'balance'),
      balanceInFiat: this.getOthersTokenBalance(otherTokens, 'balanceInFiat')
    };
  }

  getOthersTokenBalance(otherTokens: Array<Token>, balanceType: string) {
    return otherTokens.reduce((a, b) => {
      return a + b[balanceType];
    }, 0);
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
      const newTokens = this.state.activations.slice(0);
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

  chartEvents = [
    this.selectEvent,
    this.onMouseOutEvent,
    this.onMouseOverEvent
  ];

  getTokensLegend(classes: Partial<ClassNameMap<string>>, tokens: Array<Token>, locale: string, fiatCurrency: string) {
    return tokens.map((token, index) => {
      return (
        <Grid item xs={6} key={index} className={this.state.activations[index] && this.state.activations[index].active? classes.active: ''} onMouseEnter={() => this.onItemHoverEnter(index)} onMouseLeave={() => this.onItemHoverLeave(index)}>
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

  toogleViewAllTokens(viewAll: boolean) {
    if (viewAll) {
      this.setState({...this.state, displayedTokens: [...this.topTokens, ...this.otherTokens], viewAll: false});
    } else {
      this.setState({...this.state, displayedTokens: [...this.topTokens, this.othersToken], viewAll: true});
    }
  }

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

  onItemHoverEnter(index: number) {
    const chart = this.refs.pieChart.wrapper.getChart();
    chart.setSelection([{row: index}]);
  }

  onItemHoverLeave(index: number) {
    const chart = this.refs.pieChart.wrapper.getChart();
    chart.setSelection([]);
  }

  getViewAllSection(classes: Partial<ClassNameMap<string>>) {
    return (this.otherTokens.length) ? (
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid item className={classes.buttonViewMore} onClick={() => this.toogleViewAllTokens(this.state.viewAll)}>
            {this.state.viewAll ? (
              <ExpandMore className={classes.expandMore}/>
            ) : (
              <ExpandLess className={classes.expandMore} />
            )}
            <span className={classes.buttonViewMoreText}>{this.state.viewAll ? 'View All' : 'Collapse'}</span>
          </Grid>
        </Grid>
      </Grid>
    ) : '';
  }

  render() {
    const {classes, locale, fiatCurrency, tokens, manageCryptoAction} = this.props;
    return (
      <div className={classes.cryptoBox}>
        <Grid container alignItems='center' spacing={16}>
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
                  data={this.getChartData(this.state.displayedTokens)}
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
                  height="300px"
                  legend_toggle
                  chartEvents={this.chartEvents}
                  ref='pieChart'
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
                  <Grid container spacing={16}>
                    {this.getTokensLegend(classes, this.state.displayedTokens, locale, fiatCurrency)}
                  </Grid>
              </Grid>
            </Grid>   
          </Grid> 
          {this.getViewAllSection(classes)}
        </Grid>
      </div>
    );
  }

}

export const CryptoChartBox = injectSheet(styles)(CryptoChartBoxComponent);

export default CryptoChartBox;
