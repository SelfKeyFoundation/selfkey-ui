import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const StructureIcon = withStyles(styles)(
	(props: SvgIconProps & WithStyles<typeof styles>) => (
		<SvgIcon
			style={{ width: props.width || '27px', height: props.height || '24px' }}
			{...props}
			viewBox={props.viewBox || '0 0 27 24'}
		>
			<g id="🌈-UI-Guidelines" stroke="none" strokeWidth="1" fillRule="evenodd">
				<g
					id="3.-Style-Guide---Forms"
					transform="translate(-1042.000000, -859.000000)"
					fill="inherit"
				>
					<g id="Line-3-Buttons" transform="translate(39.000000, 559.000000)">
						<g id="button-groups" transform="translate(979.000000, 242.000000)">
							<g id="Button-group" transform="translate(7.000000, 48.000000)">
								<g id="button-structure">
									<path
										d="M27.6666667,15.3333333 L33,15.3333333 L33,10 L27.6666667,10 L27.6666667,15.3333333 Z M27.6666667,34 L33,34 L33,28.6666667 L27.6666667,28.6666667 L27.6666667,34 Z M38.3333333,34 L43.6666667,34 L43.6666667,28.6666667 L38.3333333,28.6666667 L38.3333333,34 Z M17,34 L22.3333333,34 L22.3333333,28.6666667 L17,28.6666667 L17,34 Z M21,26 L18.3333333,26 L18.3333333,20.6666667 L29,20.6666667 L29,18 L31.6666667,18 L31.6666667,20.6666667 L42.3333333,20.6666667 L42.3333333,26 L39.6666667,26 L39.6666667,23.3333333 L31.6666667,23.3333333 L31.6666667,26 L29,26 L29,23.3333333 L21,23.3333333 L21,26 Z"
										id="icon-structure"
									></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</SvgIcon>
	)
);

export default StructureIcon;
