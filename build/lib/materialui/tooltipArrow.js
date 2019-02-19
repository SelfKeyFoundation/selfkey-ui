"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
var style = {
    fontSize: 7,
    height: '3em',
    // position: 'absolute',
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
        '&[x-placement*="bottom"] $arrowArrow': {
            height: '1em',
            left: 0,
            marginTop: '-0.9em',
            top: 0,
            width: '3em',
            '&::before': {
                borderColor: "transparent transparent " + colors_1.warning + " transparent",
                borderWidth: '0 1em 1em 1em',
            },
        },
        '&[x-placement*="top"] $arrowArrow': {
            bottom: 0,
            height: '1em',
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            '&::before': {
                borderColor: colors_1.warning + " transparent transparent transparent",
                borderWidth: '1em 1em 0 1em',
            },
        },
        '&[x-placement*="right"] $arrowArrow': {
            height: '3em',
            left: 0,
            marginLeft: '-0.9em',
            width: '1em',
            '&::before': {
                borderColor: "transparent " + colors_1.warning + " transparent transparent",
                borderWidth: '1em 1em 1em 0',
            },
        },
        '&[x-placement*="left"] $arrowArrow': {
            height: '3em',
            marginRight: '-0.9em',
            right: 0,
            width: '1em',
            '&::before': {
                borderColor: "transparent transparent transparent " + colors_1.warning,
                borderWidth: '1em 0 1em 1em',
            },
        },
    },
})(core_1.Tooltip);
//# sourceMappingURL=tooltipArrow.js.map