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
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        },
    }
});
export var MarketplaceIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({ style: { width: props.width || '36px', height: props.height || '30px', fill: props.fill || '#00C0D9' } }, props, { viewBox: props.viewBox || "0 0 36 30" }),
    React.createElement("g", { id: "\uD83D\uDCB9-Marketplace", stroke: "none", strokeWidth: "1", fill: "inherit", fillRule: "evenodd" },
        React.createElement("g", { id: "500---SelfKey-Marketplace", transform: "translate(-150.000000, -156.000000)", fill: "inherit", fillRule: "nonzero" },
            React.createElement("g", { id: "Title", transform: "translate(150.000000, 156.000000)" },
                React.createElement("g", { id: "icon-marketplace" },
                    React.createElement("path", { d: "M14.6645505,0 C14.100363,0 13.5732482,0.281777344 13.2604982,0.751464844 L11.5114747,3.375 L1.6875,3.375 C0.7554375,3.375 0,4.1304375 0,5.0625 L0,10.5765379 C0,11.4889129 0.435375,12.3013738 1.125,12.8177488 L1.125,27 C1.125,28.2425625 2.1324375,29.25 3.375,29.25 L32.625,29.25 C33.8675625,29.25 34.875,28.2425625 34.875,27 L34.875,12.8177488 C35.564625,12.3013738 36,11.4889129 36,10.5765379 L36,5.0625 C36,4.1304375 35.2445625,3.375 34.3125,3.375 L24.4885253,3.375 L22.7395018,0.751464844 C22.4267518,0.281777344 21.899637,0 21.3354495,0 L14.6645505,0 Z M14.6645505,1.125 L21.3354495,1.125 C21.523887,1.125 21.6988419,1.21855078 21.8034669,1.37548828 L23.1361082,3.375 L12.8638918,3.375 L14.1965331,1.37548828 C14.3011581,1.21855078 14.476113,1.125 14.6645505,1.125 Z M1.6875,4.5 L10.7611082,4.5 L25.2377932,4.5 L34.3125,4.5 C34.6224375,4.5 34.875,4.752 34.875,5.0625 L34.875,5.625 C34.5645,5.625 34.3125,5.8764375 34.3125,6.1875 L34.3125,7.3125 C34.3125,7.6235625 34.5645,7.875 34.875,7.875 L34.875,10.5765379 C34.875,11.3702254 34.3334003,12.0467903 33.5588378,12.2222902 L20.25,15.2270505 L20.25,15.1875 C20.25,14.5670625 19.7454375,14.0625 19.125,14.0625 L16.875,14.0625 C16.2545625,14.0625 15.75,14.5670625 15.75,15.1875 L15.75,15.2270505 L2.44116214,12.2222902 C1.66659964,12.0467903 1.125,11.3702254 1.125,10.5765379 L1.125,7.875 C1.4355,7.875 1.6875,7.6235625 1.6875,7.3125 L1.6875,6.1875 C1.6875,5.8764375 1.4355,5.625 1.125,5.625 L1.125,5.0625 C1.125,4.752 1.3775625,4.5 1.6875,4.5 Z M3.9375,5.625 C3.627,5.625 3.375,5.8764375 3.375,6.1875 L3.375,7.3125 C3.375,7.6235625 3.627,7.875 3.9375,7.875 C4.248,7.875 4.5,7.6235625 4.5,7.3125 L4.5,6.1875 C4.5,5.8764375 4.248,5.625 3.9375,5.625 Z M6.75,5.625 C6.4395,5.625 6.1875,5.8764375 6.1875,6.1875 L6.1875,7.3125 C6.1875,7.6235625 6.4395,7.875 6.75,7.875 C7.0605,7.875 7.3125,7.6235625 7.3125,7.3125 L7.3125,6.1875 C7.3125,5.8764375 7.0605,5.625 6.75,5.625 Z M9.5625,5.625 C9.252,5.625 9,5.8764375 9,6.1875 L9,7.3125 C9,7.6235625 9.252,7.875 9.5625,7.875 C9.873,7.875 10.125,7.6235625 10.125,7.3125 L10.125,6.1875 C10.125,5.8764375 9.873,5.625 9.5625,5.625 Z M12.375,5.625 C12.0645,5.625 11.8125,5.8764375 11.8125,6.1875 L11.8125,7.3125 C11.8125,7.6235625 12.0645,7.875 12.375,7.875 C12.6855,7.875 12.9375,7.6235625 12.9375,7.3125 L12.9375,6.1875 C12.9375,5.8764375 12.6855,5.625 12.375,5.625 Z M15.1875,5.625 C14.877,5.625 14.625,5.8764375 14.625,6.1875 L14.625,7.3125 C14.625,7.6235625 14.877,7.875 15.1875,7.875 C15.498,7.875 15.75,7.6235625 15.75,7.3125 L15.75,6.1875 C15.75,5.8764375 15.498,5.625 15.1875,5.625 Z M18,5.625 C17.6895,5.625 17.4375,5.8764375 17.4375,6.1875 L17.4375,7.3125 C17.4375,7.6235625 17.6895,7.875 18,7.875 C18.3105,7.875 18.5625,7.6235625 18.5625,7.3125 L18.5625,6.1875 C18.5625,5.8764375 18.3105,5.625 18,5.625 Z M20.8125,5.625 C20.502,5.625 20.25,5.8764375 20.25,6.1875 L20.25,7.3125 C20.25,7.6235625 20.502,7.875 20.8125,7.875 C21.123,7.875 21.375,7.6235625 21.375,7.3125 L21.375,6.1875 C21.375,5.8764375 21.123,5.625 20.8125,5.625 Z M23.625,5.625 C23.3145,5.625 23.0625,5.8764375 23.0625,6.1875 L23.0625,7.3125 C23.0625,7.6235625 23.3145,7.875 23.625,7.875 C23.9355,7.875 24.1875,7.6235625 24.1875,7.3125 L24.1875,6.1875 C24.1875,5.8764375 23.9355,5.625 23.625,5.625 Z M26.4375,5.625 C26.127,5.625 25.875,5.8764375 25.875,6.1875 L25.875,7.3125 C25.875,7.6235625 26.127,7.875 26.4375,7.875 C26.748,7.875 27,7.6235625 27,7.3125 L27,6.1875 C27,5.8764375 26.748,5.625 26.4375,5.625 Z M29.25,5.625 C28.9395,5.625 28.6875,5.8764375 28.6875,6.1875 L28.6875,7.3125 C28.6875,7.6235625 28.9395,7.875 29.25,7.875 C29.5605,7.875 29.8125,7.6235625 29.8125,7.3125 L29.8125,6.1875 C29.8125,5.8764375 29.5605,5.625 29.25,5.625 Z M32.0625,5.625 C31.752,5.625 31.5,5.8764375 31.5,6.1875 L31.5,7.3125 C31.5,7.6235625 31.752,7.875 32.0625,7.875 C32.373,7.875 32.625,7.6235625 32.625,7.3125 L32.625,6.1875 C32.625,5.8764375 32.373,5.625 32.0625,5.625 Z M33.75,13.3319093 L33.75,27 C33.75,27.621 33.2465625,28.125 32.625,28.125 L3.375,28.125 C2.7534375,28.125 2.25,27.621 2.25,27 L2.25,13.3330078 L15.75,16.3817139 L15.75,18.5625 C15.75,19.1835 16.2534375,19.6875 16.875,19.6875 L19.125,19.6875 C19.7465625,19.6875 20.25,19.1835 20.25,18.5625 L20.25,16.3806154 L33.75,13.3319093 Z M16.875,15.1875 L19.125,15.1875 L19.1260986,18.5625 L16.875,18.5625 L16.875,15.1875 Z M3.9375,24.75 C3.627,24.75 3.375,25.0014375 3.375,25.3125 C3.375,25.6235625 3.627,25.875 3.9375,25.875 L27.5625,25.875 C27.873,25.875 28.125,25.6235625 28.125,25.3125 C28.125,25.0014375 27.873,24.75 27.5625,24.75 L3.9375,24.75 Z M29.8125,24.75 C29.502,24.75 29.25,25.0014375 29.25,25.3125 C29.25,25.6235625 29.502,25.875 29.8125,25.875 L32.0625,25.875 C32.373,25.875 32.625,25.6235625 32.625,25.3125 C32.625,25.0014375 32.373,24.75 32.0625,24.75 L29.8125,24.75 Z", id: "Shape" }))))))); });
export default MarketplaceIcon;
//# sourceMappingURL=marketplace.js.map