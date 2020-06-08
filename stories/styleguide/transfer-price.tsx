import * as React from 'react';
import { TransferPrice } from '../../src/price/transfer-price';
import { TokenPrice } from '../../src/price/token-price';
import { SelfkeyIcon } from '../../src/icons/selfkey';

export const TransferPriceWrapper = () => (
    <TransferPrice  cryptoCurrencyShort='KEY' cryptoCurrencyName='Selfkey' CryptoCurrencyIconComponent={SelfkeyIcon}>
        <TokenPrice locale='en' cryptoCurrency='KEY' cryptoValue={4} toCurrency='USD' toValue={0.0174857}></TokenPrice>
    </TransferPrice>
);
