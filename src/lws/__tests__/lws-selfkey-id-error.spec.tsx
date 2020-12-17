import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSSelfkeyIdError } from '../lws-selfkey-id-error';

describe('LWS Selfkey Id Error', () => {
	it('should show LWS Selfkey Id Error', () => {
		const component = create(<LWSSelfkeyIdError />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
