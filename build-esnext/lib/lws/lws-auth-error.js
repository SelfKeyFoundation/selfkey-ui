import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { ShieldIcon } from '../icons/shield';
import { LWSError } from './lws-error';
const styles = createStyles({
    buttonPrimary: { ...CommonStyle.buttonPrimary, fontWeight: 700 },
    buttonSecondary: { ...CommonStyle.buttonSecondary, fontWeight: 700 }
});
export const LWSAuthError = withStyles(styles)(({ classes, website, retryAction }) => (React.createElement(LWSError, { actionIcon: React.createElement(ShieldIcon, null), actionName: "Authentication Error", errorName: `We can't connect you with ${website.name}`, supportText: "There\u2019s seems to be a problem with the authentication process at the moment. Please try again!", actionButton: React.createElement(LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry") })));
export default LWSAuthError;
//# sourceMappingURL=lws-auth-error.js.map