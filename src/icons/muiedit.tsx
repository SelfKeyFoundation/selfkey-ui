import { withStyles } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';
import { grey, white } from 'colors';

export const MuiEditIcon = withStyles({
	root: {
        fill: grey,
        height: '20px',
        width: '20px',
        '&:hover': {
            fill: white,
        },
    },
})(EditOutlined);
