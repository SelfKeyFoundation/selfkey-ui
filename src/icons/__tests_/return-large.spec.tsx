import * as React from 'react';
import { create } from 'react-test-renderer';
import { ReturnLargeIcon } from '../return-large';

describe('Return Large Icon', () => {
  it('should show Return Large Icon', () => {
    const component = create(
      <ReturnLargeIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





