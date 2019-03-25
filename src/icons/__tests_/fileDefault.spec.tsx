import * as React from 'react';
import { create } from 'react-test-renderer';
import FileDefaultIcon from '../file-default';

describe('Filed Default Icon', () => {
  it('should show Filed Default Icon', () => {
    const component = create(
      <FileDefaultIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});