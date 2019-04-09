import * as React from 'react';
import { create } from 'react-test-renderer';
import Pagination from '../pagination';

describe('Pagination', () => {
  it('should show Pagination', () => {
    const component = create(
        <Pagination />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});