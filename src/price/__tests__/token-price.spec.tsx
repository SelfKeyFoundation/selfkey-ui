import * as React from 'react';
import { create } from 'react-test-renderer';
import { TokenPrice } from '../token-price';

describe('Token Price', () => {
	it('should show Token Price for key', () => {
		const component = create(
			<TokenPrice
				locale="en"
				cryptoCurrency="KEY"
				cryptoValue={4}
				toCurrency="USD"
				toValue={0.0174857}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
