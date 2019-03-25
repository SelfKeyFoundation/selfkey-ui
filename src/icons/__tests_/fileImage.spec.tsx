import * as React from 'react';
import { create } from 'react-test-renderer';
import FileImageIcon from '../file-image';

describe('Filed Image Icon', () => {
  it('should show Filed Image Icon', () => {
    const component = create(
      <FileImageIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});