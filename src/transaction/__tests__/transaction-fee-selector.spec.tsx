import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionFeeSelector } from '../transaction-fee-selector';

describe('Transaction Fee Selector', () => {
	it('should show Transaction Fee Selector screen', () => {
		const component = create(
			<TransactionFeeSelector
				minGasPrice={1}
				maxGasPrice={2}
				gasLimit={2}
				fiat="USD"
				fiatRate={1}
				defaultValue={0}
				value={0}
				onChange={(value: number) => console.log(value)}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
