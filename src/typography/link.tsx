import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

const styles: StyleSheet = {
	a: {
		color: '#fff',
		fontFamily: 'ProximaNovaRegular, arial, sans-serif',
		fontSize: '16px',
		fontWeight: 400,
		textDecoration: 'underline',
	},
};

export type LinkProps = {
	className?: string;
	href?: string;
	onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const A = injectSheet(styles)<LinkProps>(({ classes, children, className, href, onClick }) => (
	<a className={`${classes.base} ${classes.a} ${className}`} href={href} onClick={onClick}>
		{children}
	</a>
));
