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
        width: '29px !important',
        height: '36px !important',
    },
};
exports.FileVideoIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: "0 0 29 36" }),
    React.createElement("g", { id: "Page-video-file", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { id: "Video-File-595b40b85ba036ed117db797", fill: "#697C95", "fill-rule": "nonzero" },
            React.createElement("path", { d: "M0,0 L0,36 L28.173913,36 L28.173913,35.2173913 L28.173913,10.4949047 L17.3610736,0 L0,0 Z M1.56521739,1.56521739 L16.4347826,1.56521739 L16.4347826,11.7391304 L26.6086957,11.7391304 L26.6086957,34.4347826 L1.56521739,34.4347826 L1.56521739,1.56521739 Z M18,2.80180025 L25.5968069,10.173913 L18,10.173913 L18,2.80180025 Z M10.9137224,15.6537023 C10.4989064,15.6764611 10.174142,16.0193427 10.173913,16.4347826 L10.173913,26.6086957 C10.1741529,26.8819584 10.3168942,27.1353116 10.5504957,27.2770964 C10.7840971,27.4188813 11.0747329,27.4285671 11.3172558,27.3026497 L20.3615828,22.6069975 C20.6123236,22.4764239 20.7731649,22.2207836 20.7823511,21.9382309 C20.7915373,21.6556782 20.6476405,21.3901305 20.4059105,21.243546 L11.3615828,15.7652851 C11.2269059,15.6839185 11.0708314,15.6450331 10.9137224,15.6537023 Z M11.7391304,17.824219 L18.4035326,21.8610736 L11.7391304,25.3216714 L11.7391304,17.824219 Z", id: "icon-file-video" }))))); });
exports.default = exports.FileVideoIcon;
//# sourceMappingURL=file-video.js.map