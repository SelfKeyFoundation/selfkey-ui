import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const ReturnIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
	<SvgIcon
		style={{ width: props.width || '15px', height: props.height || '18px' }}
		{...props}
		viewBox={props.viewBox || '0 0 15 18'}
	>
		<g id="💹-Marketplace" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				id="506.1---Exchange-Details-+-Active-Stake-+-Reclaim-KEY"
				transform="translate(-931.000000, -347.000000)"
				fill="#1CA9BA"
			>
				<g id="Modal" transform="translate(240.000000, 146.000000)">
					<g id="Area-Body" transform="translate(0.000000, 71.000000)">
						<g id="Row-1" transform="translate(29.000000, 48.000000)">
							<g
								id="Button/Full-Primary"
								transform="translate(638.000000, 69.000000)"
							>
								<g id="text" transform="translate(24.000000, 12.000000)">
									<path
										d="M7.30015817,14.1402847 L11.5546904,14.1402847 L9.18797907,11.7728434 L10.2202214,10.740601 L14.3499209,14.8703005 C12.8417082,16.3785132 11.6839032,17.5363183 10.2202214,19 L9.18797907,17.9677576 L11.5546904,15.6003163 L7.30015817,15.6003163 C3.26828081,15.6003163 0,12.3320355 0,8.30015817 C0,4.26828081 3.26828081,1 7.30015817,1 L14.6003163,1 L14.6003163,2.46003163 L7.30015817,2.46003163 C4.07494829,2.46003163 1.46003163,5.07494829 1.46003163,8.30015817 C1.46003163,11.525368 4.07494829,14.1402847 7.30015817,14.1402847"
										id="icon-return"
										transform="translate(7.300158, 10.000000) scale(-1, -1) translate(-7.300158, -10.000000) "
									/>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
));

export default ReturnIcon;
