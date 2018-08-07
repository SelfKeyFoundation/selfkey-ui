import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '36px !important',
    height: '36px !important'
  }
};

export const CloseDialogIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='"0 0 38 38'>
    <g fill="none" fillRule="evenodd">
        <circle cx="18" cy="18" r="18" fill="#262F39" stroke="#303C49"/>
        <path fill="#3B4A5A" fillRule="nonzero" d="M10.815 9.64L9.64 10.814 16.824 18l-7.185 7.185 1.176 1.176L18 19.176l7.185 7.185 1.176-1.176L19.176 18l7.185-7.185-1.176-1.176L18 16.824z"/>
    </g>
  </SvgIcon>
));

export default CloseDialogIcon;




