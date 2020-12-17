import * as React from 'react';
import { create } from 'react-test-renderer';
import LWSLoading from '../lws-loading';

describe('LWS Loading', () => {
	it('should show LWS Loading', () => {
		const component = create(<LWSLoading />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
