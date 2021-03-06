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
exports.CalendarIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({});
exports.CalendarIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '20px', height: props.height || '20px' } }, props, { viewBox: props.viewBox || '0 0 20 20' }),
    React.createElement("g", { id: "\uD83D\uDCBB-ID-Dashboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "405.1---Edit-Attribute-+-Date-of-Birth", transform: "translate(-1035.000000, -347.000000)", fill: "#23E6FE" },
            React.createElement("g", { id: "Modal", transform: "translate(330.000000, 200.000000)" },
                React.createElement("g", { id: "address-1", transform: "translate(40.000000, 109.000000)" },
                    React.createElement("path", { d: "M682.971246,46 L666.996805,46 L666.996805,42.971 C666.996805,42.435 667.43111,42 667.966254,42 L668.99361,42 L668.99361,44 L670.990415,44 L670.990415,42 L678.977636,42 L678.977636,44 L680.974441,44 L680.974441,42 L681.972843,42 C682.523962,42 682.971246,42.448 682.971246,43 L682.971246,46 Z M682.971246,55 C682.971246,55.55 682.521965,56 681.972843,56 L667.995208,56 C667.444089,56 666.996805,55.552 666.996805,55 L666.996805,48 L682.971246,48 L682.971246,55 Z M665.063898,55.761 C665.063898,56.865 666.021366,58 667.123602,58 L683.098043,58 C684.201278,58 685,56.979 685,55.761 C685,55.372 684.968051,43.36 684.968051,42.708 C684.968051,40.626 684.6875,40 680.974441,40 L680.974441,38 L678.977636,38 L678.977636,40 L670.990415,40 L670.990415,38 L668.99361,38 L668.99361,40 L666.996805,40 C665.898562,40 665,40.9 665,42 L665.063898,55.761 Z", id: "icon-calendar" }))))))); });
exports.default = exports.CalendarIcon;
//# sourceMappingURL=calendar.js.map