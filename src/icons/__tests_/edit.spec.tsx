import * as React from 'react';
import { create } from 'react-test-renderer';
import { EditIcon } from '../edit';

describe('Edit Icon', () => {
  it('should show Edit Icon', () => {
    const component = create(
      <EditIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





