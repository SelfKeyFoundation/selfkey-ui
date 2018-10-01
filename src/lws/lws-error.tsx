import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import CommonStyle from '../common/common-style';

const styles: StyleSheet = {
	form: CommonStyle.form,

	lwsError: {
		fontFamily: 'Lato, arial, sans-serif'
	},

	formSubmitRow: {
		marginTop: '15px',
		'& button': {
			marginTop: '30px',
			fontWeight: 700
		},
	},

	supportText: {
		textAlign: 'center',
		lineHeight: '22px',
		fontFamily: 'Lato, arial, sans-serif',
		color: '#C5DCE9',
		padding: '0 0 30px',
		fontSize: '16px'
	},

	areaTitle: {
		textAlign: 'center',
		'& h2': {
			textTransform: 'uppercase',
			fontWeight: 'normal',
			fontSize: '16px',
			padding: '25px 0',
			margin: 0,
			color: '#D97300',
		},
		'& h3': {
			fontWeight: 'normal',
			fontSize: '21px',
			padding: '0 0 45px',
			margin: 0,
			color: '#93B0C1',
		},
	},
};

export type LWSErrorProps = {
	actionButton?: React.ReactElement<any>;
	actionName: string;
	errorName: string;
	actionIcon: React.ReactElement<any>;
	supportText: string;
};

export const LWSError = injectSheet(styles)<LWSErrorProps>(
	({ classes, actionButton, actionName, errorName, actionIcon, supportText }) => (
		<div className={classes.lwsError}>
			<div className={classes.areaTitle}>
				{actionIcon}
				<h2>{actionName}</h2>
				<h3>{errorName}</h3>
			</div>
			<div className={classes.form}>
				<p className={classes.supportText}>{supportText}</p>
				{actionButton ? <div className={classes.formSubmitRow}>{actionButton}</div> : null}
			</div>
		</div>
	)
);

export default LWSError;
