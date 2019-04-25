import * as React from 'react';
import { create } from 'react-test-renderer';
import { UserPlusIcon } from '../userplus';

describe('User Plus Icon', () => {
  it('should show User Plus Icon', () => {
    const component = create(
      <UserPlusIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
