import * as React from 'react';
import { create } from 'react-test-renderer';
import SKUploadIcon from '../upload';

describe('SKUpload Icon', () => {
  it('should show SKUpload Icon', () => {
    const component = create(
      <SKUploadIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});