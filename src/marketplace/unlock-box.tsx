import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Grid } from '@material-ui/core';
import { H2 } from '../typography/headings';
import { UnlockIcon } from '../icons/unlock';

const styles: StyleSheet = { 
};

export type UnlockBoxProps = {
}

export const UnlockBox = injectSheet(styles)<UnlockBoxProps>(({classes, children}) => (
  <Grid container>
    <Grid item id='header'>
      <H2><UnlockIcon/> Unlock This Marketplace: Crypto Exchanges</H2>
    </Grid>
    <Grid item id='body'>
      {children}  
    </Grid>
  </Grid>
));

export default UnlockBox;
