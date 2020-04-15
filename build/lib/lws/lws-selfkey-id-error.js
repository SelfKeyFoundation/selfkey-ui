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
var React = require("react");
var react_jss_1 = require("react-jss");
var lws_button_1 = require("./lws-button");
var common_style_1 = require("../common/common-style");
var shield_1 = require("../icons/shield");
var lws_error_1 = require("./lws-error");
var styles = {
    buttonPrimary: __assign({}, common_style_1.default.buttonPrimary, { fontWeight: 700 }),
    buttonSecondary: __assign({}, common_style_1.default.buttonSecondary, { fontWeight: 700 }),
};
exports.LWSSelfkeyIdError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, retryAction = _a.retryAction;
    return (React.createElement(lws_error_1.LWSError, { actionIcon: React.createElement(shield_1.ShieldIcon, null), actionName: "Action Required", errorName: "Create & Unlock Your SelfKey ID", supportText: "A SelfKey ID is required to securely authenticate your identity with this website. Please create one in the SelfKey Identity Wallet and keep it open to proceed.", actionButton: React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry") }));
});
exports.default = exports.LWSSelfkeyIdError;
//# sourceMappingURL=lws-selfkey-id-error.js.map