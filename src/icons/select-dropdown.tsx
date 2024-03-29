import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
	root: {
		fill: '#93A4AF',
		marginTop: '8px',
		transition: 'all 0.2s ease-out',
		'&:hover': {
			fill: 'white'
		}
	}
});

export const SelectDropdownIcon = withStyles(styles)(
	(props: SvgIconProps & WithStyles<typeof styles>) => (
		<SvgIcon
			style={{ width: props.width || '18px', height: props.height || '10px' }}
			{...props}
			viewBox={props.viewBox || '0 0 18 10'}
		>
			<g id="select-dropdown-icon" stroke="none" strokeWidth="1" fillRule="evenodd">
				<g
					id="Top-Header-Personal-dropdown-icon"
					transform="translate(-1372.000000, -33.000000)"
				>
					<g id="Tosp-Header-dropdown-icon">
						<path
							d="M1381.88592,33.3262947 C1381.44762,32.8911161 1380.59838,32.8911161 1380.15882,33.327009 L1372.32954,41.0937947 C1371.89016,41.5296876 1371.89016,42.237009 1372.32954,42.6730804 C1372.76892,43.1079018 1373.48081,43.1089733 1373.92037,42.6730804 L1380.99995,35.6496876 L1388.07954,42.6730804 C1388.51892,43.1089733 1389.23135,43.1079018 1389.67037,42.6730804 C1390.10975,42.2371876 1390.10975,41.5298661 1389.67037,41.0937947 C1389.67037,41.0937947 1381.95071,33.3902233 1381.88592,33.3262947 Z"
							id="icon-dropdown"
							transform="translate(1381.000000, 38.000000) scale(1, -1) translate(-1381.000000, -38.000000) "
						></path>
					</g>
				</g>
			</g>
		</SvgIcon>
	)
);

export default SelectDropdownIcon;
