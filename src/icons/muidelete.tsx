import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { grey, white } from 'colors';

const styles: StyleSheet = {
  root: {
    fill: grey,
    height: '16px !important',
    width: '16px !important',
    '&:hover': {
        fill: white,
    },
  }
};

export const MuiDeleteIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
<SvgIcon {...props} viewBox="0 0 16 16" version="1.1">
    <title>icon-delete</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="-Main-Dashboard" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g id="304-Manage-My-Tokens" transform="translate(-1244.000000, -597.000000)" fill="inherit">
            <g id="Table" transform="translate(150.000000, 442.000000)">
                <g id="Col7" transform="translate(1094.000000, 155.000000)">
                    <path d="M9.13137085,8 L10.8284271,9.69705627 L9.69705627,10.8284271 L8,9.13137085 L6.30294373,10.8284271 L5.17157288,9.69705627 L6.86862915,8 L5.17157288,6.30294373 L6.30294373,5.17157288 L8,6.86862915 L9.69705627,5.17157288 L10.8284271,6.30294373 L9.13137085,8 Z M8,14.4 C4.4712,14.4 1.6,11.5288 1.6,8 C1.6,4.4712 4.4712,1.6 8,1.6 C11.5288,1.6 14.4,4.4712 14.4,8 C14.4,11.5288 11.5288,14.4 8,14.4 L8,14.4 Z M8,0 C3.5816,0 0,3.5816 0,8 C0,12.4184 3.5816,16 8,16 C12.4184,16 16,12.4184 16,8 C16,3.5816 12.4184,0 8,0 L8,0 Z" id="icon-delete"></path>
                </g>
            </g>
        </g>
    </g>
</SvgIcon>

));

export default MuiDeleteIcon;




