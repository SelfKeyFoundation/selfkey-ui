import * as React from 'react';
import { withStyles, Tooltip } from '@material-ui/core';
import { 
    // base, 
    warning, 
} from '../colors';

const style = {
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

export const TooltipArrow = (() => (
    <span className="arrowClass" style={ style }></span>
));

export const KeyTooltip = withStyles({
	popper: {
        backgroundColor: 'transparent',
        '&[x-placement*="bottom"] $arrowArrow': {
            height: '1em',
            left: 0,
            marginTop: '-0.9em',
            top: 0,
            width: '3em',
            '&::before': {
                borderColor: `transparent transparent ${warning} transparent`,
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
                borderColor: `${warning} transparent transparent transparent`,
                borderWidth: '1em 1em 0 1em',
            },
        },
        '&[x-placement*="right"] $arrowArrow': {
            height: '3em',
            left: 0,
            marginLeft: '-0.9em',
            width: '1em',
            '&::before': {
                borderColor: `transparent ${warning} transparent transparent`,
                borderWidth: '1em 1em 1em 0',
            },
        },
        '&[x-placement*="left"] $arrowArrow': {
            height: '3em',
            marginRight: '-0.9em',
            right: 0,
            width: '1em',
            '&::before': {
                borderColor: `transparent transparent transparent ${warning}`,
                borderWidth: '1em 0 1em 1em',
            },
        },
    },
})(Tooltip);
