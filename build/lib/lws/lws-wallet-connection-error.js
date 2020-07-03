var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { WalletIcon } from '../icons/wallet';
import { LWSError } from './lws-error';
var styles = createStyles({
    buttonPrimary: __assign(__assign({}, CommonStyle.buttonPrimary), { fontWeight: 700 }),
    buttonSecondary: __assign(__assign({}, CommonStyle.buttonSecondary), { fontWeight: 700 }),
});
export var LWSWalletConnectionError = withStyles(styles)(function (_a) {
    var classes = _a.classes, downloadWalletAction = _a.downloadWalletAction, retryAction = _a.retryAction;
    return (React.createElement(LWSError, { actionIcon: React.createElement(WalletIcon, null), actionName: "Action Required", errorName: "Install & Open The SelfKey Identity Wallet", supportText: "The SelfKey Identity Wallet is required to securely authenticate with this website. Please download and open the SelfKey Identity Wallet to proceed.", actionButton: React.createElement("div", null,
            React.createElement(LWSButton, { className: classes.buttonPrimary, onClick: downloadWalletAction }, "Download The SelfKey Wallet"),
            React.createElement(LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry")) }));
});
export default LWSWalletConnectionError;
//# sourceMappingURL=lws-wallet-connection-error.js.map