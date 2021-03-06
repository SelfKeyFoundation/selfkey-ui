import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const CheckMaIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
	<SvgIcon
		style={{ width: props.width || '16px', height: props.height || '11px' }}
		{...props}
		viewBox={props.viewBox || '0 0 16 11'}
	>
		<title>icon-check-manage-applications</title>
		<g
			id="💻-ID-Dashboard-check-icon-ma"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
		>
			<g
				id="410-Marketplace-Applications"
				transform="translate(-1176.000000, -852.000000)"
				fill="#1CBA7D"
			>
				<g id="Content" transform="translate(150.000000, 264.000000)">
					<g id="Collapse-box-2" transform="translate(0.000000, 565.000000)">
						<g id="Area-Header'" transform="translate(19.000000, 14.000000)">
							<g id="Status" transform="translate(1007.000000, 4.000000)">
								<path
									d="M6.47074118,15.6762029 C6.16665518,15.6759352 5.87512142,15.5549212 5.66023401,15.339766 L0.307828147,9.98736013 C-0.113266818,9.53544923 -0.100841614,8.8312256 0.335933173,8.39445081 C0.77270796,7.95767602 1.4769316,7.94525082 1.92884249,8.36634578 L6.47074118,12.9082445 L14.0711575,5.30782815 C14.5230684,4.88673318 15.227292,4.89915839 15.6640668,5.33593317 C16.1008416,5.77270796 16.1132668,6.4769316 15.6921719,6.92884249 L7.28124836,15.339766 C7.06636095,15.5549212 6.77482719,15.6759352 6.47074118,15.6762029 L6.47074118,15.6762029 Z"
									id="icon-check-ma"
								></path>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
));

export default CheckMaIcon;
