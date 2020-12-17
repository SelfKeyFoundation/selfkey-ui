import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { WalletIcon } from '../icons/wallet';
import { LWSError } from './lws-error';
const styles = createStyles({
    buttonPrimary: { ...CommonStyle.buttonPrimary, fontWeight: 700 },
    buttonSecondary: { ...CommonStyle.buttonSecondary, fontWeight: 700 }
});
export const LWSWalletConnectionError = withStyles(styles)(({ classes, downloadWalletAction, retryAction }) => (React.createElement(LWSError, { actionIcon: React.createElement(WalletIcon, null), actionName: "Action Required", errorName: "Install & Open The SelfKey Identity Wallet", supportText: "The SelfKey Identity Wallet is required to securely authenticate with this website. Please download and open the SelfKey Identity Wallet to proceed.", actionButton: React.createElement("div", null,
        React.createElement(LWSButton, { className: classes.buttonPrimary, onClick: downloadWalletAction }, "Download The SelfKey Wallet"),
        React.createElement(LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry")) })));
export default LWSWalletConnectionError;
//# sourceMappingURL=lws-wallet-connection-error.js.map