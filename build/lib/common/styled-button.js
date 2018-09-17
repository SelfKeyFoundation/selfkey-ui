"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    button: {
        fontFamily: 'Lato, arial, sans-serif',
        backgroundColor: '#435160',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#3c4956'
        }
    },
};
exports.StyledButton = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, onClick = _a.onClick;
    return (React.createElement(core_1.Button, { variant: "contained", size: 'large', className: classes.button, onClick: onClick }, children));
});
exports.default = exports.StyledButton;
//# sourceMappingURL=styled-button.js.map