import * as React from 'react';
import { create } from 'react-test-renderer';
import { ReturnIcon } from '../return';

describe('Return  Icon', () => {
  it('should show Return Icon', () => {
    const component = create(
      <ReturnIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





