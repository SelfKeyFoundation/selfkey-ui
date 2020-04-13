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

export const ReceivedRoundedIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '34px', height: props.height || '34px' }} {...props} viewBox={props.viewBox || "0 0 34 34"}>
            <g id="🖥-Main-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="300.7-dashboard-alternate1---full-state" transform="translate(-1049.000000, -606.000000)">
                    <g id="Transactions" transform="translate(1020.000000, 447.000000)">
                        <g id="Table" transform="translate(29.000000, 84.000000)">
                            <g id="Col0" transform="translate(0.000000, 6.000000)">
                                <g id="icon-received-new" transform="translate(1.000000, 70.000000)">
                                    <rect id="Rectangle" stroke="#1CBA7D" fill="#262F39" x="0" y="0" width="32" height="32" rx="4"></rect>
                                    <path d="M23.1782491,8.00023949 C23.1487346,8.00120935 23.1192966,8.00381431 23.0900705,8.00804238 L16.8013254,8.00804238 C16.5131534,8.00396716 16.2451103,8.15536158 16.099835,8.40425376 C15.9545596,8.65314595 15.9545596,8.96097501 16.099835,9.2098672 C16.2451103,9.45875938 16.5131534,9.6101538 16.8013254,9.60607858 L21.2648597,9.60607858 L8.24569781,22.6244557 C8.03695208,22.8248634 7.95286478,23.1224566 8.02586538,23.4024643 C8.09886598,23.682472 8.31754738,23.9011402 8.59757201,23.9741363 C8.87759664,24.0471324 9.17520778,23.96305 9.37562747,23.7543168 L22.3947894,10.7359401 L22.3947894,15.1992053 C22.3907139,15.4873599 22.5421175,15.7553869 22.7910246,15.9006534 C23.0399318,16.04592 23.3477795,16.04592 23.5966867,15.9006534 C23.8455938,15.7553869 23.9969974,15.4873599 23.9929219,15.1992053 L23.9929219,8.90459686 C24.0023594,8.83416516 24.0023594,8.76278937 23.9929219,8.69235768 L23.9929219,8.00804238 L23.3109065,8.00804238 C23.2669807,8.00176327 23.2226082,7.99915328 23.1782491,8.00023949 Z" id="Path" fill="#1CBA7D" fillRule="nonzero" transform="translate(16.000000, 16.000000) scale(1, -1) translate(-16.000000, -16.000000) "></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default ReceivedRoundedIcon;
