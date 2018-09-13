import jss from 'jss';
import reset = require('reset-jss');
import preset from 'jss-preset-default';

export const setup = () => {
	jss.setup(preset());
	jss.createStyleSheet(reset).attach();
	const styles: any = {
		'@global': { "body": { fontFamily: "'Lato', arial, sans-serif" } },
	};
	jss.createStyleSheet(styles).attach();
};
