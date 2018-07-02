import * as React from 'react';

import { CryptoPriceBox } from '../../src/price/crypto-price-box';

export const CryptoPriceList = () => (
    <div>
        <CryptoPriceBox fromCurrencyShort='KEY' fromCurrencySymbol="" fromValue='4' toCurrencyShort='USD' toCurrencySymbol="$" toValue='0.08'></CryptoPriceBox>
        <CryptoPriceBox fromCurrencyShort='ETH' fromCurrencySymbol="" fromValue='0.08212867' toCurrencyShort='USD' toCurrencySymbol="$" toValue='39.03'></CryptoPriceBox>
    </div>
);