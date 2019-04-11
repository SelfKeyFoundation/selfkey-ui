import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import TransactionErrorBox from './transaction-error-box';
import { Typography } from '@material-ui/core';

const styles: StyleSheet = {
	bodyText: {
		textAlign: 'justify',
	}
};

export type TransactionNoGasErrorProps = {
	publicKey: string;
	message: string;
	closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const TransactionError = injectSheet(styles)<TransactionNoGasErrorProps>(
	({ classes, message, publicKey, closeAction }) => {
		return (
			<TransactionErrorBox publicKey={publicKey} closeAction={closeAction}>
				<Typography variant="body2" className={classes.bodyText}>{message}</Typography>
			</TransactionErrorBox>
		);
	}
);

export default TransactionError;
