"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    root: {
        fontFamily: 'Lato, arial, sans-serif',
        fontWeight: 'bold',
        height: '45px',
    },
    containedPrimary: {
        background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
        color: '#FFFFFF',
        border: '1px solid #0FB8D0',
        '&:hover': {
            backgroundColor: '#3c4956',
        },
    },
    outlined: {
        border: '2px solid #1CA9BA',
        height: '44px',
        color: '#1CA9BA',
        '&:hover': {
            border: '2px solid #1CA9BA',
        },
    },
};
exports.StyledButton = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'contained' : _b, size = _a.size, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.type, type = _d === void 0 ? 'button' : _d, onClick = _a.onClick, disabled = _a.disabled, id = _a.id;
    return (React.createElement(core_1.Button, { id: id, variant: variant, size: size, classes: classes, color: color, type: type, onClick: onClick, disabled: disabled }, children));
});
exports.default = exports.StyledButton;
//# sourceMappingURL=styled-button.js.map