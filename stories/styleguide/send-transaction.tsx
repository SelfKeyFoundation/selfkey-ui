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
    <TransactionSendBox cryptoCurrency="ETH" onSendAction={onSendAction} totalBalance={getTotalBalance()} ethGasStationInfo={ethGasStationInfo}/>
);
