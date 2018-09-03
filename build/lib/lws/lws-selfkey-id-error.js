"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var lws_button_1 = require("./lws-button");
var common_style_1 = require("../common/common-style");
var shield_1 = require("../icons/shield");
var lws_error_1 = require("./lws-error");
var styles = {
    buttonPrimary: common_style_1.default.buttonPrimary,
    buttonSecondary: common_style_1.default.buttonSecondary,
};
exports.LWSSelfkeyIdError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, retryAction = _a.retryAction;
    return (React.createElement(lws_error_1.LWSError, { actionIcon: React.createElement(shield_1.ShieldIcon, null), actionName: "Action Required", errorName: "Create & Unlock Your SelfKey ID", supportText: "A SelfKey ID is required to securely authenticate your identity with this website. Please create one in the SelfKey Identity Wallet and keep it open to proceed.", actionButton: React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry") }));
});
exports.default = exports.LWSSelfkeyIdError;
//# sourceMappingURL=lws-selfkey-id-error.js.map