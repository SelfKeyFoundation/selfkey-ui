import * as React from 'react';
import { Typography, WithStyles, withStyles, createStyles } from '@material-ui/core';
import TransactionErrorBox from './transaction-error-box';

const styles = createStyles({
	bodyText: {
		paddingRight: '40px',
		textAlign: 'justify'
	},
	learnMoreText: {
		paddingTop: '15px',
		color: '#93B0C1',
		fontFamily: 'Lato',
		fontSize: '13px',
		lineHeight: '19px'
	},
	learnMoreLink: {
		textDecoration: 'none'
	}
});

export type TransactionNoGasErrorProps = {
	publicKey: string;
	closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
	openLink?: (link: string) => void;
};

export const TransactionNoGasError = withStyles(styles)(
	({
		classes,
		publicKey,
		openLink,
		closeAction
	}: TransactionNoGasErrorProps & WithStyles<typeof styles>) => {
		const gasExplanationUrl =
			'https://help.selfkey.org/article/87-how-does-gas-impact-transaction-speed';
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
					<Typography variant="body1">
						You don't have enough Ethereum (ETH) to pay for the network transaction fee.
						Please transfer some ETH to this address and try again. Your ETH address of
						this wallet is listed below.
					</Typography>
					<div className={classes.learnMoreText}>
						To learn more about transaction fees, click{' '}
						<a
							className={`${classes.learnMoreText}  ${classes.learnMoreLink}`}
							href={gasExplanationUrl}
							onClick={handleLinkClick}
						>
							here.
						</a>
					</div>
				</div>
			</TransactionErrorBox>
		);
	}
);

export default TransactionNoGasError;
