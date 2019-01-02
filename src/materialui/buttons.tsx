import { withStyles, Button } from '@material-ui/core';
import { 
    primary, 
    primaryTint,
    typography, 
    baseDark, 
} from '../colors';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const OutlineButton = withStyles({
	root: {
        background: 'transparent',
        border: '2px solid #1CA9BA',
        color: primary,
        '&:hover': {
            background: '#313D49',
            borderColor: '#23E6FE',
        },
        '&:focus': {
            background: '#1E262E',
        },
        '&$disabled': {
            color: primary,
        },
    },
    disabled: {
        opacity: 0.5,
    },
})(Button);

export const OutlineSecondaryButton = withStyles({
    root: {
        background: 'transparent',
        border: `1px solid ${typography}`,
        color: typography,
        '&:hover': {
            background: '#313D49',
        },
        '&:focus': {
            background: baseDark,
        },
        '&$disabled': {
            color: typography,
        },
    },
    disabled: {
        opacity: 0.5,
    },
})(Button);

export const ToggleBtnGroup = withStyles({
    selected: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
})(ToggleButtonGroup);

export const ToggleBtn = withStyles({
	root: {
        backgroundColor: '#293743',
        border: '1px solid #1D505F',
        boxSizing: 'border-box',
        fill: typography,
        height: '44px',
        textTransform: 'initial',
        '&:hover': {
            border: `1px solid ${primaryTint}`,
        },
    },
    selected: {
        background: '#313D49',
        border: `1px solid ${primaryTint}`,
        fill: primary,
        color: primary,
    },
})(ToggleButton);
