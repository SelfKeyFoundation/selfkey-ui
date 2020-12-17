import * as React from 'react';
import { create } from 'react-test-renderer';
import SignatureIcon from '../signature';

describe('Signature Icon', () => {
	it('should show Signature Icon', () => {
		const component = create(<SignatureIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
