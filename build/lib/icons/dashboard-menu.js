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
        stroke: "#93A4AF",
        '&:hover': {
            stroke: 'white',
        }
    }
});
export var DashboardMenuIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({ style: { width: props.width || '24px', height: props.height || '24px' } }, props, { viewBox: props.viewBox || "0 0 24 24" }),
    React.createElement("defs", null),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "300-Navigation", transform: "translate(-1171.000000, -171.000000)" },
            React.createElement("g", { id: "Menu", transform: "translate(1140.000000, 0.000000)" },
                React.createElement("g", { id: "Top-menu", transform: "translate(30.000000, 165.000000)" },
                    React.createElement("path", { d: "M6.6,17.7 L2.6,17.7 C1.99214237,17.7 1.5,18.1921424 1.5,18.8 L1.5,20.4 C1.5,21.0078576 1.99214237,21.5 2.6,21.5 L6.6,21.5 C7.20785763,21.5 7.7,21.0078576 7.7,20.4 L7.7,18.8 C7.7,18.1921424 7.20785763,17.7 6.6,17.7 Z M15.4,6.5 L11.4,6.5 C10.7921424,6.5 10.3,6.99214237 10.3,7.6 L10.3,9.2 C10.3,9.80785763 10.7921424,10.3 11.4,10.3 L15.4,10.3 C16.0078576,10.3 16.5,9.80785763 16.5,9.2 L16.5,7.6 C16.5,6.99214237 16.0078576,6.5 15.4,6.5 Z M15.4,12.9 L11.4,12.9 C10.7921424,12.9 10.3,13.3921424 10.3,14 L10.3,20.4 C10.3,21.0078576 10.7921424,21.5 11.4,21.5 L15.4,21.5 C16.0078576,21.5 16.5,21.0078576 16.5,20.4 L16.5,14 C16.5,13.3921424 16.0078576,12.9 15.4,12.9 Z M6.6,6.5 L2.6,6.5 C1.99214237,6.5 1.5,6.99214237 1.5,7.6 L1.5,14 C1.5,14.6078576 1.99214237,15.1 2.6,15.1 L6.6,15.1 C7.20785763,15.1 7.7,14.6078576 7.7,14 L7.7,7.6 C7.7,6.99214237 7.20785763,6.5 6.6,6.5 Z", id: "icon-menu-dashboard" }))))))); });
export default DashboardMenuIcon;
//# sourceMappingURL=dashboard-menu.js.map