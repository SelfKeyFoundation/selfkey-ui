"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    root: {
        '& a': {
            color: '#23E6FE',
            textDecoration: 'none',
        },
        '& a &:hover': {
            textDecoration: 'underline'
        },
        padding: '60px 70px 80px',
    },
};
exports.LWSModalBody = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.root }, children));
});
exports.default = exports.LWSModalBody;
//# sourceMappingURL=lws-modal-body.js.map