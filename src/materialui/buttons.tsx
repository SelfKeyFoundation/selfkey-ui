import { withStyles, Button } from '@material-ui/core';
import { 
    white, 
    primary, 
    primaryTint,
    typography, 
    baseDark 
} from '../colors';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const FullButton = withStyles({
	root: {
        background: 'linear-gradient(to bottom, #0abbd0 0%, #09a8ba 100%)',
        border: '1px solid #0FB8D0',
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: white,
        '&:hover': {
            background: 'linear-gradient(to bottom, #0AA9D0 0%, #099BBA 100%)',
            border: '1px solid #0FB8D0',
        },
        '&:focus': {
            background: 'linear-gradient(to top right, #0A99D0 10%, #097CBA 70%);',
            border: '1px solid #0FB8D0',
        },
        '&$disabled': {
            color: white,
        },
    },
    disabled: {
        opacity: 0.5,
    },
})(Button);

export const OutlineButton = withStyles({
	root: {
        border: '2px solid #1CA9BA',
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: primary,
        '&:hover': {
            background: '#313D49',
            border: '2px solid #23E6FE',
        },
        '&:focus': {
            background: '#1E262E',
            border: '2px solid #1CA9BA',
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
        border: `1px solid ${typography}`,
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: typography,
        '&:hover': {
            background: '#313D49',
            borderColor: typography,
        },
        '&:focus': {
            background: baseDark,
            border: `1px solid ${typography}`,
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
        height: '44px',
        textTransform: 'initial',
        '&:hover': {
            border: `1px solid ${primaryTint}`,
        },
    },
    selected: {
        background: '#313D49',
        border: `1px solid ${primaryTint}`,
    },
})(ToggleButton);
