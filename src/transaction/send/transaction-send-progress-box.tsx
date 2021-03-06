import * as React from 'react';
import { Grid, Typography, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TransactionBox } from '../transaction-box';
import { HourGlassLargeIcon } from '../../icons/hourglass-large';
import { OkayIcon } from '../../icons/okay';
import { NumberFormat } from '../../price/number-format';

const styles = createStyles({
	button: {
		boxSizing: 'border-box',
		height: '45px',
		width: '220px',
		border: '1px solid #0FB8D0',
		borderRadius: '4px',
		background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
		boxShadow:
			'inset -1px 0 0 0 rgba(0,0,0,0.24), 0 2px 2px 0 #07C1DC, 2px 0 2px 0 rgba(0,0,0,0.2)',
		color: '#FFFFFF',
		fontSize: '16px',
		fontWeight: 600,
		letterSpacing: '0.67px',
		lineHeight: '20px',
		textAlign: 'center',
		cursor: 'pointer'
	},
	button2: {
		height: '44px',
		width: '220px',
		border: '2px solid #1CA9BA',
		borderRadius: '3px',
		boxShadow: 'inset 3px 3px 10px 0 rgba(0,0,0,0.1)',
		backgroundColor: 'transparent',
		fontSize: '16px',
		fontWeight: 600,
		letterSpacing: '0.67px',
		lineHeight: '20px',
		textAlign: 'center',
		cursor: 'pointer',
		color: '#1CA9BA'
	},
	actionButtonsContainer: {
		paddingTop: '50px'
	},
	amountContainer: {
		color: '#FFFFFF',
		fontSize: '40px',
		fontWeight: 300,
		lineHeight: '48px'
	},
	amount: {
		paddingRight: '15px'
	},
	address: {
		color: '#FFFFFF',
		fontSize: '20px',
		letterSpacing: '1px',
		lineHeight: '24px'
	},
	sentTo: {
		height: '28px',
		color: '#93B0C1',
		fontSize: '18px',
		lineHeight: '28px'
	}
});

export type TransactionNoGasErrorProps = {
	locale: string;
	cryptoCurrency: string;
	closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
	address: string;
	amount: number;
	transactionHash: string;
	openLink?: (link: string) => void;
	status: string;
};

const handleViewTransaction = (
	event: React.MouseEvent<HTMLElement>,
	openLink: ((link: string) => void) | undefined,
	transactionHash: string
) => {
	event.preventDefault();
	if (!openLink) {
		return;
	}
	openLink(`https://etherscan.io/tx/${transactionHash}`);
};

const renderIcon = (status: string) => {
	if (status === 'Pending') {
		return <HourGlassLargeIcon />;
	} else if (status === 'Sent!') {
		return <OkayIcon />;
	}
	return null;
};

export const TransactionSendProgressBox = withStyles(styles)(
	({
		classes,
		cryptoCurrency,
		closeAction,
		amount,
		address,
		openLink,
		locale,
		status,
		transactionHash
	}: TransactionNoGasErrorProps & WithStyles<typeof styles>) => (
		<TransactionBox cryptoCurrency={cryptoCurrency} closeAction={closeAction}>
			<Grid container direction="row" justify="flex-start" alignItems="flex-start">
				<Grid item xs={2}>
					{renderIcon(status)}
				</Grid>
				<Grid item xs={10}>
					<Grid container direction="column" justify="flex-start" alignItems="flex-start">
						<Grid item id="header">
							<Typography variant="h2">{status}</Typography>
						</Grid>
						<Grid item id="body">
							<Grid
								container
								direction="column"
								justify="flex-start"
								alignItems="flex-start"
								spacing={4}
							>
								<Grid item>
									<Typography variant="h1" className={classes.amountContainer}>
										<Grid container>
											<Grid className={classes.amount} item>
												<NumberFormat
													locale={locale}
													priceStyle="decimal"
													currency={cryptoCurrency}
													value={amount}
													fractionDigits={15}
												/>
											</Grid>
											<Grid item>{cryptoCurrency}</Grid>
										</Grid>
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" className={classes.sentTo}>
										Destination address
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body1" className={classes.address}>
										{address}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{transactionHash && (
						<Grid item>
							<Grid container>
								<Grid
									container
									direction="row"
									justify="flex-start"
									alignItems="flex-start"
									className={classes.actionButtonsContainer}
									spacing={1}
								>
									<Grid item>
										<button
											id="viewTransactionButton"
											className={classes.button}
											onClick={e =>
												handleViewTransaction(e, openLink, transactionHash)
											}
										>
											{' '}
											VIEW TRANSACTION{' '}
										</button>
									</Grid>
									<Grid item>
										<CopyToClipboard text={transactionHash}>
											<button className={classes.button2}>
												{' '}
												COPY TRANSACTION ID{' '}
											</button>
										</CopyToClipboard>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					)}
				</Grid>
			</Grid>
		</TransactionBox>
	)
);

export default TransactionSendProgressBox;
