import { withStyles } from '@material-ui/core';
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import { grey, white } from '../colors';

export const MuiAddIcon = withStyles({
	root: {
		fill: grey,
		height: '20px',
		width: '20px',
		'&:hover': {
			fill: white,
		},
	},
})(AddCircleOutlineOutlined);
