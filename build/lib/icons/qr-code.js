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
exports.QRCodeIcon = void 0;
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
exports.QRCodeIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '20px', height: props.height || 'auto' } }, props, { viewBox: props.viewBox || '0 0 16 16' }),
    React.createElement("g", { transform: "scale(.5,.5)", fill: "none", stroke: "#FFF", strokeWidth: "2", strokeLinecap: "butt" },
        React.createElement("path", { id: "A", d: "M3,3 h8 v8 h-8 v-8 z M6,7 h2" }),
        React.createElement("use", { xlinkHref: "#A", x: "18", y: "0" }),
        React.createElement("use", { xlinkHref: "#A", x: "0", y: "18" }),
        React.createElement("path", { d: "M18,3 h-3 v4 h2 v4 h-2 v3" }),
        React.createElement("path", { d: "M2,15 h2 m2,0 h4 m6,0 h2 m2,0 h4 m4,0 h2" }),
        React.createElement("path", { d: "M4,17 h2 m2,0 h8 m6,0 h2 m2,0 h4" }),
        React.createElement("path", { d: "M14,19 h2 m2,0 h2 m6,0 h2" }),
        React.createElement("path", { d: "M16,21 h2 m2,0 h8" }),
        React.createElement("path", { d: "M14,23 h2 m2,0 h2 m4,0 h2 m2,0 h2" }),
        React.createElement("path", { d: "M14,25 h4 m2,0 h2 m2, 0 h4" }),
        React.createElement("path", { d: "M14,27 h2 m6,0 h2 m4,0 h2" }),
        React.createElement("path", { d: "M16,29 h8 m2,0 h2" })))); });
//# sourceMappingURL=qr-code.js.map