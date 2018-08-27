import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { ShieldIcon } from '../icons/shield';


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

export type LWSSelfkeyIdErrorProps = {
  retryAction?: ((event: React.MouseEvent<HTMLElement>) => void),
};

export const LWSSelfkeyIdError = injectSheet(styles)<LWSSelfkeyIdErrorProps>(({classes, children, retryAction}) => (
  <div>
      <div className={classes.areaTitle}>
          <ShieldIcon/>
          <h2>Action Required</h2>
          <h3>Create & Unlock Your SelfKey ID</h3>
      </div>
      <div className={classes.form}>
        <p className={classes.supportText}>
          A SelfKey ID is required to securely authenticate your identity with this website. Please create one in the SelfKey Identity Wallet and keep it open to proceed. 
        </p>
        <div className={classes.formSubmitRow}>
            <LWSButton className={classes.buttonSecondary} onClick={retryAction}>Retry</LWSButton>
        </div>
      </div>
  </div>
));

export default LWSSelfkeyIdError;
