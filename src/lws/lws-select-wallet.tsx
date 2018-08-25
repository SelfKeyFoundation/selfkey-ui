import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { H2 } from '../typography/headings';
import { IDIcon } from '../icons/id';
import { ProfileIcon } from '../icons/profile';
import { StickIcon } from '../icons/stick';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';

export const styles: StyleSheet = {
  areaTitle: {
    textAlign: 'center'
  },

  title: {
    textTransform: 'uppercase',
    fontWeight: 'normal',
    fontSize: '16px',
    padding: '25px 0px',
    margin: '0px',
    color: '#23E6FE'
  },

  form: CommonStyle.form,

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 0px 30px',
    '&& label': {
      fontSize: '12px',
      color: '#93B0C1',
      textTransform: 'uppercase'
    }
  },

  radioReplace: {
    padding: '20px 0px 45px',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonTertiary: {
    height: '80px',
    padding: '20px',
    boxSizing: 'border-box',
    border: '1px solid #1D505F',
    borderRadius: '4px',
    background: '#293743',
    color: '#fff',
    fontSize: '16px', 
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
      background: '#374a5a',
    },
    maxWidth: 'calc(50% - 15px)',
    width: '100%'
  },

  formControl: {
    width: '100%',
    background: '#202A33',
    color: '#fff',
    border: '1px solid #0DC7DD',
    fontSize: '16px',
    padding: '16px',
    height: '52px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 5px rgba(81, 203, 238, 1)'
    }
  },

  formSubmitRow: {
    marginTop: '15px'
  },

  button: {
    fontSize: '14px',
    lineHeight: '20px',
    padding: '10px',
    height: '50px'  
  },

  buttonPrimary: CommonStyle.buttonPrimary,

  buttonSecondary: CommonStyle.buttonSecondary,

  selected: {
    border: `2px solid #1CA9BA`
  },

  supportText: {
    textAlign: 'center',
    lineHeight: '22px',
    fontFamily: "ProximaNovaSemibold",
    color: '#C5DCE9',
    padding: '0 0 30px'
  },

  validationMsg: {
    display: 'block',
    fontSize: '13px',
    color: '#FE4B61',
    padding: '5px 0 0'
  },

  validationError: {
    border: '1px solid #D0021B',
    color: '#FE4B61',
    '&:focus': {
      boxShadow: '0 0 5px rgba(254, 75, 97, 1)'
    }
  }
};

export type Wallet = {
  publicKey: string
}

export type LWSSelectWalletProps = {
  loginAction?: (publicKey: string, password: string) => void,
  connectToHardwareWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void),
  passwordError?: boolean,
  wallets: Array<Wallet>
};

export type LWSSelectWalletState = {
  isHardwareWallet: boolean,
  publicKey: string,
  password: string
};

export type StyledProps = WithStyles<keyof typeof styles> & LWSSelectWalletProps;
 
export class LWSSelectWalletComponent extends React.Component<StyledProps, LWSSelectWalletState> {

  state = {
    isHardwareWallet: false,
    publicKey: '',
    password: ''
  };

  constructor(props: StyledProps) {
    super(props);
  }

  toggleIsHardwallet(isHardwareWallet: boolean) {
    return this.setState({ isHardwareWallet });
  }

  setWallet(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({...this.state, publicKey: event.target.value})
  }

  setPassword(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({...this.state, password: event.target.value})
  }

  login() {
    const { loginAction } = this.props;
    if (!loginAction) {
      return;
    } 
    
    return loginAction(this.state.publicKey, this.state.password);
  }

  renderSelection() {
    const { classes, connectToHardwareWalletAction, passwordError, wallets } = this.props;

    if (this.state.isHardwareWallet) {
      return (
        <div>
          <p className={classes.supportText}>
              Make sure your Ledger or Trezor device is plugged in via USB. 
              Press the Connect to hardware wallet button below. 
          </p>
          <div>
              <LWSButton className={classes.buttonPrimary} onClick={connectToHardwareWalletAction}>Connect to hardware wallet</LWSButton>
              <LWSButton className={classes.buttonSecondary}>Retry</LWSButton>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className={classes.formGroup}>
            <label>Choose an existing ETH Address</label>
            <select id="eth-address" className={classes.formControl} onChange={this.setWallet}>
              { wallets.map((wallet, index) => {
                  return <option key={index} value={wallet.publicKey}>{wallet.publicKey}</option>
                })
              }
            </select>
          </div>
          <div className={classes.formGroup}>
              <label>Password</label>
              <input type="password" ref='password' id="password" className={`${classes.formControl} ${passwordError? classes.validationError: ''}`} placeholder="Enter your password"/>
              {passwordError &&
                <div className={classes.validationMsg}>Incorrect Password. Please try again.</div>
              }
          </div>
          <div className={classes.formSubmitRow}>
              <LWSButton className={classes.buttonPrimary} onClick={this.login}>Log in</LWSButton>
          </div>
        </div>
      )
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.areaTitle}>
            <IDIcon/>
            <H2 className={classes.title}>Verify Ownership Of Your SelfKey ID</H2>
        </div>
        <div className={classes.form}>
            <div className={`${classes.formGroup} ${classes.radioReplace}`}>
                <button className={`${classes.buttonTertiary} ${!this.state.isHardwareWallet? classes.selected: ''}`} onClick={() => this.toggleIsHardwallet(false)}><ProfileIcon/> <span>ETH Address</span></button>
                <button className={`${classes.buttonTertiary} ${this.state.isHardwareWallet? classes.selected: ''}`} onClick={() => this.toggleIsHardwallet(true)}><StickIcon/> <span>Trezor/Ledger</span></button>
            </div>
            {this.renderSelection()}
        </div>
    </div>
    );
  }
}

export const LWSSelectWallet = injectSheet(styles)(LWSSelectWalletComponent);

export default LWSSelectWallet;
