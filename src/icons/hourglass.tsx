import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
    root: {
        '&:hover': {
            fill: 'white',
        },
    }
});

export const HourGlassIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>)=> (
    <SvgIcon style={{ width: props.width || '16px', height: props.height || '16px' }} {...props} viewBox='0 0 16 16'>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="5.-Style-Guide---UI-Elements" transform="translate(-643.000000, -394.000000)" fill="#697C95" fillRule="nonzero">
                <g id="Accordion" transform="translate(39.000000, 322.000000)">
                    <g id="Content" transform="translate(0.000000, 51.000000)">
                        <g id="Collapse-box-1">
                            <g id="Area-Header'" transform="translate(0.000000, 14.000000)">
                                <g id="Status" transform="translate(604.000000, 4.000000)">
                                    <path d="M11.25,3 L0.75,3 C0.33578125,3 0,3.33578125 0,3.75 L0,4.25 C0,4.66421875 0.33578125,5 0.75,5 C0.75,7.84265625 2.34425,10.2416875 4.5263125,11 C2.34425,11.7583125 0.75,14.1573438 0.75,17 C0.33578125,17 0,17.3357813 0,17.75 L0,18.25 C0,18.6642187 0.33578125,19 0.75,19 L11.25,19 C11.6642187,19 12,18.6642187 12,18.25 L12,17.75 C12,17.3357813 11.6642187,17 11.25,17 C11.25,14.1573437 9.65575,11.7583125 7.4736875,11 C9.65575,10.2416875 11.25,7.84265625 11.25,5 C11.6642187,5 12,4.66421875 12,4.25 L12,3.75 C12,3.33578125 11.6642187,3 11.25,3 Z M8.9038125,15 L3.09625,15 C3.62934375,13.5375937 4.72425,12.5 6,12.5 C7.27565625,12.5 8.3706875,13.537375 8.9038125,15 Z M8.90440625,7 L3.0961875,7 C2.874625,6.392125 2.75,5.710875 2.75,5 L9.25,5 C9.25,5.71265625 9.12540625,6.39334375 8.90440625,7 Z" id="icon-hourglass"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default HourGlassIcon;
