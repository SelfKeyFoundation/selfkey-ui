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
exports.TickIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        height: '9px !important'
    }
});
exports.TickIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({}, props, { viewBox: '0 0 11 9' }),
    React.createElement("path", { fill: "#7896B9", fillRule: "evenodd", d: "M4.16 5.613l-1.54-1.54A.995.995 0 0 0 1.21 4.07l-.107.106a1.003 1.003 0 0 0 .003 1.411L3.088 7.57c.049.115.12.222.214.316a.995.995 0 0 0 1.411.003l5.41-5.41a.994.994 0 0 0-.002-1.412.995.995 0 0 0-1.412-.003L4.161 5.613z" }))); });
exports.default = exports.TickIcon;
//# sourceMappingURL=tick.js.map