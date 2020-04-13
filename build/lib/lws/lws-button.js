"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    root: {
        borderRadius: '3px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 700,
        height: '60px',
        letterSpacing: '0.6px',
        padding: '16px',
        textTransform: 'uppercase',
        transition: 'background .5s ease',
    },
};
exports.LWSButton = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className, onClick = _a.onClick;
    return (React.createElement("button", { className: classes.root + " " + className, onClick: onClick }, children));
});
exports.default = exports.LWSButton;
//# sourceMappingURL=lws-button.js.map