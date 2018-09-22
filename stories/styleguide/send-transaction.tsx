import * as React from 'react';

import { TransactionSendBox } from '../../src/transaction/send/transaction-send-box';

const ethGasStationInfo = {
    safeLow: '1.5',
    average: '18',
    fast: '50'
}

const fn = (data: any) => {
    console.log(data);
};

export const SendTransaction = () => (
    <TransactionSendBox address=''
    locale='en'
    fiatCurrency='USD'
    amount={0}
    balance={0.0003321}
    amountUsd={0.00}
	gasPrice={0}
	gasLimit={2100}
	nonce={1}
    addressError={true} onSendAction={fn} ethFee={0.0000000000001512} onAddressFieldChange={fn} cryptoCurrency ='ETH' usdFee={3.7190664e-11} ethGasStationInfo={ethGasStationInfo}/>
);
