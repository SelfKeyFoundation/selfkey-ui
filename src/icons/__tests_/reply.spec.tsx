import * as React from 'react';
import { create } from 'react-test-renderer';
import ReplyIcon from '../reply';

describe('Reply Icon', () => {
  it('should show Reply Icon', () => {
    const component = create(
      <ReplyIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});