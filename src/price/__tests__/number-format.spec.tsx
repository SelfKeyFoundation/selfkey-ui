import * as React from 'react';
import { create } from 'react-test-renderer';
import { NumberFormat } from '../number-format';


describe('Number Format', () => {
  it('should show Number Format', () => {
    const component = create(
      <NumberFormat locale='en' priceStyle='currency' currency='USD' value={0.0001} fractionDigits={10}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





