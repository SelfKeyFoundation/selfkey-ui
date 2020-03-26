import * as React from 'react';
import { create } from 'react-test-renderer';
import CalculatorIcon from '../calculator';

describe('Calculator Icon', () => {
  it('should show Calculator Icon', () => {
    const component = create(
      <CalculatorIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});