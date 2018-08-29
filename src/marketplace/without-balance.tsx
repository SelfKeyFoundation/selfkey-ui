import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Grid, Button } from '@material-ui/core';
import { H3 } from '../typography/headings';
import { P } from '../typography/paragraph';

const styles: StyleSheet = {
  headerText: {
    color: 'red'
  }
};

export type Exchange = {
  name: string,
  url: string
}

export type UnlockBoxProps = {
  exchanges: Array<Exchange>,
  closeAction?: ((event: React.MouseEvent<HTMLElement>) => void) 
}

const getExchanges = (exchanges: Array<Exchange>) => {
  return exchanges.map(exchange => {
    return (
      <Grid item>
        <a href={exchange.url}>{exchange.name}</a>
      </Grid>
    );
  })
}

export const WithoutBalance = injectSheet(styles)<UnlockBoxProps>(({classes, children, exchanges, closeAction}) => (
  <Grid container>
    <Grid item id='header'>
      <H3 className={classes.headerText}>You need at least 25 KEY tokens to unlock this listing.</H3>
    </Grid>
    <Grid item id='body'>
      <P>To access this marketplace, you will need a deposit of 25 KEY tokens. This deposit is reclaimable after 30 days. KEY tokens are listed on many exchanges worldwide:</P>
      <Grid container>
        {getExchanges(exchanges)}
      </Grid>
    </Grid>
    <Grid item id='footer'>
      <Button onClick={closeAction}>Close</Button>
    </Grid>
  </Grid>
));

export default WithoutBalance;
