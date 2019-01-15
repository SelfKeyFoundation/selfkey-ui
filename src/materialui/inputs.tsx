import { 
    withStyles, 
    Input, 
    InputLabel 
} from '@material-ui/core';
import { primary } from '../colors';

export const FileUploadLabel = withStyles({
	root: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '120px',
        justifyContent: 'space-between',
        marginTop: '100px',
        textAlign: 'center',
        '&:hover': {
            color: primary,
        },
    },
})(InputLabel);

export const FileUploadInput = withStyles({
	root: {
        display: 'none',
    },
})(Input);

export const DecimalInput = withStyles({
    inputType: {
        textAlign: 'right',
    },
})(Input);
