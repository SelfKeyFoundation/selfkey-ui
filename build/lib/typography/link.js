"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var styles = {
    a: {
        color: '#fff',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        textDecoration: 'underline',
    },
};
exports.A = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className, href = _a.href, onClick = _a.onClick;
    return (React.createElement("a", { className: classes.base + " " + classes.a + " " + className, href: href, onClick: onClick }, children));
});
//# sourceMappingURL=link.js.map