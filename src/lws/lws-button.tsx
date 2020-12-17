import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
	root: {
		borderRadius: '3px',
		boxSizing: 'border-box',
		cursor: 'pointer',
		fontFamily: 'Lato, arial, sans-serif',
		fontSize: '16px',
		fontWeight: 700,
		height: '60px',
		letterSpacing: '0.6px',
		padding: '16px',
		textTransform: 'uppercase',
		transition: 'background .5s ease'
	}
});

export type ButtonProps = {
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	className?: string;
	children: any;
};

export const LWSButton = withStyles(styles)(
	({ classes, children, className, onClick }: ButtonProps & WithStyles<typeof styles>) => (
		<button className={`${classes.root} ${className}`} onClick={onClick}>
			{children}
		</button>
	)
);

export default LWSButton;
