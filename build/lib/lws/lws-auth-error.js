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
exports.LWSAuthError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, website = _a.website, retryAction = _a.retryAction;
    return (React.createElement(lws_error_1.LWSError, { actionIcon: React.createElement(shield_1.ShieldIcon, null), actionName: "Authentication Error", errorName: "We can't connect you with " + website.name, supportText: "There\u2019s seems to be a problem with the authentication process at the moment. Please try again!", actionButton: React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: retryAction }, "Retry") }));
});
exports.default = exports.LWSAuthError;
//# sourceMappingURL=lws-auth-error.js.map