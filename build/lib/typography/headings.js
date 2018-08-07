"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var styles = {
    base: {
        color: '#fff',
        fontFamily: 'ProximaNovaRegular',
        fontWeight: 400
    },
    h1: {
        fontSize: '26px'
    },
    h2: {
        fontSize: '20px'
    }
};
exports.H1 = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className;
    return (React.createElement("h1", { className: classes.base + " " + classes.h1 + " " + className }, children));
});
exports.H2 = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className;
    return (React.createElement("h1", { className: classes.base + " " + classes.h2 + " " + className }, children));
});
exports.default = exports.H1;
//# sourceMappingURL=headings.js.map