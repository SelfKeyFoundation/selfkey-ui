import { withStyles, Input, Select } from '@material-ui/core';
import {
    baseDark,
    typography,
    error,
    primary,
} from '../colors';

export const InputField = withStyles({
	root: {
        backgroundColor: baseDark,
        borderRadius: '4px',
        border: '1px solid #384656',
        color: typography,
        fontSize: '14px',
        height: '44px',
        lineHeight: '21px',
        paddingLeft: '16px',
    },
    focused: {
        "&$focused:not($error):not($disabled)": {
            border: `1px solid ${primary}`,
            boxShadow: `0 0 3px 1px ${primary}`,
        },
    },
    error: {
        backgroundColor: 'rgba(255, 46, 99, 0.09)',
        border: `1px solid ${error}`,
        color: error,
        marginBottom: '6px',
    },
    disabled: {
        color: '#93B0C1',
        opacity: 0.5,
    },
})(Input);

export const DecimalInput = withStyles({
    inputType: {
        textAlign: 'right',
    },
})(InputField);

export const DropdownInputField = withStyles({
	root: {
        backgroundColor: baseDark,
        borderRadius: '4px',
        border: '1px solid #384656',
        color: typography,
        fontSize: '14px',
        lineHeight: '21px',
        // paddingLeft: '16px',
    },
    focused: {
    },
})(InputField);

export const DropdownSelect = withStyles({
	root: {
        // backgroundColor: baseDark,
        // borderRadius: '4px',
        // border: '1px solid #384656',
        // color: typography,
        // fontSize: '14px',
        // lineHeight: '21px',
        // paddingLeft: '16px',
    },
})(Select);
