// @ts-ignore
import jss from 'jss';
import preset from 'jss-preset-default';
import reset = require('reset-jss');

export const setup = () => {
	jss.setup(preset());
	jss.createStyleSheet(reset).attach();
	const styles: any = {
		'@global': {
			body: {
				background: 'linear-gradient(135deg, rgba(43,53,64,1) 0%, rgba(30,38,46,1) 100%)',
				fontFamily: 'Lato, arial, sans-serif',
				fontSmoothing: 'antialiased',
				osxFontSmoothing: 'grayscale',
				'&::-webkit-scrollbar': {
					backgroundColor: 'rgba(0,0,0,.5)',
					width: '8px'
				},
				'&::-webkit-scrollbar-thumb': {
					borderRadius: '10px',
					webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
					backgroundColor: '#191919'
				},
			},
		},
	};
	jss.createStyleSheet(styles).attach();
};
