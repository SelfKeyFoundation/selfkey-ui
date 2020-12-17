import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionFeeSliderSelector } from '../transaction-fee-slider-selector';

describe('Transaction Fee Slider Selector', () => {
	it('should show Transaction Fee Slider Selector screen', () => {
		const component = create(
			<TransactionFeeSliderSelector
				minGasPrice={1000000000}
				maxGasPrice={100000000000}
				slowPrice={10000000000}
				mediumPrice={23000000000}
				fastPrice={100000000000}
				gasLimit={1}
				fiat={'USD'}
				fiatRate={2}
				onChange={(value: number) => console.log(value)}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
