import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '16px !important',
    height: '16px !important'
  }
};

export const EditTransparentIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='0 0 16 16'>
    <g id="💻-ID-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="403---Identity-Summary" transform="translate(-835.000000, -645.000000)" fill="#697C95">
            <g id="Area-box-2" transform="translate(150.000000, 513.000000)">
                <g id="Table" transform="translate(14.000000, 80.000000)">
                    <g id="Col7" transform="translate(661.000000, 12.000000)">
                        <g id="actions" transform="translate(10.000000, 40.000000)">
                            <path d="M11.3837648,3.5704 L12.5185222,2.3816 L13.6564966,3.5728 L12.5209349,4.7616 L11.3837648,3.5704 Z M3.13646645,14.5888 L1.99849208,13.3976 L10.2465946,4.7616 L11.3837648,5.952 L3.13646645,14.5888 Z M12.6568485,0 L0,13.3976 L0,16 L3.13646645,16 L16,3.0872 L12.6568485,0 Z" id="icon-edit"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </SvgIcon>
));

export default EditTransparentIcon;




