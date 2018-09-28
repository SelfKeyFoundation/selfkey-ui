import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Button } from '@material-ui/core';

const styles: StyleSheet = {
	root: {
		fontFamily: 'Lato, arial, sans-serif',
		fontWeight: 'bold',
		height: '45px',
	},
	containedPrimary: {
		background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
		color: '#FFFFFF',
		border: '1px solid #0FB8D0',
		'&:hover': {
			backgroundColor: '#3c4956',
		},
	},
	outlined: {
		border: '2px solid #1CA9BA',
		height: '44px',
		color: '#1CA9BA',
		'&:hover': {
			border: '2px solid #1CA9BA',
		},
	},
};

export type ButtonProps = {
	onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
	size?: 'large' | 'medium' | 'small';
	variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
	color?: 'primary' | 'secondary';
	type?: 'button' | 'submit';
};

export const StyledButton = injectSheet(styles)<ButtonProps>(
	({ classes, children, variant = 'contained', size, color = 'primary', type = 'button', onClick }) => (
		<Button variant={variant} size={size} classes={classes} color={color} type={type} onClick={onClick}>
			{children}
		</Button>
	)
);

export default StyledButton;
