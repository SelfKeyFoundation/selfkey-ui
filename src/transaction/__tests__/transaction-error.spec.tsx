import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionError } from '../transaction-error';

describe('Transaction Error', () => {
	it('should show Transaction error screen', () => {
		const component = create(
			<TransactionError
				message="Some error message"
				publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe"
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
