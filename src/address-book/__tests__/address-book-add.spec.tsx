import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { AddressBookAdd } from '../address-book-add';

describe('Address Book Add', () => {
	it('should show Address Book Add', () => {
		const component = create(
			<AddressBookAdd
				onSave={(label, address) => alert('onEdit' + label + address)}
				onCancel={() => alert('onCancel')}
				onLabelChange={label => alert('onLabelChange ' + label)}
				onAddressChange={address => alert('onAddressChange ' + address)}
				labelError="hey"
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should defined onChange', () => {
		const component = mount(
			<AddressBookAdd
				onSave={(label, address) => console.log('onEdit' + label + address)}
				onCancel={() => console.log('onCancel')}
				onLabelChange={label => console.log('onLabelChange ' + label)}
				onAddressChange={address => console.log('onAddressChange ' + address)}
				labelError="hey"
			/>
		);
		component.find('#labelInput').simulate('change', { target: { value: '' } });
		component.find('#formwrap').simulate('submit');

		component.find('#addressInput').simulate('change', { target: { value: '' } });
	});
});
