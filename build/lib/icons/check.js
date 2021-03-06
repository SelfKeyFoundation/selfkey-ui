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
exports.CheckIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({});
exports.CheckIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '18px', height: props.height || '18px' } }, props, { viewBox: props.viewBox || '0 0 18 18' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "Modal---Dark", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "1.3.-Required-Information---missing-info", transform: "translate(-490.000000, -340.000000)", fill: "#1CBA7D" },
            React.createElement("g", { id: "Modal-content", transform: "translate(420.000000, 100.000000)" },
                React.createElement("g", { id: "Form", transform: "translate(70.000000, 177.000000)" },
                    React.createElement("g", { id: "line-1", transform: "translate(0.000000, 62.000000)" },
                        React.createElement("path", { d: "M15.984375,1 C16.5468778,1 17.0234355,1.19531055 17.4140625,1.5859375 C17.8046895,1.97656445 18,2.45312219 18,3.015625 L18,16.984375 C18,17.5468778 17.8046895,18.0234355 17.4140625,18.4140625 C17.0234355,18.8046895 16.5468778,19 15.984375,19 L2.015625,19 C1.45312219,19 0.976564453,18.8046895 0.5859375,18.4140625 C0.195310547,18.0234355 0,17.5468778 0,16.984375 L0,3.015625 C0,2.45312219 0.195310547,1.97656445 0.5859375,1.5859375 C0.976564453,1.19531055 1.45312219,1 2.015625,1 L15.984375,1 Z M6.984375,15.015625 L15.984375,6.015625 L14.578125,4.5625 L6.984375,12.15625 L3.421875,8.59375 L2.015625,10 L6.984375,15.015625 Z", id: "icon-check" })))))))); });
exports.default = exports.CheckIcon;
//# sourceMappingURL=check.js.map