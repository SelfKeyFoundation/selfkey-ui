"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTokenText = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var styles = core_1.createStyles({
    customTokenText: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        color: '#93b0c1',
        paddingTop: '8px',
        paddingBottom: '50px',
        textAlign: 'center'
    }
});
exports.CustomTokenText = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.customTokenText }, children));
});
exports.default = exports.CustomTokenText;
//# sourceMappingURL=custom-token-text.js.map