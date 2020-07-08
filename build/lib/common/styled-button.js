"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        fontFamily: 'Lato, arial, sans-serif',
        fontWeight: 'bold',
        minHeight: '45px',
        height: 'auto',
        '& svg': {
            marginRight: '10px',
        },
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
        minHeight: '44px',
        height: 'auto',
        color: '#1CA9BA',
        '&:hover': {
            border: '2px solid #1CA9BA',
        },
    },
    disabled: {
        background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 0 2px 2px 0 #07C1DC, 2px 0 2px 0 rgba(0,0,0,0.2)',
    },
});
exports.StyledButton = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'contained' : _b, size = _a.size, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.type, type = _d === void 0 ? 'button' : _d, onClick = _a.onClick, _e = _a.disabled, disabled = _e === void 0 ? false : _e, id = _a.id;
    return (React.createElement(core_2.Button, { id: id, variant: variant, size: size, classes: classes, color: color, type: type, onClick: onClick, disabled: disabled }, children));
});
exports.default = exports.StyledButton;
//# sourceMappingURL=styled-button.js.map