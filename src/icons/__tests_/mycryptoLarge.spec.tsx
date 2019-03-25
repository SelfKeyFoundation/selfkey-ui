import * as React from 'react';
import { create } from 'react-test-renderer';
import MyCryptoLargeIcon from '../my-crypto-large';

describe('My Crypto Large Icon', () => {
  it('should show My Crypto Large Icon', () => {
    const component = create(
      <MyCryptoLargeIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});