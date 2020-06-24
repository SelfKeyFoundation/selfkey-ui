import * as React from 'react';
import { create } from 'react-test-renderer';
import { WalletSmallIcon } from '../wallet-small';

describe('Wallet Small Icon', () => {
  it('should show Wallet Small Icon', () => {
    const component = create(
      <WalletSmallIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





