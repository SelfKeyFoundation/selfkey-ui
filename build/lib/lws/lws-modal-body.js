"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSModalBody = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var styles = core_1.createStyles({
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
});
exports.LWSModalBody = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.root }, children));
});
exports.default = exports.LWSModalBody;
//# sourceMappingURL=lws-modal-body.js.map