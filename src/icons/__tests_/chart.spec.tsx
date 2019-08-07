import * as React from 'react';
import { create } from 'react-test-renderer';
import ChartIcon from '../chart';

describe('Chart Icon', () => {
  it('should show Chart Icon', () => {
    const component = create(
      <ChartIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});