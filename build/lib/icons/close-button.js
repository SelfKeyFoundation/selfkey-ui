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
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    root: {
        width: '38px !important',
        height: '38px !important'
    }
};
exports.CloseButtonIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '0 0 38 38' }),
    React.createElement("title", null, "Close"),
    React.createElement("desc", null, "Created with Sketch."),
    React.createElement("defs", null),
    React.createElement("g", { id: "Symbols", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "Close-button", transform: "translate(1.000000, 1.000000)" },
            React.createElement("g", { id: "Close" },
                React.createElement("circle", { id: "Oval-2", stroke: "#1D505F", fill: "#262F39", cx: "18", cy: "18", r: "18" }),
                React.createElement("g", { id: "icons8-delete_sign", transform: "translate(9.000000, 9.000000)", fill: "#23E6FE", fillRule: "nonzero" },
                    React.createElement("polygon", { id: "Shape", points: "1.81534091 0.639204545 0.639204545 1.81534091 7.82386364 9 0.639204545 16.1846591 1.81534091 17.3607955 9 10.1761364 16.1846591 17.3607955 17.3607955 16.1846591 10.1761364 9 17.3607955 1.81534091 16.1846591 0.639204545 9 7.82386364" }))))))); });
exports.default = exports.CloseButtonIcon;
//# sourceMappingURL=close-button.js.map