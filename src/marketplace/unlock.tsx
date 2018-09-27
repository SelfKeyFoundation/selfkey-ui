import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Grid } from '@material-ui/core';
import { P } from '../typography/paragraph';
import ExchangeIcon from '../icons/exchange-large';
import { TransactionFeeSelector } from '../transaction/transaction-fee-selector';

const styles: StyleSheet = {
	text: {
		fontSize: '18px',
		lineHeight: '30px',
	},
};

export type UnlockProps = {
	amount?: number;
	token?: string;
	days?: number;
	minGasPrice: number;
	maxGasPrice: number;
	gasLimit: number;
	fiat: string;
	fiatRate: number;
	onTransactionFeeChange: (value: number) => void;
};

export const Unlock = injectSheet(styles)<UnlockProps>(
	({
		classes,
		amount = 25,
		token = 'KEY',
		days = 30,
		minGasPrice,
		maxGasPrice,
		gasLimit,
		fiat,
		fiatRate,
		onTransactionFeeChange,
	}) => (
		<Grid container direction="row" justify="flex-start" alignItems="flex-start">
			<Grid item xs={2}>
				<ExchangeIcon />
			</Grid>
			<Grid item xs={10}>
				<Grid container direction="column" justify="flex-start" alignItems="flex-start">
					<Grid item>
						<P className={classes.text}>
							A refundable deposit of {amount} {token} tokens is required to unlock this marketplace for{' '}
							{days} days.
						</P>
					</Grid>
					<Grid item>
						<TransactionFeeSelector
							minGasPrice={minGasPrice}
							maxGasPrice={maxGasPrice}
							gasLimit={gasLimit}
							fiat={fiat}
							fiatRate={fiatRate}
							onChange={onTransactionFeeChange}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
);

export default Unlock;
