import * as React from 'react';
import { create } from 'react-test-renderer';
import { CryptoPriceBox } from '../crypto-price-box';

describe('Crypto Price Box', () => {
	it('should show Crypto Price Box for Key', () => {
		const component = create(
			<CryptoPriceBox
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
