import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionBox } from './transaction-box';

test('should show Transaction Box with ETH Icon', () => {
  const component = create(
    <TransactionBox cryptoCurrency='ETH'>TEST</TransactionBox>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should show Transaction Box with KEY Icon', () => {
  const component = create(
    <TransactionBox cryptoCurrency='KEY'>TEST</TransactionBox>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should show Transaction Box with Custom text', () => {
  const component = create(
    <TransactionBox cryptoCurrency='IHT'>TEST</TransactionBox>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

