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
var core_1 = require("@material-ui/core");
var react_jss_1 = require("react-jss");
var styles = {
    root: {
        fill: '#00c0d9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#23E6FE',
        }
    }
};
exports.MenuButtonIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({ width: "512px", height: "512px" }, props, { viewBox: "0 0 459 459" }),
    React.createElement("g", null,
        React.createElement("g", { id: "menu" },
            React.createElement("path", { d: "M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" }))))); });
exports.default = exports.MenuButtonIcon;
//# sourceMappingURL=menu-button.js.map