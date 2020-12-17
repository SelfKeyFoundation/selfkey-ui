import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionBox } from '../transaction-box';

describe('Transaction Box', () => {
	it('should show Transaction Box with ETH Icon', () => {
		const component = create(<TransactionBox cryptoCurrency="ETH">TEST</TransactionBox>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show Transaction Box with KEY Icon', () => {
		const component = create(<TransactionBox cryptoCurrency="KEY">TEST</TransactionBox>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show Transaction Box with KI Icon', () => {
		const component = create(<TransactionBox cryptoCurrency="KI">TEST</TransactionBox>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show Transaction Box with Custom text', () => {
		const component = create(<TransactionBox cryptoCurrency="IHT">TEST</TransactionBox>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
