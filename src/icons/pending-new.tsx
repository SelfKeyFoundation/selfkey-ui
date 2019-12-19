import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
};

export const PendingNewIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '34px', height: props.height || '34px' }} {...props} viewBox={props.viewBox || "0 0 34 34"}>
            <g id="🖥-Main-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="300.7-dashboard-alternate1---full-state" transform="translate(-1049.000000, -681.000000)">
                    <g id="Transactions" transform="translate(1020.000000, 447.000000)">
                        <g id="Table" transform="translate(29.000000, 84.000000)">
                            <g id="Col0" transform="translate(0.000000, 6.000000)">
                                <g id="icon-pending-new" transform="translate(1.000000, 145.000000)">
                                    <rect id="Rectangle" stroke="#475768" fill="#262F39" x="0" y="0" width="32" height="32" rx="4"></rect>
                                    <path d="M10,8 L10,9.23076923 L10.6153846,9.23076923 L11.2307692,9.23076923 L11.2307692,11.6923077 C11.2307692,13.55657 12.2876834,15.1646663 13.8221154,16 C12.2876834,16.8353337 11.2307692,18.44343 11.2307692,20.3076923 L11.2307692,22.7692308 L10.6153846,22.7692308 L10,22.7692308 L10,24 L10.6153846,24 L21.6923077,24 L22.3076923,24 L22.3076923,22.7692308 L21.6923077,22.7692308 L21.0769231,22.7692308 L21.0769231,20.3076923 C21.0769231,18.44343 20.0200086,16.8353337 18.4855769,16 C20.0200086,15.1646663 21.0769231,13.55657 21.0769231,11.6923077 L21.0769231,9.23076923 L21.6923077,9.23076923 L22.3076923,9.23076923 L22.3076923,8 L21.6923077,8 L10.6153846,8 L10,8 Z M12.4615385,9.23076923 L19.8461538,9.23076923 L19.8461538,11.6923077 C19.8461538,13.7388074 18.2003458,15.3846154 16.1538462,15.3846154 C14.1073465,15.3846154 12.4615385,13.7388074 12.4615385,11.6923077 L12.4615385,9.23076923 Z M13.6923077,11.6923077 C13.6923077,13.0498462 14.7963077,14.1538462 16.1538462,14.1538462 C17.5113846,14.1538462 18.6153846,13.0498462 18.6153846,11.6923077 L13.6923077,11.6923077 Z M16.1538462,16.6153846 C18.2003458,16.6153846 19.8461538,18.2611926 19.8461538,20.3076923 L19.8461538,22.7692308 L18.6153846,22.7692308 L18.6153846,21.5384615 C18.6153846,20.1809231 17.5113846,19.0769231 16.1538462,19.0769231 C14.7963077,19.0769231 13.6923077,20.1809231 13.6923077,21.5384615 L13.6923077,22.7692308 L12.4615385,22.7692308 L12.4615385,20.3076923 C12.4615385,18.2611926 14.1073465,16.6153846 16.1538462,16.6153846 Z" id="Shape" fill="#93B0C1" fillRule="nonzero"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default PendingNewIcon;
