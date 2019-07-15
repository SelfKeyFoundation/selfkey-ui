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
			},
		},
	};
	jss.createStyleSheet(styles).attach();
};
