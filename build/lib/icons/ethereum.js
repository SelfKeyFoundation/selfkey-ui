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
exports.EthereumIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({});
exports.EthereumIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '44px', height: props.height || '44px' } }, props, { viewBox: props.viewBox || '0 0 44 44' }),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("rect", { width: "44", height: "44", fill: "#9418DC", rx: "9" }),
        React.createElement("path", { fill: "#FFF", fillRule: "nonzero", d: "M11.37 20.286l10.027-4.1 9.719 4.205L21.382 5.5 11.37 20.286zm.031 4.55l10.012 5.627 10.212-5.627L21.505 38.5 11.401 24.836zm10.043-6.645l10.15 4.385-10.15 5.508L11 22.456l10.444-4.265z" })))); });
exports.default = exports.EthereumIcon;
//# sourceMappingURL=ethereum.js.map