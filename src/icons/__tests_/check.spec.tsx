import * as React from 'react';
import { create } from 'react-test-renderer';
import { CheckIcon } from '../check';

describe('Check Icon', () => {
  it('should show Check Icon', () => {
    const component = create(
      <CheckIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





