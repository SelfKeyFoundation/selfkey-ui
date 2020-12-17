import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSButton } from '../lws-button';

describe('LWS Button', () => {
	it('should show LWS Button', () => {
		const component = create(<LWSButton>Test</LWSButton>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
