import * as React from 'react';

import { TransactionSendBox } from '../../src/transaction/send/transaction-send-box';

const ethGasStationInfo = {
    safeLow: '1.5',
    average: '18',
    fast: '50'
}

var fn = () => {

};

export const SendTransaction = () => (
    <TransactionSendBox ethValue="0.00000008" onAddressFieldChange={fn} cryptoCurrency ='ETH' nonce= "1" usdValue="105.1" gasLimit="2100" showAdvanced={false} ethGasStationInfo={ethGasStationInfo}/>
);
