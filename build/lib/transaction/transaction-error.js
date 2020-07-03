import * as React from 'react';
import { Typography, withStyles, createStyles } from '@material-ui/core';
import TransactionErrorBox from './transaction-error-box';
var styles = createStyles({
    bodyText: {
        textAlign: 'justify',
    }
});
export var TransactionError = withStyles(styles)(function (_a) {
    var classes = _a.classes, message = _a.message, publicKey = _a.publicKey, closeAction = _a.closeAction;
    return (React.createElement(TransactionErrorBox, { publicKey: publicKey, closeAction: closeAction },
        React.createElement(Typography, { variant: "body2", className: classes.bodyText }, message)));
});
export default TransactionError;
//# sourceMappingURL=transaction-error.js.map