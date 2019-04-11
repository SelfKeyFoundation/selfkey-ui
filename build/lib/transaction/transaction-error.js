"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var transaction_error_box_1 = require("./transaction-error-box");
var core_1 = require("@material-ui/core");
var styles = {
    bodyText: {
        textAlign: 'justify',
    }
};
exports.TransactionError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, message = _a.message, publicKey = _a.publicKey, closeAction = _a.closeAction;
    return (React.createElement(transaction_error_box_1.default, { publicKey: publicKey, closeAction: closeAction },
        React.createElement(core_1.Typography, { variant: "body2", className: classes.bodyText }, message)));
});
exports.default = exports.TransactionError;
//# sourceMappingURL=transaction-error.js.map