import { withStyles, Typography } from '@material-ui/core';
import { 
	typography, 
	baseDark
} from '../colors';

export const Tag = withStyles({
	root: {
		backgroundColor: baseDark,
		borderRadius: '10px',
		color: typography,
		display: 'inline',
		fontSize: '12px',
		lineHeight: '13px',
		margin: '4px 4px 4px 0',
		padding: '2px 10px',
	},
})(Typography);
