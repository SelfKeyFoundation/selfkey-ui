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
        width: '14px !important',
        height: '18px !important'
    }
};
exports.UnlockIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '0 0 14 18' }),
    React.createElement("g", { id: "\uD83D\uDCB9-Marketplace-unlock-icon", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { id: "501-Exchange-Marketplace", transform: "translate(-1051.000000, -159.000000)", fill: "#FFFFFF", "fill-rule": "nonzero" },
            React.createElement("g", { id: "Title", transform: "translate(150.000000, 147.000000)" },
                React.createElement("g", { id: "Button/Full-Primary", transform: "translate(880.000000, 0.000000)" },
                    React.createElement("g", { id: "text", transform: "translate(21.000000, 11.000000)" },
                        React.createElement("path", { d: "M6.85714286,1 C4.39523811,1 2.33216726,2.74881649 1.82142857,5.09821429 L3.48214286,5.47321429 C3.82854703,3.87975494 5.20476171,2.71428571 6.85714286,2.71428571 C8.80816286,2.71428571 10.2857143,4.19183671 10.2857143,6.14285714 L10.2857143,7 L1.71428571,7 C0.771428571,7 0,7.77142857 0,8.71428571 L0,17.2857143 C0,18.2285714 0.771428571,19 1.71428571,19 L12,19 C12.9428571,19 13.7142857,18.2285714 13.7142857,17.2857143 L13.7142857,8.71428571 C13.7142857,7.77142857 12.9428571,7 12,7 L12,6.14285714 C12,3.29387757 9.70612286,1 6.85714286,1 Z M1.71428571,8.71428571 L12,8.71428571 L12,17.2857143 L1.71428571,17.2857143 L1.71428571,8.71428571 Z M6.85714286,11.2857143 C5.91036943,11.2857143 5.14285714,12.0532266 5.14285714,13 C5.14285714,13.9467734 5.91036943,14.7142857 6.85714286,14.7142857 C7.80391629,14.7142857 8.57142857,13.9467734 8.57142857,13 C8.57142857,12.0532266 7.80391629,11.2857143 6.85714286,11.2857143 Z", id: "icon-unlock-white" })))))))); });
exports.default = exports.UnlockIcon;
//# sourceMappingURL=unlock.js.map