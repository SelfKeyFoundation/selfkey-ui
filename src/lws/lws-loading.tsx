import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import AnimatedLoadingIcon from '../icons/animated-loading';

const styles: StyleSheet = {
	loading: {
		minHeight: '300px',
		textAlign: 'center',
		lineHeight: '300px',
		'& svg circle': {
			fill: '#1CA9BA',
		},
	},
};

export const LWSLoading = injectSheet(styles)<{}>(({ classes }) => (
	<div className={classes.loading}>
		<AnimatedLoadingIcon />
	</div>
));

export default LWSLoading;
