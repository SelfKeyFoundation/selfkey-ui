import * as React from 'react';
import * as _ from 'lodash';
import { withStyles, createStyles } from '@material-ui/styles';
import { IDIcon } from '../icons/id';
import { ProfileIcon } from '../icons/profile';
import { StickIcon } from '../icons/stick';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { Typography } from '@material-ui/core';
export const styles = createStyles({
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
            textTransform: 'uppercase',
            padding: '0px 0px 5px 0px',
            fontFamily: 'Lato, arial, sans-serif'
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
            background: '#374a5a'
        },
        '& svg': {
            padding: '0px 15px 0px 0px'
        },
        fontFamily: 'Lato, arial, sans-serif',
        fontWeight: 700,
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
        fontFamily: 'Lato, arial, sans-serif',
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
        height: '50px',
        fontWeight: 700
    },
    buttonPrimary: { ...CommonStyle.buttonPrimary, fontWeight: 700 },
    buttonSecondary: { ...CommonStyle.buttonSecondary, fontWeight: 700 },
    selected: {
        border: `2px solid #1CA9BA`
    },
    supportText: {
        textAlign: 'center',
        lineHeight: '22px',
        fontFamily: 'Lato, arial, sans-serif',
        color: '#C5DCE9',
        padding: '0 0 30px',
        fontSize: '16px'
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
});
export class LWSSelectWalletComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHardwareWallet: false,
            wallet: null,
            password: ''
        };
    }
    componentDidMount() {
        if (this.props.wallets && this.props.wallets.length && !this.state.wallet) {
            this.selectWallet();
        }
    }
    componentDidUpdate() {
        if (this.props.wallets && this.props.wallets.length && !this.state.wallet) {
            this.selectWallet();
        }
    }
    toggleIsHardwallet(isHardwareWallet) {
        return this.setState({ isHardwareWallet });
    }
    selectWallet(publicKey) {
        const { wallets } = this.props;
        if (!publicKey) {
            publicKey = wallets[0].publicKey;
        }
        const wallet = _.find(wallets, { publicKey }) || null;
        this.setState({ wallet, password: '' });
        return wallet;
    }
    setWallet(event) {
        this.selectWallet(event.target.value);
    }
    setPassword(event) {
        this.setState({ ...this.state, password: event.target.value });
    }
    login() {
        const { loginAction } = this.props;
        let { wallet } = this.state;
        const { password } = this.state;
        if (!wallet || !wallet.publicKey) {
            wallet = this.selectWallet();
        }
        if (!loginAction || !wallet) {
            return;
        }
        if (!wallet.unlocked && !password) {
            return;
        }
        return loginAction(wallet, password);
    }
    renderHardwareWallet() {
        const { classes } = this.props;
        return (React.createElement("div", null,
            React.createElement("p", { className: classes.supportText }, "Ledger and Trezor support is coming soon")));
        // return (
        // 	<div>
        // 		<p className={classes.supportText}>
        // 			Make sure your Ledger or Trezor device is plugged in via USB. Press the Connect to hardware
        // 			wallet button below.
        // 		</p>
        // 		<div>
        // 			<LWSButton className={classes.buttonPrimary} onClick={connectToHardwareWalletAction}>
        // 				Connect to hardware wallet
        // 			</LWSButton>
        // 			<LWSButton className={classes.buttonSecondary}>Retry</LWSButton>
        // 		</div>
        // 	</div>
        // );
    }
    renderSelection() {
        const { classes, passwordError, wallets } = this.props;
        const { wallet, password, isHardwareWallet } = this.state;
        const publicKey = wallet ? wallet.publicKey : '';
        if (isHardwareWallet) {
            return this.renderHardwareWallet();
        }
        else {
            return (React.createElement("div", null,
                React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Choose an existing ETH Address"),
                    React.createElement("select", { id: "eth-address", className: classes.formControl, onChange: evt => this.setWallet(evt), value: publicKey }, wallets
                        .filter(w => w.profile === 'local')
                        .map((w, index) => {
                        return (React.createElement("option", { key: index, value: w.publicKey },
                            "0x",
                            w.publicKey.replace('0x', '')));
                    }))),
                wallet && wallet.unlocked ? null : (React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Password"),
                    React.createElement("input", { type: "password", ref: "password", id: "password", className: `${classes.formControl} ${passwordError ? classes.validationError : ''}`, onChange: evt => this.setPassword(evt), placeholder: "Enter your password", value: password }),
                    passwordError && (React.createElement("div", { className: classes.validationMsg }, "Incorrect Password. Please try again.")))),
                React.createElement("div", { className: classes.formSubmitRow },
                    React.createElement(LWSButton, { className: classes.buttonPrimary, onClick: () => this.login() }, "Log in"))));
        }
    }
    render() {
        const { classes } = this.props;
        const { isHardwareWallet } = this.state;
        return (React.createElement("div", null,
            React.createElement("div", { className: classes.areaTitle },
                React.createElement(IDIcon, null),
                React.createElement(Typography, { variant: "h2", className: classes.title }, "Verify Ownership Of Your SelfKey ID")),
            React.createElement("div", { className: classes.form },
                React.createElement("div", { className: `${classes.formGroup} ${classes.radioReplace}` },
                    React.createElement("button", { className: `${classes.buttonTertiary} ${!isHardwareWallet ? classes.selected : ''}`, onClick: () => this.toggleIsHardwallet(false) },
                        React.createElement(ProfileIcon, null),
                        " ",
                        React.createElement("span", null, "ETH Address")),
                    React.createElement("button", { className: `${classes.buttonTertiary} ${isHardwareWallet ? classes.selected : ''}`, onClick: () => this.toggleIsHardwallet(true) },
                        React.createElement(StickIcon, null),
                        " ",
                        React.createElement("span", null, "Trezor/Ledger"))),
                this.renderSelection())));
    }
}
export const LWSSelectWallet = withStyles(styles)(LWSSelectWalletComponent);
export default LWSSelectWallet;
//# sourceMappingURL=lws-select-wallet.js.map