import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export const ClearIcon = ((props: SvgIconProps) => (
        <SvgIcon width="34px" height="20px" {...props} viewBox="0 0 34 20">
            <defs></defs>
            <g id="🛠-Wallet-Setup" stroke="none" strokeWidth="1" fillRule="evenodd">
                <g id="118---Trezor---Enter-PIN" transform="translate(-810.000000, -640.000000)">
                    <g id="Modal1" transform="translate(323.000000, 100.000000)">
                        <g id="input" transform="translate(260.000000, 535.000000)">
                            <path d="M243.38,12.6433333 L241.023333,15 L243.38,17.3566667 L241.023333,19.715 L238.666667,17.3566667 L236.308333,19.715 L233.951667,17.3566667 L236.308333,15 L233.951667,12.6433333 L236.308333,10.2866667 L238.666667,12.6433333 L241.023333,10.2866667 L243.38,12.6433333 Z M245.888333,21.6666667 L230.333333,21.6666667 L230.333333,8.33333333 L245.888333,8.33333333 L254.776667,15 L245.888333,21.6666667 Z M247,5 L227,5 L227,25 L247,25 L260.333333,15 L247,5 Z" id="icon-del-arrow" transform="translate(243.666667, 15.000000) scale(-1, 1) translate(-243.666667, -15.000000) "></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default ClearIcon;
