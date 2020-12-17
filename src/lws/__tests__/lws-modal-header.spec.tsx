import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSModalHeader } from '../lws-modal-header';

describe('LWS Modal Header', () => {
	it('should show LWS Modal Header', () => {
		const component = create(<LWSModalHeader />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
