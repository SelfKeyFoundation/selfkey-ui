import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export const NewAddressIcon = (props: SvgIconProps) => (
	<SvgIcon
		style={{ width: props.width || '23px', height: props.height || '25px' }}
		{...props}
		viewBox={props.viewBox || '0 0 23 25'}
	>
		<defs></defs>
		<g id="🛠-Wallet-Setup" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				id="111---Import-Keystore-File-(UTC)"
				transform="translate(-529.000000, -399.000000)"
				fill="#23E6FE"
				fillRule="nonzero"
			>
				<g id="Modal" transform="translate(240.000000, 268.000000)">
					<g id="Buttons" transform="translate(40.000000, 106.000000)">
						<g id="button2" transform="translate(180.000000, 0.000000)">
							<path
								d="M73.8076923,25 L73.8076923,25.9615385 L73.8076923,34.6153846 L75.7307692,34.6153846 L75.7307692,26.9230769 L89.1923077,26.9230769 L89.1923077,48.0769231 L75.7307692,48.0769231 L75.7307692,40.3846154 L73.8076923,40.3846154 L73.8076923,49.0384615 L73.8076923,50 L74.7692308,50 L90.1538462,50 L91.1153846,50 L91.1153846,49.0384615 L91.1153846,25.9615385 L91.1153846,25 L90.1538462,25 L74.7692308,25 L73.8076923,25 Z M79.9074519,32.9627404 L78.5252404,34.3449519 L80.71875,36.5384615 L69,36.5384615 L69,38.4615385 L80.71875,38.4615385 L78.5252404,40.6550481 L79.9074519,42.0372596 L83.7536058,38.1911058 L84.4146635,37.5 L83.7536058,36.8088942 L79.9074519,32.9627404 Z"
								id="icon-import"
							></path>
						</g>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
);

export default NewAddressIcon;
