import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import AnimatedLoadingIcon from '../icons/animated-loading';

const styles = createStyles({
	loading: {
		minHeight: '300px',
		textAlign: 'center',
		lineHeight: '300px',
		'& svg circle': {
			fill: '#1CA9BA'
		}
	}
});

export const LWSLoading = withStyles(styles)(({ classes }: WithStyles<typeof styles>) => (
	<div className={classes.loading}>
		<AnimatedLoadingIcon />
	</div>
));

export default LWSLoading;
