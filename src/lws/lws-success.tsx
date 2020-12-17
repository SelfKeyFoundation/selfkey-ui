import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SuccessIcon } from '../icons/success';

const styles = createStyles({
	lwsSuccess: {
		fontFamily: 'Lato, arial, sans-serif'
	},
	areaTitle: {
		textAlign: 'center',
		'& h2': {
			textTransform: 'uppercase',
			fontWeight: 'normal',
			fontSize: '16px',
			padding: '25px 0',
			margin: 0,
			color: '#23E6FE'
		},
		'& h3': {
			fontWeight: 'normal',
			fontSize: '21px',
			padding: '0 0 45px',
			margin: 0,
			color: '#93B0C1'
		}
	}
});

export const LWSSuccess = withStyles(styles)(({ classes }: WithStyles<typeof styles>) => (
	<div className={classes.lwsSuccess}>
		<div className={classes.areaTitle}>
			<SuccessIcon />
			<h2>Success</h2>
			<h3>You are now logged in through your SelfKey ID.</h3>
		</div>
	</div>
));

export default LWSSuccess;
