import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionSendProgressBox } from '../../send/transaction-send-progress-box';

describe('Transaction Send Progress Box', () => {
	it('should show Transaction peding', () => {
		const component = create(
			<TransactionSendProgressBox
				locale="en"
				status="Pending"
				cryptoCurrency="KEY"
				address="0x4184288c556524df9cb9e58b73265ee66dca4efe"
				transactionHash="0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd"
				amount={0.00001}
				openLink={link => {
					return link;
				}}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show Transaction sent', () => {
		const component = create(
			<TransactionSendProgressBox
				locale="en"
				status="Sent!"
				cryptoCurrency="KEY"
				address="0x4184288c556524df9cb9e58b73265ee66dca4efe"
				transactionHash="0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd"
				amount={0.00001}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show Transaction sstatus othing else', () => {
		const component = create(
			<TransactionSendProgressBox
				locale="en"
				status="hey!"
				cryptoCurrency="KEY"
				address="0x4184288c556524df9cb9e58b73265ee66dca4efe"
				transactionHash="0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd"
				amount={0.00001}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should open transaction', () => {
		const mockFunction = jest.fn();
		const event = {
			preventDefault: jest.fn()
		};

		const component = create(
			<TransactionSendProgressBox
				locale="en"
				status="Sent!"
				cryptoCurrency="KEY"
				address="0x4184288c556524df9cb9e58b73265ee66dca4efe"
				transactionHash="0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd"
				amount={0.00001}
				openLink={mockFunction}
			/>
		);
		let tree = component.toJSON();
		const instance = component.root;
		expect(tree).toMatchSnapshot();

		const viewTransactionButton = instance.find(
			el =>
				el.type === 'button' && el.props.onClick && el.props.id === 'viewTransactionButton'
		);
		viewTransactionButton.props.onClick(event);

		expect(mockFunction).toHaveBeenCalled();

		tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should not open transaction', () => {
		const event = {
			preventDefault: jest.fn()
		};

		const component = create(
			<TransactionSendProgressBox
				locale="en"
				status="Sent!"
				cryptoCurrency="KEY"
				address="0x4184288c556524df9cb9e58b73265ee66dca4efe"
				transactionHash="0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd"
				amount={0.00001}
				openLink={undefined}
			/>
		);
		let tree = component.toJSON();
		const instance = component.root;
		expect(tree).toMatchSnapshot();

		const viewTransactionButton = instance.find(
			el =>
				el.type === 'button' && el.props.onClick && el.props.id === 'viewTransactionButton'
		);
		viewTransactionButton.props.onClick(event);

		tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
