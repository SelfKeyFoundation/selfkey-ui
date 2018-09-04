import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSRequiredInfo } from '../lws-required-info';

describe('LWS Required Info', () => {
	it('should show LWS Required Info', () => {
		const component = create(
			<LWSRequiredInfo
				attributes={[{ name: 'Country', value: '' }]}
				website={{
					name: 'PaveziCoin',
					url: 'http://www.pavezicoin.org',
					termsUrl: 'http://www.pavezicoin.org/terms',
					policyUrl: 'http://www.pavezicoin.org/privacy',
				}}
				required={[{ name: 'Name', value: 'Rodrigo Pavezi' }, { name: 'Country', value: '' }]}
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
