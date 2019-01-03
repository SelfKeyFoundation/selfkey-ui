import { withStyles } from '@material-ui/core';
import { 
    primary, 
    primaryTint,
    typography, 
} from '../colors';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
