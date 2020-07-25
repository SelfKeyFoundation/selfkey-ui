import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const UnlockIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '14px', height: props.height || '18px' }} {...props} viewBox={props.viewBox || '0 0 14 18'}>
        <g id="💹-Marketplace-unlock-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="501-Exchange-Marketplace" transform="translate(-1051.000000, -159.000000)" fill="#FFFFFF" fillRule="nonzero">
                <g id="Title" transform="translate(150.000000, 147.000000)">
                    <g id="Button/Full-Primary" transform="translate(880.000000, 0.000000)">
                        <g id="text" transform="translate(21.000000, 11.000000)">
                            <path d="M6.85714286,1 C4.39523811,1 2.33216726,2.74881649 1.82142857,5.09821429 L3.48214286,5.47321429 C3.82854703,3.87975494 5.20476171,2.71428571 6.85714286,2.71428571 C8.80816286,2.71428571 10.2857143,4.19183671 10.2857143,6.14285714 L10.2857143,7 L1.71428571,7 C0.771428571,7 0,7.77142857 0,8.71428571 L0,17.2857143 C0,18.2285714 0.771428571,19 1.71428571,19 L12,19 C12.9428571,19 13.7142857,18.2285714 13.7142857,17.2857143 L13.7142857,8.71428571 C13.7142857,7.77142857 12.9428571,7 12,7 L12,6.14285714 C12,3.29387757 9.70612286,1 6.85714286,1 Z M1.71428571,8.71428571 L12,8.71428571 L12,17.2857143 L1.71428571,17.2857143 L1.71428571,8.71428571 Z M6.85714286,11.2857143 C5.91036943,11.2857143 5.14285714,12.0532266 5.14285714,13 C5.14285714,13.9467734 5.91036943,14.7142857 6.85714286,14.7142857 C7.80391629,14.7142857 8.57142857,13.9467734 8.57142857,13 C8.57142857,12.0532266 7.80391629,11.2857143 6.85714286,11.2857143 Z" id="icon-unlock-white"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default UnlockIcon;
