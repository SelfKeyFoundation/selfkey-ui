import * as React from 'react';
import { create } from 'react-test-renderer';
import CertificateIcon from '../certificate';

describe('Certificate Icon', () => {
  it('should show Certificate Icon', () => {
    const component = create(
      <CertificateIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});