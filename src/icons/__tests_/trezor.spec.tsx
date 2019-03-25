import * as React from 'react';
import { create } from 'react-test-renderer';
import TrezorIcon from '../trezor';

describe('Trezor Icon', () => {
  it('should show Trezor Icon', () => {
    const component = create(
      <TrezorIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});