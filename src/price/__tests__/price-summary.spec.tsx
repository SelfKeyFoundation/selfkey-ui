import * as React from 'react';
import { create } from 'react-test-renderer';
import { PriceSummary } from '../price-summary';


describe('Price Summary', () => {
  it('should show Price Summary', () => {
    const component = create(
      <PriceSummary locale='en' style='currency' currency='USD' value={0.0001}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Price Summary with appendCurrency', () => {
    const component = create(
      <PriceSummary locale='en' style='currency' currency='USD' value={0.0001} appendCurrency/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Price Summary with prependCurrency', () => {
    const component = create(
      <PriceSummary locale='en' style='currency' currency='USD' value={0.0001} prependCurrency/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Price Summary with currencyClass', () => {
    const component = create(
      <PriceSummary locale='en' style='currency' currency='USD' value={0.0001} currencyClass='test'/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





