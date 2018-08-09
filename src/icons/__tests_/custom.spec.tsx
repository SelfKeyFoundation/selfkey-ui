import * as React from 'react';
import { create } from 'react-test-renderer';
import { CustomIcon } from '../custom';

describe('Custom Icon', () => {
  it('should show Custom Icon', () => {
    const component = create(
      <CustomIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





