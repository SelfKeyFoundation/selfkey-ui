import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { WalletIcon } from '../icons/wallet';
import { LWSError } from './lws-error';

const styles: StyleSheet = {
	buttonPrimary: { ...CommonStyle.buttonPrimary, fontWeight: 700 },
	buttonSecondary: { ...CommonStyle.buttonSecondary, fontWeight: 700 },
};

export type LWSWalletConnectionErrorProps = {
	downloadWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void);
	retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const LWSWalletConnectionError = injectSheet(styles)<LWSWalletConnectionErrorProps>(
	({ classes, downloadWalletAction, retryAction }) => (
		<LWSError
			actionIcon={<WalletIcon />}
			actionName="Action Required"
			errorName="Install & Open The SelfKey Identity Wallet"
			supportText="The SelfKey Identity Wallet is required to securely authenticate with this website. Please download and open the SelfKey Identity Wallet to proceed."
			actionButton={
				<div>
					<LWSButton className={classes.buttonPrimary} onClick={downloadWalletAction}>
						Download The SelfKey Wallet
					</LWSButton>
					<LWSButton className={classes.buttonSecondary} onClick={retryAction}>
						Retry
					</LWSButton>
				</div>
			}
		/>
	)
);

export default LWSWalletConnectionError;
