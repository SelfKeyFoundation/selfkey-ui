import * as React from 'react';
import { create } from 'react-test-renderer';
import { List2Icon } from '../list2';

describe('List2 Icon', () => {
  it('should show List2 Icon', () => {
    const component = create(
      <List2Icon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





