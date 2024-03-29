import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export const SelfkeyLogo = (props: SvgIconProps) => (
	<SvgIcon
		style={{ width: props.width || '18px', height: props.height || '20px' }}
		{...props}
		viewBox={props.viewBox || '0 0 18 20'}
	>
		<defs>
			<linearGradient
				x1="50%"
				y1="97.784%"
				x2="50%"
				y2="1.559%"
				id="selfkey-logo-linearGradient-1"
			>
				<stop stopColor="#08BCCD" offset="0%"></stop>
				<stop stopColor="#2DA1F8" offset="100%"></stop>
			</linearGradient>
			<linearGradient
				x1="50%"
				y1="97.784%"
				x2="4git 1.849%"
				y2="-16.397%"
				id="selfkey-logo-linearGradient-2"
			>
				<stop stopColor="#08BCCD" offset="0%"></stop>
				<stop stopColor="#2DA1F8" offset="100%"></stop>
			</linearGradient>
		</defs>
		<g id="🌈-UI-Guidelines" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				id="4.-Style-Guide---Tables"
				transform="translate(-1002.000000, -744.000000)"
				fillRule="nonzero"
			>
				<g id="Small-table" transform="translate(39.000000, 588.000000)">
					<g id="Table-small" transform="translate(0.000000, 66.000000)">
						<g id="Col8" transform="translate(963.000000, 4.000000)">
							<g id="selfkey" transform="translate(0.000000, 86.000000)">
								<ellipse
									id="Oval"
									fill="url(#selfkey-logo-linearGradient-1)"
									cx="8.30153846"
									cy="14"
									rx="1.28615385"
									ry="1.29415385"
								></ellipse>
								<path
									d="M17.5384615,5 L8.76923077,0 L0,5 L0,15 L8.76923077,20 L17.5384615,15 L17.5384615,5 Z M11.5701538,4.32307692 C11.5698201,4.63873552 11.3147312,4.89492393 10.9990769,4.89661538 L8.87507692,4.89661538 L8.87507692,6.13169231 L10.4418462,6.13169231 C10.5936317,6.13201838 10.7390709,6.19262785 10.8461687,6.30018725 C10.9532665,6.40774665 11.0132498,6.55344523 11.0129231,6.70523077 C11.0134334,7.02118782 10.7578029,7.27778247 10.4418462,7.27846154 L8.87507692,7.27846154 L8.87507692,11.6753846 C8.876,11.6956923 8.876,11.716 8.87507692,11.7363077 C9.98338462,12.0292308 10.704,13.1012308 10.5609231,14.2427692 C10.4175385,15.3843077 9.45446154,16.2430769 8.30861538,16.2507692 C7.16246154,16.2584615 6.188,15.4129231 6.02953846,14.2732308 C5.87107692,13.1335385 6.57723077,12.0523077 7.68184615,11.7443077 C7.67917769,11.722148 7.67773958,11.6998574 7.67753846,11.6775385 L7.67753846,4.35292308 C7.67712997,4.19368662 7.74003701,4.04081873 7.85240347,3.92799057 C7.96476994,3.8151624 8.11737859,3.75162907 8.27661538,3.75138462 C8.32676923,3.75138462 8.37661538,3.75815385 8.42523077,3.77076923 C8.47229165,3.75808939 8.52079967,3.75157339 8.56953846,3.75138462 L11.0009231,3.75138462 C11.3165773,3.75307607 11.5716662,4.00926448 11.572,4.32492308 L11.5701538,4.32338462 L11.5701538,4.32307692 Z"
									id="Shape"
									fill="url(#selfkey-logo-linearGradient-2)"
								></path>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
);

export default SelfkeyLogo;
