import * as React from 'react';
import { create } from 'react-test-renderer';
import SentNewIcon from '../sent-new';

describe('Sent New Icon', () => {
  it('should show Sent New Icon', () => {
    const component = create(
      <SentNewIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});