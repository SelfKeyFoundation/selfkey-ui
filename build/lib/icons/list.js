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
exports.ListIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
exports.ListIcon = function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '32px', height: props.height || '16px' } }, props, { viewBox: props.viewBox || '0 0 32 16' }),
    React.createElement("g", { id: "\uD83C\uDF08-UI-Guidelines", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "3.-Style-Guide---Forms", transform: "translate(-1098.000000, -863.000000)", fill: "inherit" },
            React.createElement("g", { id: "Line-3-Buttons", transform: "translate(39.000000, 559.000000)" },
                React.createElement("g", { id: "button-groups", transform: "translate(979.000000, 242.000000)" },
                    React.createElement("g", { id: "Button-group", transform: "translate(7.000000, 48.000000)" },
                        React.createElement("g", { id: "button-list", transform: "translate(59.000000, 0.000000)" },
                            React.createElement("path", { d: "M14,30 L17.2,30 L17.2,26.8 L14,26.8 L14,30 Z M14,17.2096 L17.2,17.2096 L17.2,14.0096 L14,14.0096 L14,17.2096 Z M14,23.6 L17.2,23.6 L17.2,20.4 L14,20.4 L14,23.6 Z M20.4,30 L46,30 L46,26.8 L20.4,26.8 L20.4,30 Z M20.4,17.2 L46,17.2 L46,14 L20.4,14 L20.4,17.2 Z M20.4,23.6 L46,23.6 L46,20.4 L20.4,20.4 L20.4,23.6 Z", id: "icon-list" }))))))))); };
exports.default = exports.ListIcon;
//# sourceMappingURL=list.js.map