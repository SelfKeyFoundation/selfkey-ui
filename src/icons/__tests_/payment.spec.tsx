import * as React from 'react';
import { create } from 'react-test-renderer';
import PaymentIcon from '../payment';

describe('Payment Icon', () => {
	it('should show Payment Icon', () => {
		const component = create(<PaymentIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
