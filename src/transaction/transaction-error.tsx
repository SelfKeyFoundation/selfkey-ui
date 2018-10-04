import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { P } from '../typography/paragraph';
import TransactionErrorBox from './transaction-error-box';

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
				<P className={classes.bodyText}>{message}</P>
			</TransactionErrorBox>
		);
	}
);

export default TransactionError;
