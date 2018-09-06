import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSRequiredInfo } from '../lws-required-info';

describe('LWS Required Info', () => {
	it('should show LWS Required Info', () => {
		const component = create(
			<LWSRequiredInfo
				attributes={[{ key: 'country', label: 'Country', data: { value: 'test' } }]}
				website={{
					name: 'PaveziCoin',
					url: 'http://www.pavezicoin.org',
					termsUrl: 'http://www.pavezicoin.org/terms',
					policyUrl: 'http://www.pavezicoin.org/privacy',
				}}
				required={[
					{ key: 'name', label: 'Name', data: { value: 'Rodrigo Pavezi' } },
					{ key: 'country', label: 'Country' },
				]}
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
