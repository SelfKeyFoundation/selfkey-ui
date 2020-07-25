import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export const ExistingAddressIcon = ((props: SvgIconProps) => (
    <SvgIcon style={{ width: props.width || '28px', height: props.height || '25px' }} {...props} viewBox={props.viewBox || '0 0 28 25'}>
        <defs></defs>
        <g id="🛠-Wallet-Setup" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="111---Import-Keystore-File-(UTC)" transform="translate(-346.000000, -399.000000)" fill="#23E6FE" fillRule="nonzero">
                <g id="Modal" transform="translate(240.000000, 268.000000)">
                    <g id="Buttons" transform="translate(40.000000, 106.000000)">
                        <g id="button1">
                            <path d="M66,25 L66,27.2727273 L93.2727273,27.2727273 L93.2727273,25 L66,25 Z M66,34.0909091 L66,36.3636364 L93.2727273,36.3636364 L93.2727273,34.0909091 L66,34.0909091 Z M87.5909091,38.6363636 L85.7731716,42.7268284 L81.9090909,43.1818182 L84.75,45.9095352 L84.1818182,50 L87.5909091,47.7272727 L91,50 L90.4318182,45.9095352 L93.2727273,43.1818182 L89.2954545,42.7268284 L87.5909091,38.6363636 Z M66,43.1818182 L66,45.4545455 L79.6363636,45.4545455 L79.6363636,43.1818182 L66,43.1818182 Z" id="icon-existing"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default ExistingAddressIcon;
