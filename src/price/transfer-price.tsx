import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Grid } from '@material-ui/core'

const styles: StyleSheet = {

    cryptoCurrencyName: {
      fontFamily: 'Lato, arial, sans-serif',
      fontSize: '18px',
      color: '#ffffff'   
    },

    cryptoCurrencyShort: {
      marginTop: '4px',
      opacity: 0.7,
      fontFamily: 'Lato, arial, sans-serif',
      fontSize: '14px',
      letterSpacing: '1px',
      color: '#ffffff'
    }
};

export type TransferPriceProps = {
    cryptoCurrencyShort: string,
    cryptoCurrencyName: string,
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>,
}

export const TransferPrice = injectSheet(styles)<TransferPriceProps>(({classes, children, cryptoCurrencyShort, cryptoCurrencyName, CryptoCurrencyIconComponent}) => (
   <div>
    <Grid container>
      <Grid container direction="column" xs={1}>
        <CryptoCurrencyIconComponent/>
      </Grid>
      <Grid container direction="column" xs={11}>
        <div className={classes.cryptoCurrencyName}>{cryptoCurrencyName}</div>
        <div className={classes.cryptoCurrencyShort} >{cryptoCurrencyShort}</div>
      </Grid>
    </Grid>
    <Grid>
      {children}
    </Grid>
  </div>
));

export default TransferPrice;
