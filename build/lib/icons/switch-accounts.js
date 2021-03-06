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
exports.SwitchAccountsIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white'
        }
    }
});
exports.SwitchAccountsIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '16px', height: props.height || '16px' } }, props, { viewBox: props.viewBox || '0 0 16 16' }),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard-sai", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "300.4-Navigation-collapsed-sai", transform: "translate(-20.000000, -1314.000000)" },
            React.createElement("g", { id: "Menu" },
                React.createElement("g", { id: "Bottom-menu", transform: "translate(20.000000, 1263.000000)" },
                    React.createElement("path", { d: "M8,51 C3.584,51 0,54.584 0,59 C0,63.416 3.584,67 8,67 C12.416,67 16,63.416 16,59 C16,54.584 12.416,51 8,51 Z M8,65.4 C4.472,65.4 1.6,62.528 1.6,59 C1.6,55.472 4.472,52.6 8,52.6 C11.528,52.6 14.4,55.472 14.4,59 C14.4,62.528 11.528,65.4 8,65.4 Z M10.4,54.6 L10.4,56.6 L7.2,56.6 L7.2,58.2 L10.4,58.2 L10.4,60.2 L13.2,57.4 L10.4,54.6 Z M5.6,57.8 L2.8,60.6 L5.6,63.4 L5.6,61.4 L8.8,61.4 L8.8,59.8 L5.6,59.8 L5.6,57.8 Z", id: "icon-switch-accounts" }))))))); });
exports.default = exports.SwitchAccountsIcon;
//# sourceMappingURL=switch-accounts.js.map