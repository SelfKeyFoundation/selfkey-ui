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
        width: '36px !important',
        height: '36px !important'
    }
};
exports.CloseDialogIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '"0 0 38 38' }),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("circle", { cx: "18", cy: "18", r: "18", fill: "#262F39", stroke: "#303C49" }),
        React.createElement("path", { fill: "#3B4A5A", fillRule: "nonzero", d: "M10.815 9.64L9.64 10.814 16.824 18l-7.185 7.185 1.176 1.176L18 19.176l7.185 7.185 1.176-1.176L19.176 18l7.185-7.185-1.176-1.176L18 16.824z" })))); });
exports.default = exports.CloseDialogIcon;
//# sourceMappingURL=close-dialog.js.map