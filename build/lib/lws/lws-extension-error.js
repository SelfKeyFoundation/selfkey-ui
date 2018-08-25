"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var lws_button_1 = require("./lws-button");
var common_style_1 = require("../common/common-style");
var download_1 = require("../icons/download");
var styles = {
    buttonPrimary: common_style_1.default.buttonPrimary,
    buttonSecondary: common_style_1.default.buttonSecondary,
    form: common_style_1.default.form,
    formSubmitRow: {
        marginTop: '15px',
        '& button': {
            marginTop: '30px'
        }
    },
    supportText: {
        textAlign: 'center',
        lineHeight: '22px',
        fontFamily: 'ProximaNovaSemibold',
        color: '#C5DCE9',
        padding: '0 0 30px'
    },
    areaTitle: {
        textAlign: 'center',
        '& h2': {
            textTransform: 'uppercase',
            fontWeight: 'normal',
            fontSize: '16px',
            padding: '25px 0',
            margin: 0,
            color: '#D97300'
        },
        '& h3': {
            fontWeight: 'normal',
            fontSize: '21px',
            padding: '0 0 45px',
            margin: 0,
            color: '#93B0C1'
        }
    },
};
exports.LWSExtensionError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, installExtensionAction = _a.installExtensionAction;
    return (React.createElement("div", null,
        React.createElement("div", { className: classes.areaTitle },
            React.createElement(download_1.DownloadIcon, null),
            React.createElement("h2", null, "Action Required"),
            React.createElement("h3", null, "Install Login With SelfKey Browser Extension")),
        React.createElement("div", { className: classes.form },
            React.createElement("p", { className: classes.supportText }, "Login With SelfKey is a browser extension that allows you to securely login to this website through your SelfKey ID and Ethereum address, powered by the SelfKey Identity Wallet."),
            React.createElement("div", { className: classes.formSubmitRow },
                React.createElement(lws_button_1.LWSButton, { className: classes.buttonPrimary, onClick: installExtensionAction }, "Install Browser Extension")))));
});
exports.default = exports.LWSExtensionError;
//# sourceMappingURL=lws-extension-error.js.map