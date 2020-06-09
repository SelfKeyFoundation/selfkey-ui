"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSModalHeader = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var close_button_1 = require("../icons/close-button");
var selfkey_dark_theme_1 = require("../theme/selfkey-dark-theme");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        position: 'relative',
        background: '#1F2830',
        borderBottom: '1px solid #43505B',
        borderRadius: '3px 3px 0 0',
        padding: '24px 30px',
        display: 'flex',
        alignItems: 'center'
    },
    closeButton: {
        background: 'none',
        border: 'none',
        margin: 0,
        outline: 'none',
        padding: 0,
        position: 'absolute',
        top: '-18px',
        right: '-18px',
    },
    title: {
        color: '#C5DCE9',
        margin: '0',
        padding: '0 0 0 25px'
    }
});
exports.LWSModalHeader = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, closeAction = _a.closeAction;
    return (React.createElement("div", { className: classes.root },
        React.createElement(selfkey_dark_theme_1.SelfkeyLogo, { style: { width: '50px', height: '43px' } }),
        React.createElement(core_2.Typography, { variant: "h1", className: classes.title }, "Login with SelfKey"),
        React.createElement("button", { className: classes.closeButton, onClick: closeAction },
            React.createElement(close_button_1.CloseButtonIcon, null))));
});
exports.default = exports.LWSModalHeader;
//# sourceMappingURL=lws-modal-header.js.map