import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSModalBody } from '../lws-modal-body';

describe('LWS Modal Body', () => {
	it('should show LWS Modal Body', () => {
		const component = create(<LWSModalBody />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
