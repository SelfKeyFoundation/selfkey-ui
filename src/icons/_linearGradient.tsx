import * as React from 'react';

export type LinearGradientProps = any;

export const LinearGradient = ({ color }: LinearGradientProps) => {
	let color1;
	let color2;
	let id;
	switch (color) {
		case 'orange':
			color1 = '#B44000';
			color2 = '#DB7400';
			id = 'orange-linear-gradient';
			break;
		case 'grey':
			color1 = '#93B0C1';
			color2 = '#647A86';
			id = 'grey-linear-gradient';
			break;
		default:
			color1 = '#09A8BA';
			color2 = '#0ABBD0';
			id = 'default-linear-gradient';
	}

	return (
		<defs>
			<linearGradient x1="11.0842631%" y1="68.33943%" x2="36.0705554%" y2="0%" id={id}>
				<stop stopColor={color1} offset="0%"></stop>
				<stop stopColor={color2} offset="100%"></stop>
			</linearGradient>
		</defs>
	);
};

export default LinearGradient;
