import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pagination from '../pagination';

describe('Pagination', () => {
	it('should show Pagination', () => {
		const component = create(<Pagination />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should defined onChangePage method on Pagination', () => {
		const component = shallow(<Pagination />);
		expect(component.simulate('changePage')).toBeDefined();
	});
});
