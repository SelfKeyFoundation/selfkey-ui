import * as React from 'react';
import { create } from 'react-test-renderer';
import FilePdfIcon from '../file-pdf';

describe('Filed Pdf Icon', () => {
  it('should show Filed Pdf Icon', () => {
    const component = create(
      <FilePdfIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});