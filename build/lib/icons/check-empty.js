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
        width: '18px !important',
        height: '18px !important'
    }
};
exports.CheckEmptyIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '0 0 18 18' }),
    React.createElement("title", null, "icon-check-empty"),
    React.createElement("desc", null, "Created with Sketch."),
    React.createElement("defs", null),
    React.createElement("g", { id: "Modal---Dark", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "1.3.-Required-Information---missing-info", transform: "translate(-490.000000, -340.000000)", fill: "#202A33", stroke: "#93B0C1", strokeWidth: "2" },
            React.createElement("g", { id: "Modal-content", transform: "translate(420.000000, 100.000000)" },
                React.createElement("g", { id: "Form", transform: "translate(70.000000, 177.000000)" },
                    React.createElement("g", { id: "line-1", transform: "translate(0.000000, 62.000000)" },
                        React.createElement("path", { d: "M15.984375,2 L2.015625,2 C1.71700491,2 1.49517443,2.09091413 1.29304428,2.29304428 C1.09091413,2.49517443 1,2.71700491 1,3.015625 L1,16.984375 C1,17.2829951 1.09091413,17.5048256 1.29304428,17.7069557 C1.49517443,17.9090859 1.71700491,18 2.015625,18 L15.984375,18 C16.2829951,18 16.5048256,17.9090859 16.7069557,17.7069557 C16.9090859,17.5048256 17,17.2829951 17,16.984375 L17,3.015625 C17,2.71700491 16.9090859,2.49517443 16.7069557,2.29304428 C16.5048256,2.09091413 16.2829951,2 15.984375,2 Z", id: "icon-check" })))))))); });
exports.default = exports.CheckEmptyIcon;
//# sourceMappingURL=check-empty.js.map