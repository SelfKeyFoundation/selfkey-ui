import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '20px !important',
    height: '20px !important'
  }
};

export const EditIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='0 0 20 20'>
    <title>icon-edit</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Modal---Dark" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1.3.-Required-Information---missing-info" transform="translate(-930.000000, -501.000000)" fill="#93B0C1">
            <g id="Modal-content" transform="translate(420.000000, 100.000000)">
                <g id="Form" transform="translate(70.000000, 177.000000)">
                    <g id="line-4" transform="translate(0.000000, 224.000000)">
                        <path d="M440,15.8333333 L452.291667,3.54166667 L456.458333,7.70833333 L444.166667,20 L440,20 L440,15.8333333 Z M459.6875,4.47916667 L457.65625,6.51041667 L453.489583,2.34375 L455.520833,0.3125 C455.729168,0.104165625 455.989582,0 456.302083,0 C456.614585,0 456.874999,0.104165625 457.083333,0.3125 L459.6875,2.91666667 C459.895834,3.12500104 460,3.3854151 460,3.69791667 C460,4.01041823 459.895834,4.27083229 459.6875,4.47916667 Z" id="icon-edit"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </SvgIcon>
));

export default EditIcon;




