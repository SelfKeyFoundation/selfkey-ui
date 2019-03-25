import * as React from 'react';
import { create } from 'react-test-renderer';
import SelfkeyLogo from '../selfkeyLogo';

describe('Selfkey Logo Icon', () => {
  it('should show Selfkey Logo Icon', () => {
    const component = create(
      <SelfkeyLogo />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});