import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const DeepIntegrationIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '21px', height: props.height || '25px' }} {...props} viewBox={props.viewBox || "0 0 21 25"}>
        <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                <stop stopColor="#29C8A8" offset="0%"></stop>
                <stop stopColor="#0C9674" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="🌈-UI-Guidelines" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="6.-Style-Guide---UI-Elements-2" transform="translate(-1047.000000, -679.000000)">
                <g id="Badges" transform="translate(1047.000000, 679.000000)">
                    <g id="vendor-tag">
                        <g id="deep">
                            <g>
                                <g id="sign/vendor">
                                    <path d="M4,0 L21,0 L21,0 L21,25 L4,25 C1.790861,25 2.705415e-16,23.209139 0,21 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z" id="sign-background" fill="url(#linearGradient-1)"></path>
                                    <g id="icon-assoicated_vendor" transform="translate(3.000000, 5.000000)" fill="#FFFFFF">
                                        <polygon id="Star" points="3.5 14.25 1.44275162 15.3315595 1.8356511 13.0407797 0.171302193 11.4184405 2.47137581 11.0842203 3.5 9 4.52862419 11.0842203 6.82869781 11.4184405 5.1643489 13.0407797 5.55724838 15.3315595"></polygon>
                                        <polygon id="Star" points="11.5 14.25 9.44275162 15.3315595 9.8356511 13.0407797 8.17130219 11.4184405 10.4713758 11.0842203 11.5 9 12.5286242 11.0842203 14.8286978 11.4184405 13.1643489 13.0407797 13.5572484 15.3315595"></polygon>
                                        <polygon id="Star" points="7.5 6.75 4.85496636 8.14057647 5.36012284 5.19528824 3.22024568 3.10942353 6.17748318 2.67971176 7.5 0 8.82251682 2.67971176 11.7797543 3.10942353 9.63987716 5.19528824 10.1450336 8.14057647"></polygon>
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

export default DeepIntegrationIcon;
