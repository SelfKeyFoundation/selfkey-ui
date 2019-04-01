"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var headings_1 = require("../typography/headings");
var close_button_1 = require("../icons/close-button");
var selfkey_dark_theme_1 = require("../theme/selfkey-dark-theme");
var styles = {
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
        position: 'absolute',
        top: '-18px',
        right: '-18px',
    },
    title: {
        color: '#C5DCE9',
        fontSize: '24px',
        fontWeight: 'normal',
        margin: '0',
        padding: '0 0 0 25px'
    }
};
exports.LWSModalHeader = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, closeAction = _a.closeAction;
    return (React.createElement("div", { className: classes.root },
        React.createElement(selfkey_dark_theme_1.SelfkeyLogo, { style: { width: '50px', height: '43px' } }),
        React.createElement(headings_1.H1, { className: classes.title }, "Login with SelfKey"),
        React.createElement("a", { className: classes.closeButton, onClick: closeAction },
            React.createElement(close_button_1.CloseButtonIcon, null))));
});
exports.default = exports.LWSModalHeader;
//# sourceMappingURL=lws-modal-header.js.map