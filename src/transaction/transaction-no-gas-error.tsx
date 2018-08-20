import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { TransactionBox } from './transaction-box';
import { H2 } from '../typography/headings';
import { P } from '../typography/paragraph';
import { A } from '../typography/link';
import { Copy } from '../common/copy';

const styles: StyleSheet = {
	header: {
		textAlign: 'center',
	},

	body: {
		textAlign: 'justify',
	},

	publicKeyWrapper: {
		textAlign: 'center',
	},

	publicKey: {
		fontFamily: 'ProximaNovaRegular',
		color: '#93b0c1',
	},
};

export type TransactionNoGasErrorProps = {
	cryptoCurrency: string;
	publicKey: string;
	closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
	openLink?: ((link: string) => void);
};

export const TransactionNoGasError = injectSheet(styles)<TransactionNoGasErrorProps>(
	({ classes, children, cryptoCurrency, publicKey, openLink, closeAction }) => {
		const gasExplanationUrl = 'https://help.selfkey.org/article/87-how-does-gas-impact-transaction-speed';
		const handleLinkClick = (event: React.MouseEvent<HTMLElement>) => {
			event.preventDefault();
			if (!openLink) {
				return;
			}
			openLink(gasExplanationUrl);
		};
		return (
			<TransactionBox cryptoCurrency={cryptoCurrency} closeAction={closeAction}>
				<H2 className={classes.header}>Transaction Failed</H2>
				<div className={classes.body}>
					<P>
						You don't have enough Ethereum (ETH) to pay for the network transaction fee. Please transfer
						some ETH to this address and try again. Your ETH address of this wallet is listed below. To
						learn more about transaction fees, click{' '}
						<A href={gasExplanationUrl} onClick={handleLinkClick}>
							here
						</A>
						.
					</P>
					<div className={classes.publicKeyWrapper}>
						<span className={classes.publicKey}>{publicKey}</span>
						<Copy text={publicKey} />
					</div>
				</div>
			</TransactionBox>
		);
	}
);

export default TransactionNoGasError;
