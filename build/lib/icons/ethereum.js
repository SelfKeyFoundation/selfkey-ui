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
        width: '44px !important',
        height: '44px !important'
    }
});
export var EthereumIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({}, props, { viewBox: '0 0 44 44' }),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("rect", { width: "44", height: "44", fill: "#9418DC", rx: "9" }),
        React.createElement("path", { fill: "#FFF", fillRule: "nonzero", d: "M11.37 20.286l10.027-4.1 9.719 4.205L21.382 5.5 11.37 20.286zm.031 4.55l10.012 5.627 10.212-5.627L21.505 38.5 11.401 24.836zm10.043-6.645l10.15 4.385-10.15 5.508L11 22.456l10.444-4.265z" })))); });
export default EthereumIcon;
//# sourceMappingURL=ethereum.js.map