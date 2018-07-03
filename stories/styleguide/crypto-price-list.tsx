import * as React from 'react';

import { CryptoPriceBox } from '../../src/price/crypto-price-box';

export const CryptoPriceList = () => (
    <div>
        <CryptoPriceBox fromLocale="" fromCurrency='KEY' fromValue='4' toLocale= "en" toCurrency='USD' toValue='0.0174857'></CryptoPriceBox>
        <CryptoPriceBox fromLocale="" fromCurrency='ETH' fromValue='0.08212867' toLocale="en" toCurrency='USD' toValue='39.03'></CryptoPriceBox>
    </div>
);