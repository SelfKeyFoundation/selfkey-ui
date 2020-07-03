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
import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
var styles = createStyles({
    root: {
        width: '29px !important',
        height: '36px !important',
    }
});
export var FileMultipleIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({}, props, { viewBox: '0 0 31 39' }),
    React.createElement("g", { id: "\uD83D\uDCBB-ID-Dashboard-multiple-files", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "multiple-files", transform: "translate(-392.000000, -1692.000000)", stroke: "#697C95", strokeWidth: "1.71428571" },
            React.createElement("g", { id: "Group", transform: "translate(394.000000, 1693.000000)" },
                React.createElement("path", { d: "M5.91075996,6.33834121 L5.91075996,0.238509317 L19.7794574,0.238509317 L19.7794574,8.47453416 L28.0956339,8.47453416 L28.0956339,28.5614907 L22.2177567,28.5614907 L22.2177567,36.6857143 L-0.857142857,36.6857143 L-0.857142857,6.54112651 L5.91075996,6.33834121 Z", id: "icon-file-multiple" }),
                React.createElement("polyline", { id: "Path-3", points: "5.48849105 6.31304348 13.1649616 6.31304348 22.213555 15.7535156 22.213555 28.9714286" }),
                React.createElement("path", { d: "M20.0737852,1.0658141e-13 L28.3473146,8.2301145", id: "Path-4" }),
                React.createElement("polyline", { id: "Path-5", points: "13.1649616 6.31304348 13.1649616 15.1332722 21.3606138 15.1332722" })))))); });
export default FileMultipleIcon;
//# sourceMappingURL=file-multiple.js.map