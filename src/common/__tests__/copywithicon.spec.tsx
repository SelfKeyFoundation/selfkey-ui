import * as React from 'react';
import { create } from 'react-test-renderer';
import { CopyWithIcon } from '../copywithicon';

describe('Copy With Icon', () => {
  it('should Copy With Icon', () => {
    const component = create(
      <CopyWithIcon text='Copy me!!'/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





