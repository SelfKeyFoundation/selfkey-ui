import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionNoGasError } from '../transaction-no-gas-error';

describe('Transaction no Gas Error', () => {
	const externalUrl = 'https://help.selfkey.org/article/87-how-does-gas-impact-transaction-speed';

	it('shoul open external link', () => {
		const mockFunction = jest.fn();
		const event = {
			preventDefault: jest.fn()
		};
		const component = create(
			<TransactionNoGasError
				openLink={mockFunction}
				publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe"
			/>
		);

		let tree = component.toJSON();
		const instance = component.root;
		expect(tree).toMatchSnapshot();

		const viewLink = instance.find(el => el.type === 'a' && el.props.onClick);
		viewLink.props.onClick(event);

		expect(mockFunction).toHaveBeenCalledWith(externalUrl);
		expect(event.preventDefault).toHaveBeenCalled();

		tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('shoul not call open external link', () => {
		const mockFunction = jest.fn();
		const event = {
			preventDefault: jest.fn()
		};
		const component = create(
			<TransactionNoGasError publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe" />
		);

		let tree = component.toJSON();
		const instance = component.root;
		expect(tree).toMatchSnapshot();

		const viewLink = instance.find(el => el.type === 'a' && el.props.onClick);
		viewLink.props.onClick(event);

		expect(mockFunction).not.toHaveBeenCalled();
		expect(event.preventDefault).toHaveBeenCalled();

		tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
