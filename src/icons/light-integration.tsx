import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const LightIntegrationIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '21px', height: props.height || '25px' }} {...props} viewBox={props.viewBox || "0 0 21 25"}>
        <defs>
            <linearGradient x1="43.4869786%" y1="0%" x2="43.4869786%" y2="100%" id="linearGradient-light">
                <stop stop-color="#5D9CEC" offset="0%"></stop>
                <stop stop-color="#0E65D7" offset="100%"></stop>
                <stop stop-color="#0E65D7" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="🌈-UI-Guidelines" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="6.-Style-Guide---UI-Elements-2" transform="translate(-1196.000000, -679.000000)">
                <g id="Badges" transform="translate(1047.000000, 679.000000)">
                    <g id="vendor-tag" transform="translate(149.000000, 0.000000)">
                        <g id="akarmi">
                            <g>
                                <g id="sign/seller">
                                    <path d="M4,0 L21,0 L21,0 L21,25 L4,25 C1.790861,25 2.705415e-16,23.209139 0,21 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z" id="sign-background" fill="url(#linearGradient-light)"></path>
                                    <g id="icon-trusted_seller" transform="translate(6.000000, 4.000000)" fill="#FFFFFF">
                                        <polygon id="Star" points="4.5 6.75 1.85496636 8.14057647 2.36012284 5.19528824 0.220245677 3.10942353 3.17748318 2.67971176 4.5 0 5.82251682 2.67971176 8.77975432 3.10942353 6.63987716 5.19528824 7.14503364 8.14057647"></polygon>
                                        <polygon id="Star" points="4.5 15.25 2.44275162 16.3315595 2.8356511 14.0407797 1.17130219 12.4184405 3.47137581 12.0842203 4.5 10 5.52862419 12.0842203 7.82869781 12.4184405 6.1643489 14.0407797 6.55724838 16.3315595"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default LightIntegrationIcon;
