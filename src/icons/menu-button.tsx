import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

const styles: StyleSheet = {
    root: {
        fill: '#00c0d9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#23E6FE',
        }
    }
};

export const MenuButtonIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon width="512px" height="512px" {...props} viewBox="0 0 459 459">
            <g>
                <g id="menu">
                    <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" />
                </g>
            </g>
        </SvgIcon>
    )
);

export default MenuButtonIcon;
