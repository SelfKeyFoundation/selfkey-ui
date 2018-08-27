"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    root: {
        padding: '60px 70px 80px',
        '& a': {
            color: '#23E6FE',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    },
};
exports.LWSModalBody = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.root }, children));
});
exports.default = exports.LWSModalBody;
//# sourceMappingURL=lws-modal-body.js.map