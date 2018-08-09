import * as React from 'react';
import { create } from 'react-test-renderer';
import { P } from '../paragraph';


describe('Paragraph', () => {
  it('should show Paragraph', () => {
    const component = create(
      <P>TEST</P>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





