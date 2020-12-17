import * as React from 'react';
import { create } from 'react-test-renderer';
import TrezorBridgeIcon from '../trezor-bridge';

describe('Trezor Bridge Icon', () => {
	it('should show Trezor Bridge Icon', () => {
		const component = create(<TrezorBridgeIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
