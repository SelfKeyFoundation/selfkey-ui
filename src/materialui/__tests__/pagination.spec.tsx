import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pagination from '../pagination';

describe('Pagination', () => {
  it('should show Pagination', () => {
    const component = create(
        <Pagination />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should defined onChangePage method on Pagination', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.simulate('changePage')).toBeDefined();
  });
});