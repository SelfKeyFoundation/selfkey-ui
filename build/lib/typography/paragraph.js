"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    p: {
        color: '#93b0c1',
        fontFamily: '"Proxima Nova"',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.67
    }
};
var Paragraph = function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("p", { className: classes.base + " " + classes.p }, children));
};
exports.P = react_jss_1.default(styles)(Paragraph);
//# sourceMappingURL=paragraph.js.map