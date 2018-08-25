import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { WalletIcon } from '../icons/wallet';


const styles: StyleSheet = {
  buttonPrimary: CommonStyle.buttonPrimary,

  buttonSecondary: CommonStyle.buttonSecondary,

  form: CommonStyle.form,

  formSubmitRow: {
    marginTop: '15px',
    '& button': {
      marginTop: '30px'
    }
  },

  supportText: {
    textAlign: 'center',
    lineHeight: '22px',
    fontFamily: 'ProximaNovaSemibold',
    color: '#C5DCE9',
    padding: '0 0 30px'
  },

  areaTitle: {
    textAlign: 'center',
    '& h2': {
      textTransform: 'uppercase',
      fontWeight: 'normal',
      fontSize: '16px',
      padding: '25px 0',
      margin: 0,
      color: '#D97300'
    },
    '& h3': {
      fontWeight: 'normal',
      fontSize: '21px',
      padding: '0 0 45px',
      margin: 0,
      color: '#93B0C1'
    }
  },
};

export type LWSWalletConnectionErrorProps = {
  downloadWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void),
  retryAction?: ((event: React.MouseEvent<HTMLElement>) => void),
};

export const LWSWalletConnectionError = injectSheet(styles)<LWSWalletConnectionErrorProps>(({classes, children, downloadWalletAction, retryAction}) => (
  <div>
      <div className={classes.areaTitle}>
          <WalletIcon/>
          <h2>Action Required</h2>
          <h3>Install & Open The SelfKey Identity Wallet</h3>
      </div>
      <div className={classes.form}>
        <p className={classes.supportText}>
            The SelfKey Identity Wallet is required to securely authenticate with this website. Please download and open the SelfKey Identity Wallet to proceed. 
        </p>
        <div className={classes.formSubmitRow}>
            <LWSButton className={classes.buttonPrimary} onClick={downloadWalletAction}>Download The SelfKey Wallet</LWSButton>
            <LWSButton className={classes.buttonSecondary} onClick={retryAction}>Retry</LWSButton>
        </div>
      </div>
  </div>
));

export default LWSWalletConnectionError;
