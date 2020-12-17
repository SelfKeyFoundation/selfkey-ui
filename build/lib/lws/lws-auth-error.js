"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSAuthError = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var lws_button_1 = require("./lws-button");
var common_style_1 = require("../common/common-style");
var shield_1 = require("../icons/shield");
var lws_error_1 = require("./lws-error");
var styles = core_1.createStyles({
    buttonPrimary: __assign(__assign({}, common_style_1.default.buttonPrimary), { fontWeight: 700 }),
    buttonSecondary: __assign(__assign({}, common_style_1.default.buttonSecondary), { fontWeight: 700 })
});
exports.LWSAuthError = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, website = _a.website, retryAction = _a.retryAction;
    return (React.createElement(lws_error_1.LWSError, { actionIcon: React.createElement(shield_1.ShieldIcon, null), actionName: "Authentication Error", errorName: "We can't connect you with " + website.name, supportText: "There\u2019s seems to be a problem with the authentication process at the moment. Please try again!", actionButton: React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry") }));
});
exports.default = exports.LWSAuthError;
//# sourceMappingURL=lws-auth-error.js.map