import * as React from 'react';
import { create } from 'react-test-renderer';
import { H1, H2, H3 } from '../headings';

describe('Headings', () => {
  it('should show Heading 1', () => {
    const component = create(
      <H1>TEST</H1>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Heading 2', () => {
    const component = create(
      <H2>TEST</H2>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Heading 3', () => {
    const component = create(
      <H3>TEST</H3>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





