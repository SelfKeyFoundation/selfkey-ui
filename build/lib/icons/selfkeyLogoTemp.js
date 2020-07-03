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
        width: '177px !important',
        height: '119px !important'
    }
});
export var SelfkeyLogoTemp = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({}, props, { viewBox: '0 0 177 119' }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { x1: "50%", y1: "97.784%", x2: "50%", y2: "1.559%", id: "selfkey-logo-temp-linearGradient-1" },
            React.createElement("stop", { stopColor: "#08BCCD", offset: "0%" }),
            React.createElement("stop", { stopColor: "#2DA1F8", offset: "100%" })),
        React.createElement("linearGradient", { x1: "50%", y1: "97.784%", x2: "41.849%", y2: "-16.397%", id: "selfkey-logo-temp-linearGradient-2" },
            React.createElement("stop", { stopColor: "#08BCCD", offset: "0%" }),
            React.createElement("stop", { stopColor: "#2DA1F8", offset: "100%" }))),
    React.createElement("g", { id: "Symbols", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "Logo/Centered-Copy" },
            React.createElement("g", { id: "Logo-neon" },
                React.createElement("g", { id: "selfkey-logo", transform: "translate(57.000000, 0.000000)", fillRule: "nonzero" },
                    React.createElement("ellipse", { id: "Oval", fill: "url(#selfkey-logo-temp-linearGradient-1)", cx: "30.0734978", cy: "50.7169811", rx: "4.65927431", ry: "4.68825544" }),
                    React.createElement("path", { d: "M63.5355588,18.1132075 L31.7677794,0 L0,18.1132075 L0,54.3396226 L31.7677794,72.4528302 L63.5355588,54.3396226 L63.5355588,18.1132075 Z M41.9145196,15.6609579 C41.9133104,16.8044758 40.9892148,17.7325546 39.8457126,17.7386821 L32.1512221,17.7386821 L32.1512221,22.2129231 L37.8270653,22.2129231 C38.3769299,22.2141043 38.9038041,22.4336707 39.291781,22.8233198 C39.6797578,23.212969 39.8970561,23.7407827 39.8958723,24.2906473 C39.8977211,25.4352464 38.9716633,26.3647969 37.8270653,26.3672569 L32.1512221,26.3672569 L32.1512221,42.2957329 C32.154566,42.3693004 32.154566,42.4428679 32.1512221,42.5164354 C36.1662235,43.5775907 38.7767547,47.4610624 38.2584383,51.596447 C37.7390073,55.7318316 34.2501248,58.8428447 30.099135,58.8707112 C25.9470305,58.8985776 22.4169057,55.8354949 21.8428563,51.7067983 C21.268807,47.5781016 23.8269492,43.6611901 27.8285747,42.5454165 C27.8189078,42.4651398 27.8136981,42.384389 27.8129695,42.3035356 L27.8129695,15.7690798 C27.8114897,15.1922232 28.0393794,14.6384377 28.4464428,14.2297017 C28.8535062,13.8209657 29.4063526,13.5908072 29.9832104,13.5899216 C30.1648999,13.5899216 30.3454746,13.6144441 30.5215907,13.6601451 C30.6920754,13.6142106 30.8678026,13.5906055 31.0443657,13.5899216 L39.8524006,13.5899216 C40.9959027,13.5960492 41.9199983,14.5241279 41.9212075,15.6676459 L41.9145196,15.6620726 L41.9145196,15.6609579 Z", id: "Shape", fill: "url(#selfkey-logo-temp-linearGradient-2)" })),
                React.createElement("path", { d: "M20.1834729,102.008705 L20.1834729,103.187068 L17.155952,103.187068 L17.155952,102.008705 C17.155952,101.840366 17.0952153,101.69541 16.9737401,101.573833 C16.8522648,101.452255 16.7074312,101.391467 16.5392347,101.391467 L3.64423816,101.391467 C3.47604171,101.391467 3.33120806,101.452255 3.20973284,101.573833 C3.08825763,101.69541 3.02752094,101.840366 3.02752094,102.008705 L3.02752094,106.329371 C3.02752094,106.497709 3.08825763,106.642665 3.20973284,106.764243 C3.33120806,106.885821 3.47604171,106.946609 3.64423816,106.946609 L16.5392347,106.946609 C17.5484134,106.946609 18.4080713,107.301984 19.1182341,108.012747 C19.8283968,108.723509 20.1834729,109.583893 20.1834729,110.593924 L20.1834729,114.91459 C20.1834729,115.92462 19.8283968,116.785004 19.1182341,117.495766 C18.4080713,118.206529 17.5484134,118.561905 16.5392347,118.561905 L3.64423816,118.561905 C2.63505947,118.561905 1.77540163,118.206529 1.06523885,117.495766 C0.355076065,116.785004 0,115.92462 0,114.91459 L0,113.736226 L3.02752094,113.736226 L3.02752094,114.91459 C3.02752094,115.082928 3.08825763,115.227884 3.20973284,115.349462 C3.33120806,115.47104 3.47604171,115.531827 3.64423816,115.531827 L16.5392347,115.531827 C16.7074312,115.531827 16.8522648,115.47104 16.9737401,115.349462 C17.0952153,115.227884 17.155952,115.082928 17.155952,114.91459 L17.155952,110.593924 C17.155952,110.425585 17.0952153,110.280629 16.9737401,110.159052 C16.8522648,110.037474 16.7074312,109.976686 16.5392347,109.976686 L3.64423816,109.976686 C2.63505947,109.976686 1.77540163,109.62131 1.06523885,108.910548 C0.355076065,108.199785 0,107.339401 0,106.329371 L0,102.008705 C0,100.998674 0.355076065,100.13829 1.06523885,99.4275279 C1.77540163,98.7167655 2.63505947,98.3613896 3.64423816,98.3613896 L16.5392347,98.3613896 C17.5484134,98.3613896 18.4080713,98.7167655 19.1182341,99.4275279 C19.8283968,100.13829 20.1834729,100.998674 20.1834729,102.008705 Z M46.053251,98.3613896 L46.053251,101.391467 L30.5792551,101.391467 L30.5792551,106.946609 L43.0257301,106.946609 L43.0257301,109.976686 L30.5792551,109.976686 L30.5792551,115.531827 L46.053251,115.531827 L46.053251,118.561905 L27.5517342,118.561905 L27.5517342,98.3613896 L46.053251,98.3613896 Z M53.3093819,118.561905 L53.3093819,98.3333333 L56.3369029,98.3333333 L56.3369029,115.531827 L73.4928548,115.531827 L73.4928548,118.561905 L53.3093819,118.561905 Z M79.4875187,98.3613896 L97.9890355,98.3613896 L97.9890355,101.391467 L82.5150396,101.391467 L82.5150396,106.946609 L94.9615146,106.946609 L94.9615146,109.976686 L82.5150396,109.976686 L82.5150396,118.561905 L79.4875187,118.561905 L79.4875187,98.3613896 Z M119.878184,98.3613896 L123.466357,98.3613896 L123.466357,98.7822337 L115.364935,108.461647 L123.466357,118.141061 L123.466357,118.561905 L119.878184,118.561905 L112.673806,109.976686 L107.067286,109.976686 L107.067286,118.561905 L104.039765,118.561905 L104.039765,98.3613896 L107.067286,98.3613896 L107.067286,106.946609 L112.673806,106.946609 L119.878184,98.3613896 Z M149.224005,98.3613896 L149.224005,101.391467 L133.750009,101.391467 L133.750009,106.946609 L146.196484,106.946609 L146.196484,109.976686 L133.750009,109.976686 L133.750009,115.531827 L149.224005,115.531827 L149.224005,118.561905 L130.722488,118.561905 L130.722488,98.3613896 L149.224005,98.3613896 Z M173.411827,98.3613896 L177,98.3613896 L167.693176,110.986712 L167.693176,118.561905 L164.665655,118.561905 L164.665655,110.986712 L155.358832,98.3613896 L158.918972,98.3613896 L166.179416,107.563847 L173.411827,98.3613896 Z", id: "SELFKEY-Copy", fill: "#FFFFFF" })))))); });
export default SelfkeyLogoTemp;
//# sourceMappingURL=selfkeyLogoTemp.js.map