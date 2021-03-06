import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

const styles = createStyles({
	root: {
		fontFamily: 'Lato, arial, sans-serif',
		fontWeight: 'bold',
		minHeight: '45px',
		height: 'auto',
		'& svg': {
			marginRight: '10px'
		}
	},
	containedPrimary: {
		background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
		color: '#FFFFFF',
		border: '1px solid #0FB8D0',
		'&:hover': {
			backgroundColor: '#3c4956'
		}
	},
	outlined: {
		border: '2px solid #1CA9BA',
		minHeight: '44px',
		height: 'auto',
		color: '#1CA9BA',
		'&:hover': {
			border: '2px solid #1CA9BA'
		}
	},
	disabled: {
		background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
		boxShadow:
			'inset -1px 0 0 0 rgba(0,0,0,0.24), 0 2px 2px 0 #07C1DC, 2px 0 2px 0 rgba(0,0,0,0.2)'
	}
});

export type Variant = 'text' | 'outlined' | 'contained';
export type Color = 'primary' | 'secondary';

export type ButtonProps = {
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	size?: 'large' | 'medium' | 'small';
	variant?: Variant;
	color?: Color;
	type?: 'button' | 'submit';
	disabled?: boolean;
	id?: string;
	children?: any;
};

export const StyledButton = withStyles(styles)(
	({
		classes,
		children,
		variant = 'contained',
		size,
		color = 'primary',
		type = 'button',
		onClick,
		disabled = false,
		id
	}: ButtonProps & WithStyles<typeof styles>) => (
		<Button
			id={id}
			variant={variant as Variant}
			size={size}
			classes={classes}
			color={color as Color}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	)
);

export default StyledButton;
