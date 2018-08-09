import * as React from 'react';
import { create } from 'react-test-renderer';
import { TokenBox } from '../token-box';
import { SelfkeyIcon } from '../../icons/selfkey';


describe('Token Box', () => {
  it('should show Token Box for key', () => {
    const component = create(
      <TokenBox  cryptoCurrencyShort='KEY' cryptoCurrencyName='Selfkey' CryptoCurrencyIconComponent={SelfkeyIcon} publicKey='0x4184288c556524df9cb9e58b73265ee66dca4efe'/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





