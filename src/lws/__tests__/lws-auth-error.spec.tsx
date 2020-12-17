import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSAuthError } from '../lws-auth-error';

describe('LWS Auth Error Screen', () => {
	it('should show LWS Auth Error Screen', () => {
		const component = create(
			<LWSAuthError
				website={{
					name: 'PaveziCoin',
					url: 'http://www.pavezicoin.org',
					termsUrl: 'http://www.pavezicoin.org/terms',
					policyUrl: 'http://www.pavezicoin.org/privacy'
				}}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
