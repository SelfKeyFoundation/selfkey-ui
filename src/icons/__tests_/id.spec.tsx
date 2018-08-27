import * as React from 'react';
import { create } from 'react-test-renderer';
import { IDIcon } from '../id';

describe('Id Icon', () => {
  it('should show Id Icon', () => {
    const component = create(
      <IDIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





