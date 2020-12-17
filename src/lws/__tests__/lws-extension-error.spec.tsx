import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSExtensionError } from '../lws-extension-error';

describe('LWS Extension Error Screen', () => {
	it('should show LWS Extension Error Screen', () => {
		const component = create(<LWSExtensionError />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
