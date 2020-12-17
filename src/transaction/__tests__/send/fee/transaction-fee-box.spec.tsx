import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionFeeBox } from '../../../send/fee/transaction-fee-box';

describe('Transaction Fee Box', () => {
	const ethGasStationInfo = {
		safeLow: '1.5',
		average: '18',
		fast: '50'
	};

	it('should show Transaction Fee Box screen', () => {
		const component = create(
			<TransactionFeeBox
				locale="en"
				fiatCurrency="USD"
				gasPrice={0}
				gasLimit={2100}
				nonce={1}
				ethFee={0.0000000000001512}
				usdFee={3.7190664e-11}
				ethGasStationInfo={ethGasStationInfo}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show Transaction Advanced Fee Box screen', () => {
		const component = create(
			<TransactionFeeBox
				locale="en"
				fiatCurrency="USD"
				gasPrice={0}
				gasLimit={2100}
				nonce={1}
				ethFee={0.0000000000001512}
				usdFee={3.7190664e-11}
				showAdvanced={true}
				ethGasStationInfo={ethGasStationInfo}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
