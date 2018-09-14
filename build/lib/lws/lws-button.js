"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    root: {
        webkitTransition: 'background .5s ease',
        transition: 'background .5s ease',
        height: '60px',
        boxSizing: 'border-box',
        borderRadius: '3px',
        fontSize: '16px',
        padding: '16px',
        textTransform: 'uppercase',
        fontFamily: 'ProximaNovaSemibold, arial, sans-serif',
        letterSpacing: '0.6px',
        cursor: 'pointer'
    },
};
exports.LWSButton = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className, onClick = _a.onClick;
    return (React.createElement("button", { className: classes.root + " " + className, onClick: onClick }, children));
});
exports.default = exports.LWSButton;
//# sourceMappingURL=lws-button.js.map