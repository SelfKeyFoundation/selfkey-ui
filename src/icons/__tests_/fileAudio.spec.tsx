import * as React from 'react';
import { create } from 'react-test-renderer';
import FileAudioIcon from '../file-audio';

describe('Filed Audio Icon', () => {
	it('should show Filed Audio Icon', () => {
		const component = create(<FileAudioIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
