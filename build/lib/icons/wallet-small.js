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
        cursor: 'pointer',
        fill: '#C5DCE9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#00C0D9',
        },
    }
});
export var WalletSmallIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({ style: { width: props.width || '20px', height: props.height || '18px' } }, props, { viewBox: props.viewBox || "0 0 20 18" }),
    React.createElement("g", { id: "Symbols", stroke: "none", strokeWidth: "1", fill: "inherit", "fill-rule": "evenodd" },
        React.createElement("g", { id: "Web-Nav", transform: "translate(-1242.000000, -14.000000)", fill: "inherit" },
            React.createElement("g", { id: "menu-items" },
                React.createElement("g", { transform: "translate(1032.000000, 7.000000)" },
                    React.createElement("g", { id: "wallet", transform: "translate(210.000000, 0.000000)" },
                        React.createElement("path", { d: "M17.2727273,7 C18.0258428,7 18.6363636,7.6105208 18.6363636,8.36363636 L18.6363636,8.36363636 L18.6363636,12.4545455 C19.3894792,12.4545455 20,13.0650663 20,13.8181818 L20,13.8181818 L20,17.4545455 C20,18.207661 19.3894792,18.8181818 18.6363636,18.8181818 L18.6363636,18.8181818 L18.6363636,22.9090909 C18.6363636,23.6622065 18.0258428,24.2727273 17.2727273,24.2727273 L17.2727273,24.2727273 L1.36363636,24.2727273 C0.610520796,24.2727273 -4.08562073e-14,23.6622065 -4.08562073e-14,22.9090909 L-4.08562073e-14,22.9090909 L-4.08562073e-14,8.36363636 C-4.08562073e-14,7.6105208 0.610520796,7 1.36363636,7 L1.36363636,7 Z M17.2727273,8.36363636 L1.36363636,8.36363636 L1.36363636,22.9090909 L17.2727273,22.9090909 L17.2727273,18.8181818 L15,18.8181818 C14.2468844,18.8181818 13.6363636,18.207661 13.6363636,17.4545455 L13.6363636,17.4545455 L13.6363636,13.8181818 C13.6363636,13.0650663 14.2468844,12.4545455 15,12.4545455 L15,12.4545455 L17.2727273,12.4545455 L17.2727273,8.36363636 Z M18.6363636,13.8181818 L15,13.8181818 L15,17.4545455 L18.6363636,17.4545455 L18.6363636,13.8181818 Z M16.8181818,14.9545455 C17.1947396,14.9545455 17.5,15.2598059 17.5,15.6363636 C17.5,16.0129214 17.1947396,16.3181818 16.8181818,16.3181818 C16.441624,16.3181818 16.1363636,16.0129214 16.1363636,15.6363636 C16.1363636,15.2598059 16.441624,14.9545455 16.8181818,14.9545455 Z", id: "icon-wallet-small" })))))))); });
export default WalletSmallIcon;
//# sourceMappingURL=wallet-small.js.map