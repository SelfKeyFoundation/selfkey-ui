"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var style = {
    fontSize: 7,
    height: '3em',
    width: '3em',
    '&::before': {
        borderStyle: 'solid',
        content: '""',
        display: 'block',
        height: 0,
        margin: 'auto',
        width: 0,
    },
};
exports.TooltipArrow = (function () { return (React.createElement("span", { className: "arrowClass", style: style })); });
exports.KeyTooltip = core_1.withStyles({
    popper: {
        backgroundColor: 'transparent',
        opacity: 1,
    },
    tooltip: {
        color: '#93B0C1',
        fontSize: '13px',
        lineHeight: '19px',
        padding: '15px',
        '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            borderStyle: 'solid',
            borderWidth: '8px 8px 0',
            borderColor: '#43505B transparent',
            display: 'block',
            width: 0,
            zIndex: 0
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            borderStyle: 'solid',
            borderWidth: '7px 7px 0',
            borderColor: '#1F2830 transparent',
            marginLeft: '1px',
            bottom: '-7px',
            display: 'block',
            width: 0,
            zIndex: 1
        },
    },
})(core_1.Tooltip);
//# sourceMappingURL=tooltipArrow.js.map