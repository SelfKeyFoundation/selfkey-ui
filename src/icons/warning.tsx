import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '20px !important',
    height: '18px !important'
  }
};

export const WarningIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='0 0 20 18'>
    <title>icon-warning</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Modal---Dark" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1.3.-Required-Information---missing-info" transform="translate(-490.000000, -502.000000)" fill="#FFA700">
            <g id="Modal-content" transform="translate(420.000000, 100.000000)">
                <g id="Form" transform="translate(70.000000, 177.000000)">
                    <g id="line-4" transform="translate(0.000000, 224.000000)">
                        <path d="M0,18.2707889 L10.021322,1 L20,18.2707889 L0,18.2707889 Z M10.9168443,15.5415778 L10.9168443,13.7078891 L9.08315565,13.7078891 L9.08315565,15.5415778 L10.9168443,15.5415778 Z M10.9168443,11.9168443 L10.9168443,8.24946695 L9.08315565,8.24946695 L9.08315565,11.9168443 L10.9168443,11.9168443 Z" id="icon-warning"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </SvgIcon>
));

export default WarningIcon;




