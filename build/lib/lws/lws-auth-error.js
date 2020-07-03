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
export var LWSAuthError = withStyles(styles)(function (_a) {
    var classes = _a.classes, website = _a.website, retryAction = _a.retryAction;
    return (React.createElement(LWSError, { actionIcon: React.createElement(ShieldIcon, null), actionName: "Authentication Error", errorName: "We can't connect you with " + website.name, supportText: "There\u2019s seems to be a problem with the authentication process at the moment. Please try again!", actionButton: React.createElement(LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry") }));
});
export default LWSAuthError;
//# sourceMappingURL=lws-auth-error.js.map