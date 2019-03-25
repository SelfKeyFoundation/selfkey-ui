import * as React from 'react';
import { create } from 'react-test-renderer';
import PrintIcon from '../print';

describe('Print Icon', () => {
  it('should show Print Icon', () => {
    const component = create(
      <PrintIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});