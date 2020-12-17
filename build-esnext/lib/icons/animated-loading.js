import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        width: '120px !important',
        height: '30px !important'
    }
});
export const AnimatedLoadingIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({}, props, { viewBox: "0 0 120 30" }),
    React.createElement("circle", { cx: "15", cy: "15", r: "15" },
        React.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
        React.createElement("animate", { attributeName: "fillOpacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })),
    React.createElement("circle", { cx: "60", cy: "15", r: "9", fillOpacity: "0.3" },
        React.createElement("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }),
        React.createElement("animate", { attributeName: "fillOpacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })),
    React.createElement("circle", { cx: "105", cy: "15", r: "15" },
        React.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
        React.createElement("animate", { attributeName: "fillOpacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })))));
export default AnimatedLoadingIcon;
//# sourceMappingURL=animated-loading.js.map