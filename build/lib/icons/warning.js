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
        width: '20px !important',
        height: '18px !important'
    }
};
exports.WarningIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '0 0 20 18' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "Modal---Dark", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "1.3.-Required-Information---missing-info", transform: "translate(-490.000000, -502.000000)", fill: "#FFA700" },
            React.createElement("g", { id: "Modal-content", transform: "translate(420.000000, 100.000000)" },
                React.createElement("g", { id: "Form", transform: "translate(70.000000, 177.000000)" },
                    React.createElement("g", { id: "line-4", transform: "translate(0.000000, 224.000000)" },
                        React.createElement("path", { d: "M0,18.2707889 L10.021322,1 L20,18.2707889 L0,18.2707889 Z M10.9168443,15.5415778 L10.9168443,13.7078891 L9.08315565,13.7078891 L9.08315565,15.5415778 L10.9168443,15.5415778 Z M10.9168443,11.9168443 L10.9168443,8.24946695 L9.08315565,8.24946695 L9.08315565,11.9168443 L10.9168443,11.9168443 Z", id: "icon-warning" })))))))); });
exports.default = exports.WarningIcon;
//# sourceMappingURL=warning.js.map