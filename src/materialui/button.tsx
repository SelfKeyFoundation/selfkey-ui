import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import injectSheet, { StyleSheet } from 'react-jss';

const backButtonStyles: StyleSheet = {
	backButtonContainer: {
		position: 'absolute'
	},
	bold: {
		fontWeight: 600
	},
};

export type BackButtonProps = any;

export const BackButton = injectSheet(backButtonStyles)<BackButtonProps>(
	({ classes, onclick, leftPosition, ...props }) => {
		return (
			<div className={classes.backButtonContainer} style={{ left: leftPosition || '75px' }}>
				<Button variant="outlined" color="secondary" size="small" onClick={onclick}>
					<Typography variant="subtitle2" color="secondary" className={classes.bold}>
						‹ Back
					</Typography>
				</Button>
			</div>
		);
	}
);
