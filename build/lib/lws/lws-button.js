"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSButton = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        borderRadius: '3px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 700,
        height: '60px',
        letterSpacing: '0.6px',
        padding: '16px',
        textTransform: 'uppercase',
        transition: 'background .5s ease'
    }
});
exports.LWSButton = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className, onClick = _a.onClick;
    return (React.createElement("button", { className: classes.root + " " + className, onClick: onClick }, children));
});
exports.default = exports.LWSButton;
//# sourceMappingURL=lws-button.js.map