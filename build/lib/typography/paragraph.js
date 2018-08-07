"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var styles = {
    p: {
        color: '#fff',
        fontFamily: 'ProximaNovaRegular',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.67
    }
};
exports.P = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className;
    return (React.createElement("p", { className: classes.base + " " + classes.p + " " + className }, children));
});
//# sourceMappingURL=paragraph.js.map