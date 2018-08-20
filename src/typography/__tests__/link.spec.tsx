import * as React from 'react';
import { create } from 'react-test-renderer';
import { A } from '../link';


describe('Link', () => {
  it('should show Link', () => {
    const component = create(
      <A href="http://test" onClick={(event)=>{}}>TEST</A>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
