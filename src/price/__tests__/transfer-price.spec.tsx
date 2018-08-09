import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransferPrice } from '../transfer-price';
import { TokenPrice } from '../token-price';
import { SelfkeyIcon } from '../../icons/selfkey';

describe('Transfer Price', () => {
  it('should show Transfer Price for key', () => {
    const component = create(
      <TransferPrice  cryptoCurrencyShort='KEY' cryptoCurrencyName='Selfkey' CryptoCurrencyIconComponent={SelfkeyIcon}>
        <TokenPrice locale='en' cryptoCurrency='KEY' cryptoValue={4} toCurrency='USD' toValue={0.0174857}/>
      </TransferPrice>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





