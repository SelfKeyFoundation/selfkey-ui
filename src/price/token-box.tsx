import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Grid } from '@material-ui/core'

import { TransferIcon } from '../icons/transfer';
import { Copy } from '../common/copy';

const styles: StyleSheet = {

    tokenBox: {
      minWidth: '320px',
      position: 'relative',
      padding: '20px 20px 8px 20px',
      borderRadius: '4px',
      backgroundColor: '#262f39',
      border: 'solid 1px #303c49',
      height: '186px'
    },

    tokenBoxBody: {
      marginTop: '30px'
    },

    tokenBoxFooter: {
      bottom: '7px',
      marginTop: '10px'
    },

    horizontalDivider: {
      height: '1px',
      backgroundColor: '#303c49'
    },

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

    transferButton: {
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      outline: 'none'
    },

    cryptoCurrencyName: {
      fontFamily: 'ProximaNovaRegular',
      fontSize: '18px',
      color: '#ffffff'   
    },

    cryptoCurrencyShort: {
      marginTop: '4px',
      opacity: 0.7,
      fontFamily: 'ProximaNovaRegular',
      fontSize: '14px',
      letterSpacing: '1px',
      color: '#ffffff'
    }
};

export type TokenBoxProps = {
    cryptoCurrencyShort: string,
    cryptoCurrencyName: string,
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>,
    publicKey: string,
    transferAction?: ((event: React.MouseEvent<HTMLElement>) => void)
}

export const TokenBox = injectSheet(styles)<TokenBoxProps>(({classes, children, cryptoCurrencyShort, cryptoCurrencyName, CryptoCurrencyIconComponent, publicKey, transferAction }) => (
   <div className={classes.tokenBox}>
    <Grid container>
      <Grid item xs={6} sm={2}>
        <CryptoCurrencyIconComponent/>
      </Grid>
      <Grid item xs={12} sm={9}>
        <div className={classes.cryptoCurrencyName}>{cryptoCurrencyName}</div>
        <div className={classes.cryptoCurrencyShort} >{cryptoCurrencyShort}</div>
      </Grid>
      <Grid item xs={6} sm={1}>
        <button className={classes.transferButton} onClick={transferAction}>
          <TransferIcon/>
        </button>
      </Grid>
    </Grid>
    <Grid className={classes.tokenBoxBody}>
      {children}
    </Grid>
    <Grid className={classes.tokenBoxFooter}>
        <div className={classes.horizontalDivider}></div>
    </Grid> 
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
  </div>
));

export default TokenBox;
