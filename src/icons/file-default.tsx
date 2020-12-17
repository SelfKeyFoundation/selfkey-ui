import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const FileDefaultIcon = withStyles(styles)(
	(props: SvgIconProps & WithStyles<typeof styles>) => (
		<SvgIcon
			style={{ width: props.width || '29px', height: props.height || '36px' }}
			{...props}
			viewBox={props.viewBox || '0 0 29 36'}
		>
			<g id="💻-ID-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g
					id="406---Delete-Attribute"
					transform="translate(-392.000000, -1549.000000)"
					fill="#697C95"
					fillRule="nonzero"
				>
					<g id="Area-box-3" transform="translate(150.000000, 1262.000000)">
						<g id="Table" transform="translate(14.000000, 80.000000)">
							<g id="Col2" transform="translate(228.000000, 11.000000)">
								<g id="line" transform="translate(0.000000, 194.000000)">
									<path
										d="M0,2 L0,2.7826087 L0,37.2173913 L0,38 L0.782608696,38 L27.3913043,38 L28.173913,38 L28.173913,37.2173913 L28.173913,12.173913 L28.173913,11.8559783 L27.9538043,11.611413 L18.5625,2.2201087 L18.3179348,2 L18,2 L0.782608696,2 L0,2 Z M1.56521739,3.56521739 L17.2173913,3.56521739 L17.2173913,12.173913 L17.2173913,12.9565217 L18,12.9565217 L26.6086957,12.9565217 L26.6086957,36.4347826 L1.56521739,36.4347826 L1.56521739,3.56521739 Z M18.7826087,4.69021739 L25.4836957,11.3913043 L18.7826087,11.3913043 L18.7826087,4.69021739 Z"
										id="icon-default-file"
									/>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</SvgIcon>
	)
);

export default FileDefaultIcon;
