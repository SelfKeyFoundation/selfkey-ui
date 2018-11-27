import { withStyles, Checkbox } from '@material-ui/core';
import {
    primary,
    baseDark,
    typography,
    grey,
} from '../colors';

export const DefaultCheckbox = withStyles({
    root: {
        backgroundColor: baseDark,
        borderRadius: '3px',
        border: `1px solid ${grey}`,
        boxSizing: 'border-box',
        color: typography,
        fontSize: '14px',
        height: '18px',
        lineHeight: '21px',
        marginRight: '10px',
        paddingLeft: '13px',
        width: '18px',
        '&$checked': {
            backgroundColor: baseDark,
            border: `1px solid ${primary}`,
            borderRadius: '3px',
            boxSizing: 'border-box',
            color: primary,
            strokeWidth: 1,
            stroke: primary,
        },
    },
    checked: {
        boxSizing: 'border-box',
    },
    focused: {
        "&$focused:not($error):not($disabled)": {
            border: `1px solid ${primary}`,
            boxShadow: `0 0 3px 1px ${primary}`,
        },
    },
    disabled: {
        opacity: 0.5,
    },
})(Checkbox);
