import * as React from 'react';
import { Tooltip } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
const style = {
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
export const TooltipArrow = (() => (React.createElement("span", { className: "arrowClass", style: style })));
export const KeyTooltip = withStyles(createStyles({
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
            bottom: '6px',
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
            bottom: '8px',
            display: 'block',
            width: 0,
            zIndex: 1
        },
    },
}))(Tooltip);
export const SliderTooltip = withStyles(createStyles({
    tooltip: {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '12px',
        fontWeight: 600,
        margin: '8px 0',
        padding: 0,
    },
}))(Tooltip);
//# sourceMappingURL=tooltip-arrow.js.map