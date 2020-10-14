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
exports.MenuStakingIcon = void 0;
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
exports.MenuStakingIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '16px', height: props.height || '16px' } }, props, { viewBox: props.viewBox || '0 0 18 18' }),
    React.createElement("g", { id: "Main-Dashboard-staking", stroke: "none" },
        React.createElement("path", { d: "M16 13L16 15C16 15.6 15.4 16 14.9 16L12 16 12 12 14.9 12C15.4 12 16 12.4 16 13L16 13ZM11 10.6L11 12.4 11 16 7 16 7 7 9.9 7C10.4 7 11 7.4 11 7.9L11 10.6ZM6 5.5L6 7.3 6 16 2.9 16C2.3 16 2 15.6 2 15.1L2 2.9C2 2.4 2.3 2 2.9 2L4.9 2C5.4 2 6 2.4 6 2.9L6 5.5ZM12.6 7.2C12.6 6.2 11.7 5.4 10.7 5.4L7.2 5.4 7.2 1.8C7.2 0.8 6.3 0 5.3 0L1.7 0C0.7 0 0 0.8 0 1.8L0 16.2C0 17.2 0.7 18 1.7 18L1.7 18 5.3 18 7.1 18 10.7 18 12.5 18 16.1 18 16.1 18C17.1 18 18 17.2 18 16.2L18 12.6C18 11.6 17.2 10.8 16.2 10.8L12.6 10.8 12.6 7.2Z" })))); });
exports.default = exports.MenuStakingIcon;
//# sourceMappingURL=menu-staking.js.map