import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { DownloadIcon } from '../icons/download';

const styles = createStyles({
	buttonPrimary: CommonStyle.buttonPrimary,
	buttonSecondary: CommonStyle.buttonSecondary,
	form: CommonStyle.form,
	formSubmitRow: {
		marginTop: '15px',
		'& button': {
			marginTop: '30pxd',
			fontWeight: 700
		}
	},
	supportText: {
		textAlign: 'center',
		lineHeight: '22px',
		fontFamily: 'Lato, arial, sans-serif',
		color: '#C5DCE9',
		padding: '0 0 30px',
		fontSize: '16px'
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
	}
});

export type LWSExtensionErrorProps = {
	installExtensionAction?: (event: React.MouseEvent<HTMLElement>) => void;
	children?: any;
};

export const LWSExtensionError = withStyles(styles)(
	({
		classes,
		children,
		installExtensionAction
	}: LWSExtensionErrorProps & WithStyles<typeof styles>) => (
		<div>
			<div className={classes.areaTitle}>
				<DownloadIcon />
				<h2>Action Required</h2>
				<h3>Install Login With SelfKey Browser Extension</h3>
			</div>
			<div className={classes.form}>
				<p className={classes.supportText}>
					Login With SelfKey is a browser extension that allows you to securely login to
					this website through your SelfKey ID and Ethereum address, powered by the
					SelfKey Identity Wallet.
				</p>
				<div className={classes.formSubmitRow}>
					<LWSButton className={classes.buttonPrimary} onClick={installExtensionAction}>
						Install Browser Extension
					</LWSButton>
				</div>
			</div>
		</div>
	)
);

export default LWSExtensionError;
