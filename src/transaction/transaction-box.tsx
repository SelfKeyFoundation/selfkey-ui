import * as React from 'react';
import injectSheet, { StyleSheet, ClassNameMap } from 'react-jss';

import EthereumIcon from '../icons/ethereum';
import SelfkeyIcon from '../icons/selfkey';
import { Grid } from '@material-ui/core'

import CloseDialogIcon from '../icons/close-dialog'

const styles: StyleSheet = {
    transactionBox: {
      padding: '90px 30px 40px 30px',
      borderRadius: '4px',
      backgroundColor: '#262f39',
      border: 'solid 1px #303c49',
      boxShadow: '0 0 16px 1px #15222e',
    },

    iconWrapper: {
      position: 'absolute',
      top: '-32px',
      left: 'calc(50% - 32px)'
    },

    icon: {
      width: '64px !important',
      height: '64px !important'
    },

    closeDialogIconWrapper: {
      position: 'absolute',
      right: '-18px',
      top: '-18px',
      cursor: 'pointer'
    }
};

export type TransactionBoxProps = {
  cryptoCurrency: string,
  closeAction?: ((event: React.MouseEvent<HTMLElement>) => void)
}

const renderIcon = (shortName: string, classes: Partial<ClassNameMap<string>>) => {
	switch (shortName) {
		case 'KEY':
			return (<SelfkeyIcon className={classes.icon}/>);
		case 'ETH':
      return (<EthereumIcon className={classes.icon}/>);
    default:
      return;
	}
};

export const TransactionBox = injectSheet(styles)<TransactionBoxProps>(({classes, children, cryptoCurrency, closeAction}) => (
  <Grid container  className={classes.transactionBox}>
    <Grid item xs={12}>
      <Grid container alignItems='center' direction='row' justify='center'>
        <Grid item xs={12}>
          <div className={classes.closeDialogIconWrapper} onClick={closeAction}>
            <CloseDialogIcon/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.iconWrapper}>
            {renderIcon(cryptoCurrency, classes)}
          </div>
        </Grid>
        <Grid item xs={12} sm={10}>
          <div >
            {children}  
          </div>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
));

export default TransactionBox;
