import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSError } from '../lws-error';

describe('LWS Error Screen', () => {
	it('should show LWS Error Screen', () => {
		const component = create(
			<LWSError
				actionName="test"
				errorName="test"
				supportText="test"
				actionButton={<button>retry</button>}
				actionIcon={<span>icon</span>}
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
