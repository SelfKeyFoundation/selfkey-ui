import * as React from 'react';
import { create } from 'react-test-renderer';
import DeleteIcon from '../delete';

describe('Delete Icon', () => {
  it('should show Delete Icon', () => {
    const component = create(
      <DeleteIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});