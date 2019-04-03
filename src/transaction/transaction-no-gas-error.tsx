import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { P } from '../typography/paragraph';
import TransactionErrorBox from './transaction-error-box';

const styles: StyleSheet = {
	bodyText: {
		paddingRight: '40px',
		textAlign: 'justify',
	},
	learnMoreText: {
		paddingTop: '15px',
		color: '#93B0C1',
		fontFamily: 'Lato',
		fontSize: '13px',
		lineHeight: '19px'
	},
	learnMoreLink: {
		textDecoration: 'none',
	}
};

export type TransactionNoGasErrorProps = {
	publicKey: string;
	closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
	openLink?: ((link: string) => void);
};

export const TransactionNoGasError = injectSheet(styles)<TransactionNoGasErrorProps>(
	({ classes, children, publicKey, openLink, closeAction }) => {
		const gasExplanationUrl = 'https://help.selfkey.org/article/87-how-does-gas-impact-transaction-speed';
		const handleLinkClick = (event: React.MouseEvent<HTMLElement>) => {
			event.preventDefault();
			if (!openLink) {
				return;
			}
			openLink(gasExplanationUrl);
		};
		return (
			<TransactionErrorBox publicKey={publicKey} closeAction={closeAction}>
				<div className={classes.bodyText}>
					<P>
						You don't have enough Ethereum (ETH) to pay for the network transaction fee.
						Please transfer some ETH to this address and try again. Your ETH address of this wallet is listed below.
					</P>
					<div className={classes.learnMoreText}>
						To learn more about transaction fees, click {' '}
						<a className={`${classes.learnMoreText}  ${classes.learnMoreLink}`} href={gasExplanationUrl} onClick={handleLinkClick}>
							here.
						</a>
					</div>
				</div>
			</TransactionErrorBox>
		);
	}
);

export default TransactionNoGasError;
