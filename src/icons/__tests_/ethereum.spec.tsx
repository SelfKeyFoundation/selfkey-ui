import * as React from 'react';
import { create } from 'react-test-renderer';
import { EthereumIcon } from '../ethereum';

describe('Ethereum Icon', () => {
	it('should show Ethereum Icon', () => {
		const component = create(<EthereumIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
