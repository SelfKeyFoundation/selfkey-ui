import * as React from 'react';
import { create } from 'react-test-renderer';
import { SuccessIcon } from '../success';

describe('Success  Icon', () => {
  it('should show Success Icon', () => {
    const component = create(
      <SuccessIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





