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
exports.AnimatedLoadingIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        width: '120px !important',
        height: '30px !important'
    }
});
exports.AnimatedLoadingIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({}, props, { viewBox: "0 0 120 30" }),
    React.createElement("circle", { cx: "15", cy: "15", r: "15" },
        React.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
        React.createElement("animate", { attributeName: "fillOpacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })),
    React.createElement("circle", { cx: "60", cy: "15", r: "9", fillOpacity: "0.3" },
        React.createElement("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }),
        React.createElement("animate", { attributeName: "fillOpacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })),
    React.createElement("circle", { cx: "105", cy: "15", r: "15" },
        React.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
        React.createElement("animate", { attributeName: "fillOpacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })))); });
exports.default = exports.AnimatedLoadingIcon;
//# sourceMappingURL=animated-loading.js.map