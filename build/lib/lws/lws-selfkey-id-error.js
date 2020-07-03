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
import { ShieldIcon } from '../icons/shield';
import { LWSError } from './lws-error';
var styles = createStyles({
    buttonPrimary: __assign(__assign({}, CommonStyle.buttonPrimary), { fontWeight: 700 }),
    buttonSecondary: __assign(__assign({}, CommonStyle.buttonSecondary), { fontWeight: 700 }),
});
export var LWSSelfkeyIdError = withStyles(styles)(function (_a) {
    var classes = _a.classes, retryAction = _a.retryAction;
    return (React.createElement(LWSError, { actionIcon: React.createElement(ShieldIcon, null), actionName: "Action Required", errorName: "Create & Unlock Your SelfKey ID", supportText: "A SelfKey ID is required to securely authenticate your identity with this website. Please create one in the SelfKey Identity Wallet and keep it open to proceed.", actionButton: React.createElement(LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry") }));
});
export default LWSSelfkeyIdError;
//# sourceMappingURL=lws-selfkey-id-error.js.map