import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionFeeBox } from '../../../send/fee/transaction-fee-box';

describe('Transaction Fee Box', () => {
  const ethGasStationInfo = {
    safeLow: '1.5',
    average: '18',
    fast: '50'
}

  it('should show Transaction Fee Box screen', () => {
    const component = create(
      <TransactionFeeBox locale='en'
      fiatCurrency='USD'
      amount={0}
      balance={0.0003321}
      amountUsd={0.00}
      gasPrice={0}
      gasLimit={2100}
      nonce={1}
      sending={true}
      addressError={true} 
      ethFee={0.0000000000001512} 
      cryptoCurrency ='ETH' 
      usdFee={3.7190664e-11} 
      ethGasStationInfo={ethGasStationInfo}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





