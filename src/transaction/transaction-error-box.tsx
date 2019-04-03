import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';


import WarningShieldIcon from '../icons/warning-shield';

import { Grid } from '@material-ui/core';
import Copy from '../common/copy';
import ModalCloseIcon from '../icons/modal-close';

const styles: StyleSheet = {
  boxWrapper: {
    position: 'relative',
    width: '781px',
    border: '1px solid #303C49',
    borderRadius: '4px',
    backgroundColor: '#262F39',
    boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'

  },
  header: {
    height: '65px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: '#2A3540',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'inset 0 -1px 0 0 #374758, 1px 0 0 0 rgba(118,128,147,0.2), 0 4px 2px 0 rgba(76,76,76,0.2)'
  },
  headerTitle: {
    paddingLeft: '29px',
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: '18px',
    lineHeight: '26px'
  },
  bodyContainer: {
    paddingTop: '30px',
    paddingLeft: '45px',
    paddingRight: '30px',
    paddingBottom: '53px'
  },
  txFailedText: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: '24px',
    lineHeight: '30px',
    paddingBottom: '17px'
  },
  yourAddressTitle: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: '16px',
    lineHeight: '20px'
  },
  publicKey: {
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'Lato',
    fontSize: '14px',
    color: '#93b0c1'
  },
  divider: {
    width: '100%',
    marginTop: '31px',
    marginBottom: '20px',
    height: '1px',
    transform: 'scaleY(-1)',
    backgroundColor: '#475768'

  },
  closeDialogIconWrapper: {
    position: 'absolute',
    left: '-15px',
    top: 0,
    cursor: 'pointer'
  }
};

export type TransactionErrorBoxProps = {
  publicKey: string,
  closeAction?: ((event: React.MouseEvent<HTMLElement>) => void)
}

export const TransactionErrorBox = injectSheet(styles)<TransactionErrorBoxProps>(({ classes, children, publicKey, closeAction }) => (
  <div className={classes.boxWrapper}>
    <div className={classes.header}>
      <span className={classes.headerTitle}> Transaction Confirmation </span>
      <div className={classes.closeDialogIconWrapper} onClick={closeAction}>
        <ModalCloseIcon />
      </div>
    </div>
    <Grid container className={classes.bodyContainer} direction='row' justify='flex-start' alignItems='flex-start'>
      <Grid container xs={2}>
        <WarningShieldIcon />
      </Grid>
      <Grid container xs={10}>
        <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
          <div className={classes.txFailedText}>Transaction Failed </div>
          {children}
          <span className={classes.divider}> </span>
          <div>
            <span className={classes.yourAddressTitle}> Your Address: </span>
            <div>
              <span className={classes.publicKey}>
                {publicKey}
              </span>
              <Copy text={publicKey} />
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  </div>
));

export default TransactionErrorBox;
