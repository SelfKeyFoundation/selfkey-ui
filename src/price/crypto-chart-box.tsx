import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps, ClassNameMap } from 'react-jss';

import { Grid } from '@material-ui/core'
import { Chart } from 'react-google-charts';
import { PriceSummary } from './price-summary';

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

export type Token = {
  name: string,
  symbol: string,
  balance: number,
  balanceInFiat: number
}


export type Wallet = {
  tokens: Array<Token>
}

export type CryptoChartBoxProps = {
  locale: string,
  fiatCurrency: string,
  wallet: Wallet

}


const getTokensLegend = (classes: Partial<ClassNameMap<string>>, wallet: Wallet, locale: string, fiatCurrency: string) => {
  return wallet.tokens.map(token => {
    return (
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={4} sm={2}>
            <div className={classes.coloredBox}>
              <div className={classes.coloredBoxText} >
                {token.name.charAt(0)}
              </div>
            </div>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Grid container>
              <Grid item xs={12}>
                {token.name}
              </Grid>
              <Grid item xs={12}>
                {token.symbol}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Grid container>
              <Grid item xs={12}>
                <PriceSummary locale={locale} style='decimal' currency={token.symbol} value={token.balance} justify='flex-end'/>
              </Grid>
              <Grid item xs={12}>
                <PriceSummary locale={locale} style='currency' currency={fiatCurrency} value={token.balanceInFiat} justify='flex-end'/>
              </Grid>
            </Grid>
          </Grid>          
        </Grid>
      </Grid>
    );
  });
};

const getChartData = (wallet: Wallet) => {
  const data: Array<Array<string | number>>  = [['Content', 'percents']];
  const dataPoints = wallet.tokens.map(token => {
    return [token.name, token.balanceInFiat]
  });

  return data.concat(dataPoints);
}

const getColors = () => {
  return ['#46dfba', '#46b7df', '#238db4', '#1d7999', '#0e4b61'];
}

export const CryptoChartBox = injectSheet(styles)<CryptoChartBoxProps>(({classes, locale, fiatCurrency, wallet}) => (
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
          <Grid item xs={4}>
            <Chart
              chartType="PieChart"
              data={getChartData(wallet)}
              options={{
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
              }}
              graph_id="PieChart"
              width="100%"
              height="200px"
              legend_toggle
            />
          </Grid>
          <Grid item xs={8}>
              <Grid container spacing={8}>
                {getTokensLegend(classes, wallet, locale, fiatCurrency)}
              </Grid>
          </Grid>
        </Grid>   
      </Grid> 
    </Grid>
   
    
  </div>
));

export default CryptoChartBox;
