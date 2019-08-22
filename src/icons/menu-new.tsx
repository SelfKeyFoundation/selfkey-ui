import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        fill: '#00c0d9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#23E6FE',
        }
    }
};

export const MenuNewIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '30px', height: props.height || '21px' }} {...props} viewBox={props.viewBox || "0 0 30 21"}>
            <defs></defs>
            <g id="🖥-Main-Dashboard-mn" stroke="none" stroke-width="1">
                <g id="300.4-Navigation-collapsed-mn" transform="translate(-76.000000, -27.000000)" fill="#00C0D9" fill-rule="nonzero">
                    <path d="M76,27 L76,28.96 L101,28.96 L101,27 L76,27 Z M76,36.52 L76,38.48 L106,38.48 L106,36.52 L76,36.52 Z M76,46.04 L76,48 L96,48 L96,46.04 L76,46.04 Z" id="icon-menu-new-mn"></path>
                </g>
            </g>
        </SvgIcon>
    )
);

export default MenuNewIcon;
