import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const MarketplaceMenuIcon = withStyles(styles)(
	(props: SvgIconProps & WithStyles<typeof styles>) => (
		<SvgIcon
			style={{ width: props.width || '15px', height: props.height || '16px' }}
			{...props}
			viewBox={props.viewBox || '0 0 15 16'}
		>
			<defs></defs>
			<g id="🖥-Main-Dashboard" stroke="none" strokeWidth="1" fillRule="evenodd">
				<g
					id="300-Navigation"
					transform="translate(-1172.000000, -231.000000)"
					fillRule="nonzero"
				>
					<g id="Menu" transform="translate(1140.000000, 0.000000)">
						<g id="Top-menu" transform="translate(30.000000, 165.000000)">
							<path
								d="M9.38553362,66 C7.35756163,66 5.69322606,67.6643356 5.69322606,69.6923076 L3.23168769,69.6923076 C2.90455284,69.691849 2.63422394,69.9473943 2.6163031,70.2740382 L2.00091851,81.3509607 C1.99168262,81.5199149 2.0524149,81.6852189 2.16883617,81.808007 C2.28525744,81.9307951 2.44709678,82.0002347 2.6163031,81.9999994 L16.1547641,81.9999994 C16.3239705,82.0002347 16.4858098,81.9307951 16.6022311,81.808007 C16.7186523,81.6852189 16.7793846,81.5199149 16.7701487,81.3509607 L16.1547641,70.2740382 C16.1368433,69.9473943 15.8665144,69.691849 15.5393795,69.6923076 L13.0778412,69.6923076 C13.0778412,67.6643356 11.4135056,66 9.38553362,66 Z M9.38553362,67.2307692 C10.7421769,67.2307692 11.847072,68.3356643 11.847072,69.6923076 L6.92399525,69.6923076 C6.92399525,68.3356643 8.02889035,67.2307692 9.38553362,67.2307692 Z M3.81341838,70.9230767 L5.69322606,70.9230767 L5.69322606,73.3846151 L6.92399525,73.3846151 L6.92399525,70.9230767 L11.847072,70.9230767 L11.847072,73.3846151 L13.0778412,73.3846151 L13.0778412,70.9230767 L14.9552454,70.9230767 L15.5033217,80.7692302 L3.26774542,80.7692302 L3.81341838,70.9230767 Z"
								id="icon-menu-marketplace"
							></path>
						</g>
					</g>
				</g>
			</g>
		</SvgIcon>
	)
);

export default MarketplaceMenuIcon;
