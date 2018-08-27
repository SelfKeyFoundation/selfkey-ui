import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSSuccess } from '../lws-success';


describe('LWS Success', () => {
  it('should show LWS Success', () => {
    const component = create(
      <LWSSuccess/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





