import * as React from 'react';

import { CryptoPriceBox } from '../../src/price/crypto-price-box';

export const CryptoPriceList = () => (
    <div>
        <CryptoPriceBox fromLocale="" fromCurrencyShort='KEY' fromValue='4' toLocale= "en" toCurrencyShort='USD' toValue='0.0174857'></CryptoPriceBox>
        <CryptoPriceBox fromLocale="" fromCurrencyShort='ETH' fromValue='0.08212867' toLocale="en" toCurrencyShort='USD' toValue='39.03'></CryptoPriceBox>
    </div>
);