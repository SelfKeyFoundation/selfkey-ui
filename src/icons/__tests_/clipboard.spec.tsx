import * as React from 'react';
import { create } from 'react-test-renderer';
import ClipboardIcon from '../clipboard';

describe('Clipboard Icon', () => {
  it('should show Clipboard Icon', () => {
    const component = create(
      <ClipboardIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});