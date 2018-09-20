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
    <TransactionSendBox address=''
	amount={0}
	networkFee={0}
	gasPrice={0}
	gasLimit={2100}
	nonce={1}
    addressError={false} ethValue={0.00000008} onAddressFieldChange={fn} cryptoCurrency ='ETH' usdValue={105.1} ethGasStationInfo={ethGasStationInfo}/>
);
