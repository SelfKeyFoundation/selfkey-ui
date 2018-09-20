import * as React from 'react';

import { TransactionSendBox } from '../../src/transaction/send/transaction-send-box';

const ethGasStationInfo = {
    safeLow: '1.5',
    average: '18',
    fast: '50'
}

const getTotalBalance = () =>{
    console.log('aq shemodis zalian bevrjel ha');
    return (Math.random()*10).toString();
}

const onSendAction = (data: any) => {
    console.log(data);
};

export const SendTransaction = () => (
    <TransactionSendBox address=''
	amount={0}
	networkFee={0}
	gasPrice={0}
	gasLimit={2100}
	nonce={1}
    addressError={true} onSendAction={onSendAction} ethValue={0.00000008} onAddressFieldChange={onSendAction} cryptoCurrency ='ETH' usdValue={105.1} ethGasStationInfo={ethGasStationInfo}/>
);
