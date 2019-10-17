import * as React from 'react';
import { create } from 'react-test-renderer';
import NotarizeDocumentIcon from '../notarize-document';

describe('Notarize Document Icon', () => {
  it('should show Notarize Document Icon', () => {
    const component = create(
      <NotarizeDocumentIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});