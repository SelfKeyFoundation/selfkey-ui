import * as React from 'react';
import { Typography, withStyles, createStyles } from '@material-ui/core';
import TransactionErrorBox from './transaction-error-box';
const styles = createStyles({
    bodyText: {
        textAlign: 'justify',
    }
});
export const TransactionError = withStyles(styles)(({ classes, message, publicKey, closeAction }) => (React.createElement(TransactionErrorBox, { publicKey: publicKey, closeAction: closeAction },
    React.createElement(Typography, { variant: "body2", className: classes.bodyText }, message))));
export default TransactionError;
//# sourceMappingURL=transaction-error.js.map