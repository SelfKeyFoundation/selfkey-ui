import * as React from 'react';
import { create } from 'react-test-renderer';
import { CryptoPriceTable } from '../crypto-price-table';

describe('Crypto Price Table', () => {
	it('should show Crypto Price Table', () => {
		const component = create(
			<CryptoPriceTable
				locale="en"
				fiatCurrency="USD"
				alwaysVisible={['test', '']}
				tokens={[
					{
						name: 'Selfkey',
						symbol: 'KEY',
						price: 0.01,
						balance: 30,
						balanceInFiat: 0.42432,
						address: 'test',
						hidden: false,
						isCustom: false
					},
					{
						name: 'Ethereum',
						symbol: 'ETH',
						price: 400,
						balance: 0.00548,
						balanceInFiat: 20.52,
						hidden: false,
						isCustom: false
					},
					{
						name: 'Other token',
						symbol: 'OTHR',
						price: 500,
						balance: 0.00548,
						balanceInFiat: 20.52,
						address: 'dsadsadsa',
						hidden: false,
						isCustom: true
					},
					{
						name: 'Ethereum',
						symbol: 'OTHR',
						price: 400,
						balance: 0.00548,
						balanceInFiat: 20.52,
						address: 'dsadsadsa',
						hidden: true,
						isCustom: true
					},
					{
						name: 'Ethereum',
						symbol: 'OTHR',
						price: 400,
						balance: 0.00548,
						balanceInFiat: 20.52,
						address: 'dsadsadsa',
						hidden: false,
						isCustom: false
					}
				]}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
