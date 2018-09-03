"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var common_style_1 = require("../common/common-style");
var styles = {
    form: common_style_1.default.form,
    formSubmitRow: {
        marginTop: '15px',
        '& button': {
            marginTop: '30px',
        },
    },
    supportText: {
        textAlign: 'center',
        lineHeight: '22px',
        fontFamily: 'ProximaNovaSemibold',
        color: '#C5DCE9',
        padding: '0 0 30px',
    },
    areaTitle: {
        textAlign: 'center',
        '& h2': {
            textTransform: 'uppercase',
            fontWeight: 'normal',
            fontSize: '16px',
            padding: '25px 0',
            margin: 0,
            color: '#D97300',
        },
        '& h3': {
            fontWeight: 'normal',
            fontSize: '21px',
            padding: '0 0 45px',
            margin: 0,
            color: '#93B0C1',
        },
    },
};
exports.LWSError = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, actionButton = _a.actionButton, actionName = _a.actionName, errorName = _a.errorName, actionIcon = _a.actionIcon, supportText = _a.supportText;
    return (React.createElement("div", null,
        React.createElement("div", { className: classes.areaTitle },
            actionIcon,
            React.createElement("h2", null, actionName),
            React.createElement("h3", null, errorName)),
        React.createElement("div", { className: classes.form },
            React.createElement("p", { className: classes.supportText }, supportText),
            actionButton ? React.createElement("div", { className: classes.formSubmitRow }, actionButton) : null)));
});
exports.default = exports.LWSError;
//# sourceMappingURL=lws-error.js.map