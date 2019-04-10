import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionSendBox } from '../../send/transaction-send-box';

describe('Transaction Send', () => {
  const ethGasStationInfo = {
    safeLow: '1.5',
    average: '18',
    fast: '50'
}

  it('should show Transaction send screen', () => {
    const mockFunction = jest.fn();

    const component = create(
      <TransactionSendBox address=''
        locale='en'
        fiatCurrency='USD'
        amount={0}
        balance={0.0003321}
        amountUsd={0.00}
        gasPrice={0}
        gasLimit={2100}
        nonce={1}
        sending={true}
        addressError={true} 
        onSendAction={mockFunction} 
        ethFee={0.0000000000001512} 
        onAddressFieldChange={mockFunction} 
        cryptoCurrency ='ETH' 
        usdFee={3.7190664e-11} 
        ethGasStationInfo={ethGasStationInfo}
        tokens={[
          {
              name: 'Selfkey',
              symbol: 'KEY',
              price: 0.01,
              balance: 30,
              balanceInFiat: 0.42432,
              address: 'test',
              hidden: false,
              isCustom: false,
          },
          {
              name: 'Ethereum',
              symbol: 'ETH',
              price: 400,
              balance: 0.00548,
              balanceInFiat: 20.52,
              hidden: false,
              isCustom: false,
          },
          {
              name: 'Other token',
              symbol: 'OTHR',
              price: 500,
              balance: 0.00548,
              balanceInFiat: 20.52,
              address: 'dsadsadsa',
              hidden: false,
              isCustom: true,
          },
          {
              name: 'Ethereum',
              symbol: 'OTHR',
              price: 400,
              balance: 0.00548,
              balanceInFiat: 20.52,
              address: 'dsadsadsa',
              hidden: true,
              isCustom: true,
          },
          {
              name: 'Ethereum',
              symbol: 'OTHR',
              price: 400,
              balance: 0.00548,
              balanceInFiat: 20.52,
              address: 'dsadsadsa',
              hidden: false,
              isCustom: false,
          },
        ]}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





