import * as React from 'react';
import { create } from 'react-test-renderer';
import MarketplaceNotariesIcon from '../marketplace-notaries';

describe('Marketplace Notaries Icon', () => {
	it('should show Marketplace Notaries Icon', () => {
		const component = create(<MarketplaceNotariesIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
