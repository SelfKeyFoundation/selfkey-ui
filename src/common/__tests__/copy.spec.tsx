import * as React from 'react';
import { create } from 'react-test-renderer';
import { Copy } from '../copy';

describe('Copy', () => {
  it('should Copy', () => {
    const component = create(
      <Copy text='Copy me!!'/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





