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
exports.ClearIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var ClearIcon = function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '34px', height: props.height || '20px' } }, props, { viewBox: props.viewBox || '0 0 34 20' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "\uD83D\uDEE0-Wallet-Setup", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "118---Trezor---Enter-PIN", transform: "translate(-810.000000, -640.000000)" },
            React.createElement("g", { id: "Modal1", transform: "translate(323.000000, 100.000000)" },
                React.createElement("g", { id: "input", transform: "translate(260.000000, 535.000000)" },
                    React.createElement("path", { d: "M243.38,12.6433333 L241.023333,15 L243.38,17.3566667 L241.023333,19.715 L238.666667,17.3566667 L236.308333,19.715 L233.951667,17.3566667 L236.308333,15 L233.951667,12.6433333 L236.308333,10.2866667 L238.666667,12.6433333 L241.023333,10.2866667 L243.38,12.6433333 Z M245.888333,21.6666667 L230.333333,21.6666667 L230.333333,8.33333333 L245.888333,8.33333333 L254.776667,15 L245.888333,21.6666667 Z M247,5 L227,5 L227,25 L247,25 L260.333333,15 L247,5 Z", id: "icon-del-arrow", transform: "translate(243.666667, 15.000000) scale(-1, 1) translate(-243.666667, -15.000000) " }))))))); };
exports.ClearIcon = ClearIcon;
exports.default = exports.ClearIcon;
//# sourceMappingURL=clear.js.map