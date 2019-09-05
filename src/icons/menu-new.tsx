import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        transition: 'all 0.2s ease-out',
        '& #icon-menu-new-mn': {
            width: '200px'
        },
        '& path': {
            transition: 'all 0.2s ease-out',
            '&:hover': {
                d: 'path("M76,27 L76,28.96 L106,28.96 L106,27 L76,27 Z M76,36.52 L76,38.48 L106,38.48 L106,36.52 L76,36.52 Z M76,46.04 L76,48 L106,48 L106,46.04 L76,46.04 Z")'
            }
        }
    }
};

export const MenuNewIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '30px', height: props.height || '21px' }} {...props} viewBox={props.viewBox || "0 0 30 21"}>
            <g id="MD-mn" stroke="none" strokeWidth="1">
                <g id="300.4-Nc-mn" transform="translate(-76.000000, -27.000000)" fill="#00C0D9" fillRule="nonzero">
                    <path d="M76,27 L76,28.96 L101,28.96 L101,27 L76,27 Z M76,36.52 L76,38.48 L106,38.48 L106,36.52 L76,36.52 Z M76,46.04 L76,48 L96,48 L96,46.04 L76,46.04 Z" id="icon-menu-new-mn"></path>
                    <polygon id="Path" points="220 36.52 220 38.48 250 38.48 250 36.52"></polygon>
                </g>
            </g>
        </SvgIcon>
    )
);

export default MenuNewIcon;
