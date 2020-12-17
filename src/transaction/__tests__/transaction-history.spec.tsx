import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionHistory, StatusIconName } from '../transaction-history';

const externalLink = 'https://etherscan.io/tx/';
const txList = [
	{
		statusText: 'sented',
		date: '1995/45/45',
		cryptoCurrency: 'eth',
		value: '',
		statusIconName: 'failed' as StatusIconName,
		externalLink
	},
	{
		statusText: 'received',
		date: '1995/45/41',
		cryptoCurrency: 'key',
		value: '+15',
		statusIconName: 'receive' as StatusIconName,
		externalLink
	},
	{
		statusText: 'panding',
		date: '1995/45/41',
		cryptoCurrency: 'key',
		value: '+15',
		statusIconName: 'hourglass' as StatusIconName,
		externalLink
	},
	{
		statusText: 'sent',
		date: '1995/45/41',
		cryptoCurrency: 'key',
		value: '+15',
		statusIconName: 'sent' as StatusIconName,
		externalLink
	}
];

describe('Transaction History', () => {
	it('should show transaction history list', () => {
		const component = create(<TransactionHistory list={txList} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show transaction history with empty list', () => {
		const component = create(<TransactionHistory list={[]} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
