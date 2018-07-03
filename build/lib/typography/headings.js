"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    base: {
        color: '#fff',
        fontFamily: '"Proxima Nova"',
        fontWeight: 400
    },
    h1: {
        fontSize: '26px'
    }
};
var Heading1 = function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("h1", { className: classes.base + " " + classes.h1 }, children));
};
/** Test description */
exports.H1 = react_jss_1.default(styles)(Heading1);
exports.default = exports.H1;
//# sourceMappingURL=headings.js.map