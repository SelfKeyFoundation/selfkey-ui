import * as React from 'react';
import * as _ from 'lodash';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { H2 } from '../typography/headings';
import { IDIcon } from '../icons/id';
import { ProfileIcon } from '../icons/profile';
import { StickIcon } from '../icons/stick';
import { LWSButton } from './lws-button';
import { Wallet } from './lws-common';

import CommonStyle from '../common/common-style';

export const styles: StyleSheet = {
	areaTitle: {
		textAlign: 'center',
	},

	title: {
		textTransform: 'uppercase',
		fontWeight: 'normal',
		fontSize: '16px',
		padding: '25px 0px',
		margin: '0px',
		color: '#23E6FE',
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
		},
	},

	radioReplace: {
		padding: '20px 0px 45px',
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		width: '100%',
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
			boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
		},
	},

	formSubmitRow: {
		marginTop: '15px',
	},

	button: {
		fontSize: '14px',
		lineHeight: '20px',
		padding: '10px',
		height: '50px',
	},

	buttonPrimary: CommonStyle.buttonPrimary,

	buttonSecondary: CommonStyle.buttonSecondary,

	selected: {
		border: `2px solid #1CA9BA`,
	},

	supportText: {
		textAlign: 'center',
		lineHeight: '22px',
		fontFamily: 'ProximaNovaSemibold',
		color: '#C5DCE9',
		padding: '0 0 30px',
	},

	validationMsg: {
		display: 'block',
		fontSize: '13px',
		color: '#FE4B61',
		padding: '5px 0 0',
	},

	validationError: {
		border: '1px solid #D0021B',
		color: '#FE4B61',
		'&:focus': {
			boxShadow: '0 0 5px rgba(254, 75, 97, 1)',
		},
	},
};

export type LWSSelectWalletProps = {
	loginAction?: (wallet: Wallet, password: string) => void;
	connectToHardwareWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void);
	passwordError?: boolean;
	wallets: Array<Wallet>;
};

export type LWSSelectWalletState = {
	isHardwareWallet: boolean;
	wallet: Wallet | null;
	password: string;
};

export type StyledProps = WithStyles<keyof typeof styles> & LWSSelectWalletProps;

export class LWSSelectWalletComponent extends React.Component<StyledProps, LWSSelectWalletState> {
	constructor(props: StyledProps) {
		super(props);
		this.state = {
			isHardwareWallet: false,
			wallet: null,
			password: '',
		};
  }
  
  componentDidMount(){
    if (this.props.wallets && this.props.wallets.length && !this.state.wallet) {
			this.selectWallet();
		}
  }

	componentDidUpdate(){
    if (this.props.wallets && this.props.wallets.length && !this.state.wallet) {
			this.selectWallet();
		}
  }

	toggleIsHardwallet(isHardwareWallet: boolean) {
		return this.setState({ isHardwareWallet });
	}

	selectWallet(publicKey?: string) {
		const { wallets } = this.props;

		if (!publicKey) {
			publicKey = wallets[0].publicKey;
		}
		let wallet = _.find(wallets, { publicKey }) || null;
		this.setState({ wallet, password: '' });
		return wallet;
	}

	setWallet(event: React.ChangeEvent<HTMLSelectElement>) {
		this.selectWallet(event.target.value);
	}

	setPassword(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ ...this.state, password: event.target.value });
	}

	login() {
		const { loginAction } = this.props;
		let { wallet, password } = this.state;
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
		return (
			<div>
				<p className={classes.supportText}>Ledger and Trezor support is coming soon</p>
			</div>
		);
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
		} else {
			return (
				<div>
					<div className={classes.formGroup}>
						<label>Choose an existing ETH Address</label>
						<select
							id="eth-address"
							className={classes.formControl}
							onChange={evt => this.setWallet(evt)}
							value={publicKey}
						>
							{wallets.map((wallet, index) => {
								return (
									<option key={index} value={wallet.publicKey}>
										{wallet.publicKey}
									</option>
								);
							})}
						</select>
					</div>
					{wallet && wallet.unlocked ? null : (
						<div className={classes.formGroup}>
							<label>Password</label>
							<input
								type="password"
								ref="password"
								id="password"
								className={`${classes.formControl} ${passwordError ? classes.validationError : ''}`}
								onChange={evt => this.setPassword(evt)}
								placeholder="Enter your password"
								value={password}
							/>
							{passwordError && (
								<div className={classes.validationMsg}>Incorrect Password. Please try again.</div>
							)}
						</div>
					)}
					<div className={classes.formSubmitRow}>
						<LWSButton className={classes.buttonPrimary} onClick={() => this.login()}>
							Log in
						</LWSButton>
					</div>
				</div>
			);
		}
	}

	render() {
		const { classes } = this.props;
		const { isHardwareWallet } = this.state;
		return (
			<div>
				<div className={classes.areaTitle}>
					<IDIcon />
					<H2 className={classes.title}>Verify Ownership Of Your SelfKey ID</H2>
				</div>
				<div className={classes.form}>
					<div className={`${classes.formGroup} ${classes.radioReplace}`}>
						<button
							className={`${classes.buttonTertiary} ${!isHardwareWallet ? classes.selected : ''}`}
							onClick={() => this.toggleIsHardwallet(false)}
						>
							<ProfileIcon /> <span>ETH Address</span>
						</button>
						<button
							className={`${classes.buttonTertiary} ${isHardwareWallet ? classes.selected : ''}`}
							onClick={() => this.toggleIsHardwallet(true)}
						>
							<StickIcon /> <span>Trezor/Ledger</span>
						</button>
					</div>
					{this.renderSelection()}
				</div>
			</div>
		);
	}
}

export const LWSSelectWallet = injectSheet(styles)(LWSSelectWalletComponent);

export default LWSSelectWallet;
