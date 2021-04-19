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
exports.SquareTargetIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        cursor: 'pointer',
        fill: '#FFF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#00C0D9'
        }
    }
});
exports.SquareTargetIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '20px', height: props.height || 'auto' } }, props, { viewBox: props.viewBox || '0 0 1000 1000' }),
    React.createElement("g", null,
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M49,361.2c21.5,0,39-17.5,39-39V88.1h234.2c21.5,0,39-17.5,39-39c0-21.6-17.5-39-39-39H49c-21.5,0-39,17.5-39,39v273.2C10,343.8,27.5,361.2,49,361.2z" }),
                React.createElement("path", { d: "M677.8,88.1h234.2v234.1c0,21.6,17.5,39,39,39s39-17.5,39-39V49c0-21.6-17.5-39-39-39H677.8c-21.5,0-39,17.5-39,39C638.8,70.6,656.2,88.1,677.8,88.1z" }),
                React.createElement("path", { d: "M677.8,990H951c21.5,0,39-17.5,39-39V677.8c0-21.6-17.5-39-39-39s-39,17.5-39,39v234.2H677.8c-21.5,0-39,17.5-39,39C638.8,972.5,656.2,990,677.8,990z" }),
                React.createElement("path", { d: "M49,990h273.2c21.5,0,39-17.5,39-39c0-21.6-17.5-39-39-39H88.1V677.8c0-21.6-17.5-39-39-39c-21.5,0-39,17.5-39,39V951C10,972.5,27.5,990,49,990z" }))),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)))); });
//# sourceMappingURL=square-target.js.map