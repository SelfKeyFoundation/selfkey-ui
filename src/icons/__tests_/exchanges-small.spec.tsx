import * as React from 'react';
import { create } from 'react-test-renderer';
import { ExchangesSmallIcon } from '../exchanges-small';

describe('Exchanges Small Icon', () => {
  it('should show Exchanges Small Icon', () => {
    const component = create(
      <ExchangesSmallIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





