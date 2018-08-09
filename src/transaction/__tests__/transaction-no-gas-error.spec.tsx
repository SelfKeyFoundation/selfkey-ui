import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionNoGasError } from '../transaction-no-gas-error';

describe('Transaction no Gas Error', () => {
  it('should show Transaction not enough gas error screen', () => {
    const component = create(
      <TransactionNoGasError cryptoCurrency='ETH' publicKey='0x4184288c556524df9cb9e58b73265ee66dca4efe'/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





