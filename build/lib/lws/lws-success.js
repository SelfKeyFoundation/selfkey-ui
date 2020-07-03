"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSSuccess = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var success_1 = require("../icons/success");
var styles = core_1.createStyles({
    lwsSuccess: {
        fontFamily: 'Lato, arial, sans-serif',
    },
    areaTitle: {
        textAlign: 'center',
        '& h2': {
            textTransform: 'uppercase',
            fontWeight: 'normal',
            fontSize: '16px',
            padding: '25px 0',
            margin: 0,
            color: '#23E6FE',
        },
        '& h3': {
            fontWeight: 'normal',
            fontSize: '21px',
            padding: '0 0 45px',
            margin: 0,
            color: '#93B0C1',
        },
    },
});
exports.LWSSuccess = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes;
    return (React.createElement("div", { className: classes.lwsSuccess },
        React.createElement("div", { className: classes.areaTitle },
            React.createElement(success_1.SuccessIcon, null),
            React.createElement("h2", null, "Success"),
            React.createElement("h3", null, "You are now logged in through your SelfKey ID."))));
});
exports.default = exports.LWSSuccess;
//# sourceMappingURL=lws-success.js.map