import * as React from 'react';
import { create } from 'react-test-renderer';
import { GridIcon } from '../grid';

describe('Grid Icon', () => {
  it('should show Grid Icon', () => {
    const component = create(
      <GridIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





