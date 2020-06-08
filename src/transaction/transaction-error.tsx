import * as React from 'react';
import { Typography, WithStyles, withStyles, createStyles } from '@material-ui/core';
import TransactionErrorBox from './transaction-error-box';

const styles = createStyles({
    bodyText: {
        textAlign: 'justify',
    }
});

export type TransactionNoGasErrorProps = {
    publicKey: string;
    message: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const TransactionError = withStyles(styles)(
    ({ classes, message, publicKey, closeAction }: TransactionNoGasErrorProps & WithStyles<typeof styles>) => (
        <TransactionErrorBox publicKey={publicKey} closeAction={closeAction}>
            <Typography variant="body2" className={classes.bodyText}>{message}</Typography>
        </TransactionErrorBox>
    )
);

export default TransactionError;
