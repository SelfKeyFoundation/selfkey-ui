"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    customTokenText: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: '14px',
        color: '#93b0c1',
        paddingTop: '8px',
        paddingBottom: '50px',
        textAlign: 'center'
    }
};
var CustomTokenTextComponent = function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.customTokenText }, children));
};
/** Test description */
exports.CustomTokenText = react_jss_1.default(styles)(CustomTokenTextComponent);
exports.default = exports.CustomTokenText;
//# sourceMappingURL=custom-token-text.js.map