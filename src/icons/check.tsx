import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const CheckIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
	<SvgIcon
		style={{ width: props.width || '18px', height: props.height || '18px' }}
		{...props}
		viewBox={props.viewBox || '0 0 18 18'}
	>
		<defs></defs>
		<g id="Modal---Dark" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				id="1.3.-Required-Information---missing-info"
				transform="translate(-490.000000, -340.000000)"
				fill="#1CBA7D"
			>
				<g id="Modal-content" transform="translate(420.000000, 100.000000)">
					<g id="Form" transform="translate(70.000000, 177.000000)">
						<g id="line-1" transform="translate(0.000000, 62.000000)">
							<path
								d="M15.984375,1 C16.5468778,1 17.0234355,1.19531055 17.4140625,1.5859375 C17.8046895,1.97656445 18,2.45312219 18,3.015625 L18,16.984375 C18,17.5468778 17.8046895,18.0234355 17.4140625,18.4140625 C17.0234355,18.8046895 16.5468778,19 15.984375,19 L2.015625,19 C1.45312219,19 0.976564453,18.8046895 0.5859375,18.4140625 C0.195310547,18.0234355 0,17.5468778 0,16.984375 L0,3.015625 C0,2.45312219 0.195310547,1.97656445 0.5859375,1.5859375 C0.976564453,1.19531055 1.45312219,1 2.015625,1 L15.984375,1 Z M6.984375,15.015625 L15.984375,6.015625 L14.578125,4.5625 L6.984375,12.15625 L3.421875,8.59375 L2.015625,10 L6.984375,15.015625 Z"
								id="icon-check"
							></path>
						</g>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
));

export default CheckIcon;
