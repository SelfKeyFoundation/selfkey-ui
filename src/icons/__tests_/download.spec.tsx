import * as React from 'react';
import { create } from 'react-test-renderer';
import { DownloadIcon } from '../download';

describe('Download Icon', () => {
  it('should show Download Icon', () => {
    const component = create(
      <DownloadIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





