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
exports.GridIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        transition: 'all 0.2s ease-out'
    }
});
exports.GridIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: {
        width: props.width || '24px',
        height: props.height || '24px',
        fill: props.fill || '93B0C1'
    } }, props, { viewBox: props.viewBox || '0 0 24 24' }),
    React.createElement("g", { id: "\uD83D\uDCB9-Marketplace", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "504-Exchange-Marketplace-New", transform: "translate(-1189.000000, -159.000000)", fill: "inherit" },
            React.createElement("g", { id: "Button-group", transform: "translate(1172.000000, 149.000000)" },
                React.createElement("g", { id: "button-structure" },
                    React.createElement("path", { d: "M32.6,31.6 L38.6,31.6 L38.6,25.6 L32.6,25.6 L32.6,31.6 Z M30.2,34 L41,34 L41,23.2 L30.2,23.2 L30.2,34 Z M19.4,31.6 L25.4,31.6 L25.4,25.6 L19.4,25.6 L19.4,31.6 Z M17,34 L27.8,34 L27.8,23.2 L17,23.2 L17,34 Z M32.6,18.4 L38.6,18.4 L38.6,12.4 L32.6,12.4 L32.6,18.4 Z M30.2,20.8 L41,20.8 L41,10 L30.2,10 L30.2,20.8 Z M19.4,18.4 L25.4,18.4 L25.4,12.4 L19.4,12.4 L19.4,18.4 Z M17,20.8 L27.8,20.8 L27.8,10 L17,10 L17,20.8 Z", id: "icon-grid" }))))))); });
exports.default = exports.GridIcon;
//# sourceMappingURL=grid.js.map