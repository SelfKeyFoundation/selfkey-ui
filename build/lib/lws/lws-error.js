"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSError = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var common_style_1 = require("../common/common-style");
var styles = core_1.createStyles({
    form: common_style_1.default.form,
    lwsError: {
        fontFamily: 'Lato, arial, sans-serif'
    },
    formSubmitRow: {
        marginTop: '15px',
        '& button': {
            marginTop: '30px',
            fontWeight: 700
        }
    },
    supportText: {
        textAlign: 'center',
        lineHeight: '22px',
        fontFamily: 'Lato, arial, sans-serif',
        color: '#C5DCE9',
        padding: '0 0 30px',
        fontSize: '16px'
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
    }
});
exports.LWSError = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, actionButton = _a.actionButton, actionName = _a.actionName, errorName = _a.errorName, actionIcon = _a.actionIcon, supportText = _a.supportText;
    return (React.createElement("div", { className: classes.lwsError },
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