import * as React from 'react';
import { create } from 'react-test-renderer';
import SentIcon from '../sent';

describe('Sent Icon', () => {
  it('should show Sent Icon', () => {
    const component = create(
      <SentIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});