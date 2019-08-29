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
        fill: '#00c0d9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#23E6FE',
        }
    }
};
exports.MenuNewIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '30px', height: props.height || '21px' } }, props, { viewBox: props.viewBox || "0 0 30 21" }),
    React.createElement("defs", null),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard-mn", stroke: "none", "stroke-width": "1" },
        React.createElement("g", { id: "300.4-Navigation-collapsed-mn", transform: "translate(-76.000000, -27.000000)", fill: "#00C0D9", "fill-rule": "nonzero" },
            React.createElement("path", { d: "M76,27 L76,28.96 L101,28.96 L101,27 L76,27 Z M76,36.52 L76,38.48 L106,38.48 L106,36.52 L76,36.52 Z M76,46.04 L76,48 L96,48 L96,46.04 L76,46.04 Z", id: "icon-menu-new-mn" }))))); });
exports.default = exports.MenuNewIcon;
//# sourceMappingURL=menu-new.js.map