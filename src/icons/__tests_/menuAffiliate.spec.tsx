import * as React from 'react';
import { create } from 'react-test-renderer';
import MenuAffiliateIcon from '../menu-affiliate';

describe('Menu Affiliate Icon', () => {
	it('should show Menu Affiliate Icon', () => {
		const component = create(<MenuAffiliateIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
