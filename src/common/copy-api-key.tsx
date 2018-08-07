import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import Copy from './copy';
import { Grid } from '@material-ui/core'

const styles: StyleSheet = {
  addressBox: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  publicKey: {
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'ProximaNovaRegular',
    fontSize: '12px',
    color: '#93b0c1'
  },
};

export type CopyApiKeyProps = {
  publicKey: string,
}

export const CopyApiKey = injectSheet(styles)<CopyApiKeyProps>(({classes, children, publicKey}) => (
  <Grid container className={classes.addressBox}>
    <Grid item xs={12} sm={10}>
      <span className={classes.publicKey}>
        {publicKey}
      </span>
    </Grid>
    <Grid item xs={12} sm={2}>

      <Copy text={publicKey}>
      </Copy>
      
    </Grid>
  </Grid>
));

export default CopyApiKey;
