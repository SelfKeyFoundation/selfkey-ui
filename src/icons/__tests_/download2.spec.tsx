import * as React from 'react';
import { create } from 'react-test-renderer';
import DownloadIcon2 from '../download-2';

describe('Download 2 Icon', () => {
	it('should show Download 2 Icon', () => {
		const component = create(<DownloadIcon2 />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
