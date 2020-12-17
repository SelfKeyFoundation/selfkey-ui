import * as React from 'react';
import { create } from 'react-test-renderer';
import { ActualTransactionFeeBox } from '../../../send/fee/actual-transaction-fee-box';

describe('Transaction Fee', () => {
	it('should show Transaction Fee screen', () => {
		const component = create(
			<ActualTransactionFeeBox locale="en" ethFee={0.0001} usdFee={0.02} fiatCurrency="USD" />
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
