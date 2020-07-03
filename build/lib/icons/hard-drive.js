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
import { primary, white } from '../colors';
var styles = createStyles({
    root: {
        fill: white,
        height: '44px !important',
        width: '44px !important',
        '&:hover': {
            fill: primary,
        }
    }
});
export var HardDriveIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({}, props, { viewBox: "0 0 44 44", version: "1.1" }),
    React.createElement("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "5.-Style-Guide---UI-Elements", transform: "translate(-1026.000000, -785.000000)", fill: "inherit", fillRule: "nonzero" },
            React.createElement("g", { id: "File-upload", transform: "translate(930.000000, 124.000000)" },
                React.createElement("g", { id: "Upload", transform: "translate(0.000000, 661.000000)" },
                    React.createElement("g", { id: "Hard-Drive", transform: "translate(96.000000, 0.000000)" },
                        React.createElement("path", { d: "M6.765,0 C5.92281272,0 5.2525,0.58093728 5.115,1.4025 L0.0825,31.1575 C0.030937544,31.3225 0,31.50125 0,31.68 L0,42.24 C0,43.2025 0.7975,44 1.76,44 L42.24,44 C43.2025,44 44,43.2025 44,42.24 L44,31.68 C44,31.41875 43.9415627,31.1609373 43.835,30.9375 L38.885,1.4025 C38.7475,0.58093728 38.0771873,0 37.235,0 L6.765,0 Z M6.8475,1.76 L37.1525,1.76 L41.8825,29.92 L2.09,29.92 L6.8475,1.76 Z M22,6.16 C18.4318754,6.16 15.1903127,7.19468728 12.7875,8.91 C10.3846873,10.6253127 8.8,13.07625 8.8,15.84 C8.8,18.60375 10.3846873,21.0546873 12.7875,22.77 C15.1903127,24.4853127 18.4318754,25.52 22,25.52 C25.5681254,25.52 28.8096873,24.4853127 31.2125,22.77 C33.6153127,21.0546873 35.2,18.60375 35.2,15.84 C35.2,13.07625 33.6153127,10.6253127 31.2125,8.91 C28.8096873,7.19468728 25.5681254,6.16 22,6.16 Z M22,7.92 C25.2278127,7.92 28.1359373,8.86875 30.195,10.34 C32.2540627,11.81125 33.44,13.7431254 33.44,15.84 C33.44,17.9368754 32.2540627,19.86875 30.195,21.34 C28.1359373,22.81125 25.2278127,23.76 22,23.76 C18.7721873,23.76 15.8640627,22.81125 13.805,21.34 C11.7459373,19.86875 10.56,17.9368754 10.56,15.84 C10.56,13.7431254 11.7459373,11.81125 13.805,10.34 C15.8640627,8.86875 18.7721873,7.92 22,7.92 Z M22,13.2 C20.5425,13.2 19.36,13.9871873 19.36,14.96 C19.36,15.9328127 20.5425,16.72 22,16.72 C23.4575,16.72 24.64,15.9328127 24.64,14.96 C24.64,13.9871873 23.4575,13.2 22,13.2 Z M1.76,31.68 L42.2125,31.68 C42.2193754,31.6971873 42.2296873,31.7178127 42.24,31.735 L42.24,42.24 L1.76,42.24 L1.76,31.68 Z M35.2,35.2 C34.2271873,35.2 33.44,35.9871873 33.44,36.96 C33.44,37.9328127 34.2271873,38.72 35.2,38.72 C36.1728127,38.72 36.96,37.9328127 36.96,36.96 C36.96,35.9871873 36.1728127,35.2 35.2,35.2 Z", id: "Shape" })))))))); });
export default HardDriveIcon;
//# sourceMappingURL=hard-drive.js.map