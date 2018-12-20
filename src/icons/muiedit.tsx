import { withStyles } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';

export const MuiEditIcon = withStyles({
	root: {
        fill: '#697C95',
        height: '20px',
        width: '20px',
        '&:hover': {
            fill: 'white',
        },
    },
})(EditOutlined);
