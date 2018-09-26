"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var styles = {
    customTokenText: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        color: '#93b0c1',
        paddingTop: '8px',
        paddingBottom: '50px',
        textAlign: 'center'
    }
};
exports.CustomTokenText = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.customTokenText }, children));
});
exports.default = exports.CustomTokenText;
//# sourceMappingURL=custom-token-text.js.map