import * as React from 'react';
import { CryptoPriceBox } from '../../src/price/crypto-price-box';

export const CryptoPriceList = () => (
	<div>
		<CryptoPriceBox
			locale="en"
			cryptoCurrency="KEY"
			cryptoValue={4}
			toCurrency="USD"
			toValue={0.0174857}
		></CryptoPriceBox>
		<CryptoPriceBox
			locale="en"
			cryptoCurrency="ETH"
			cryptoValue={0.08212867}
			toCurrency="USD"
			toValue={38.89170316382}
		></CryptoPriceBox>
	</div>
);
