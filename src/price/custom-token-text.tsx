import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
	customTokenText: {
		fontFamily: 'Lato, arial, sans-serif',
		fontSize: '14px',
		color: '#93b0c1',
		paddingTop: '8px',
		paddingBottom: '50px',
		textAlign: 'center'
	}
});

export const CustomTokenText = withStyles(
	styles
)(({ classes, children }: { children: any } & WithStyles<typeof styles>) => (
	<div className={classes.customTokenText}>{children}</div>
));

export default CustomTokenText;
