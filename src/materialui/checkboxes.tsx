import { withStyles, Checkbox, Radio } from '@material-ui/core';
import {
    baseDark,
    grey,
    primary,
    error,
} from '../colors';

export const DefaultCheckbox = withStyles({
    root: {
        borderRadius: '3px',
        color: grey,
        height: '18px',
        marginRight: '10px',
        padding: 0,
        width: '18px',
    },
    colorPrimary: {
        backgroundColor: baseDark,
        border: `1px solid ${grey}`,
        borderRadius: '3px',
        color: 'transparent',
        height: '18px',
        padding: 0,
        width: '18px',
    },
    colorSecondary: {
        backgroundColor: 'rgba(255, 46, 99, 0.09)',
        border: `1px solid ${error}`,
        borderRadius: '3px',
        color: 'transparent',
        height: '18px',
        padding: 0,
        width: '18px',
    },
    '&$checked:not($disabled):not($colorSecondary)': {
        backgroundColor: `${primary} !important`,
        border: `1px solid ${primary} !important`,
        color: `${baseDark} !important`,
    },
    disabled: {
        backgroundColor: '#222B34',
        border: '1px solid #2F3B48',
        borderRadius: '3px',
        color: 'transparent !important',
        height: '18px',
        padding: 0,
        width: '18px',
    },
})(Checkbox);

export const DefaultRadio = withStyles({
    root: {
        borderRadius: '50%',
        color: grey,
        height: '18px',
        marginRight: '10px',
        padding: 0,
        width: '18px',
    },
    colorPrimary: {
        backgroundColor: baseDark,
        border: `1px solid ${grey}`,
        borderRadius: '50%',
        color: 'transparent',
        height: '18px',
        padding: 0,
        width: '18px',
    },
    colorSecondary: {
        backgroundColor: 'rgba(255, 46, 99, 0.09)',
        border: `1px solid ${error}`,
        borderRadius: '50%',
        color: 'transparent',
        height: '18px',
        padding: 0,
        width: '18px',
    },
    disabled: {
        backgroundColor: '#222B34',
        border: '1px solid #2F3B48',
        borderRadius: '50%',
        color: 'transparent !important',
        height: '18px',
        padding: 0,
        width: '18px',
    },
})(Radio);
