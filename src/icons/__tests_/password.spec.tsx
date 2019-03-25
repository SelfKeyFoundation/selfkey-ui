import * as React from 'react';
import { create } from 'react-test-renderer';
import PasswordIcon from '../password';

describe('Password Icon', () => {
  it('should show Password Icon', () => {
    const component = create(
      <PasswordIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});