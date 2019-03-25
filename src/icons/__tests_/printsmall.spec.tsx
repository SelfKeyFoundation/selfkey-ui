import * as React from 'react';
import { create } from 'react-test-renderer';
import PrintSmallIcon from '../print-small';

describe('Print Small Icon', () => {
  it('should show Print Small Icon', () => {
    const component = create(
      <PrintSmallIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});