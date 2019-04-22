import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { TransactionSendBox } from '../../send/transaction-send-box';

describe('Transaction Send', () => {
  const mockFunction = jest.fn();
  const ethGasStationInfo = {
    safeLow: '1.5',
    average: '18',
    fast: '50'
  };

  const comp = <TransactionSendBox address=''
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
    isSendCustomToken={true}
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
  />;
  

  it('should show Transaction send screen', () => {
    const component = create(
      comp,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('allAmountButton element exists and onClick prop is defined on it', () => {
    const component = mount(
      comp,
    );

    const allAmountButton = component.find('#allAmountButton');
    expect(allAmountButton.length).toEqual(1);
    expect(allAmountButton.simulate('click')).toBeDefined();
  });

  it('amountInput element exists and onChange prop is defined on it', () => {
    const component = mount(
      comp,
    );

    const amountInput = component.find('#amountInput');
    expect(amountInput.length).toEqual(1);
    expect(amountInput.simulate('change')).toBeDefined();
  });

  it('sendToAddress element exists and onChange prop is defined on it', () => {
    const component = mount(
      comp,
    );

    const sendToAddress = component.find('#sendToAddress');
    expect(sendToAddress.length).toEqual(1);
    expect(sendToAddress.simulate('change')).toBeDefined();
  });
  
  it('customToken element exists and onChange prop is defined on it', () => {
    const component = mount(
      comp,
    );

    const customToken = component.find('#customToken');
    expect(customToken.length).toEqual(1);
    expect(customToken.simulate('change')).toBeDefined();
  });
});





