import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        stroke: "#93A4AF",
        '&:hover': {
            stroke: 'white',
        }
    }
};

export const DashboardMenuIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon width="16px" height="16px" {...props} viewBox="0 0 16 16">
            <defs></defs>
            <g id="🖥-Main-Dashboard" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="300-Navigation" transform="translate(-1171.000000, -171.000000)">
                    <g id="Menu" transform="translate(1140.000000, 0.000000)">
                        <g id="Top-menu" transform="translate(30.000000, 165.000000)">
                            <path d="M6.6,17.7 L2.6,17.7 C1.99214237,17.7 1.5,18.1921424 1.5,18.8 L1.5,20.4 C1.5,21.0078576 1.99214237,21.5 2.6,21.5 L6.6,21.5 C7.20785763,21.5 7.7,21.0078576 7.7,20.4 L7.7,18.8 C7.7,18.1921424 7.20785763,17.7 6.6,17.7 Z M15.4,6.5 L11.4,6.5 C10.7921424,6.5 10.3,6.99214237 10.3,7.6 L10.3,9.2 C10.3,9.80785763 10.7921424,10.3 11.4,10.3 L15.4,10.3 C16.0078576,10.3 16.5,9.80785763 16.5,9.2 L16.5,7.6 C16.5,6.99214237 16.0078576,6.5 15.4,6.5 Z M15.4,12.9 L11.4,12.9 C10.7921424,12.9 10.3,13.3921424 10.3,14 L10.3,20.4 C10.3,21.0078576 10.7921424,21.5 11.4,21.5 L15.4,21.5 C16.0078576,21.5 16.5,21.0078576 16.5,20.4 L16.5,14 C16.5,13.3921424 16.0078576,12.9 15.4,12.9 Z M6.6,6.5 L2.6,6.5 C1.99214237,6.5 1.5,6.99214237 1.5,7.6 L1.5,14 C1.5,14.6078576 1.99214237,15.1 2.6,15.1 L6.6,15.1 C7.20785763,15.1 7.7,14.6078576 7.7,14 L7.7,7.6 C7.7,6.99214237 7.20785763,6.5 6.6,6.5 Z" id="icon-menu-dashboard"></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default DashboardMenuIcon;
