import * as React from 'react';
import { SvgIcon, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
    root: {
       width: '38px !important',
       height: '44px !important',
    },
});

export const AttributeAlertLargeIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
	<SvgIcon {...props} viewBox="0 0 38 44" version="1.1">
        <g id="💻-ID-Dashboard-attribute-large-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="410.1-Marketplace-Applications-Statuses" transform="translate(-195.000000, -379.000000)" fill="#E98548">
                <g id="Content" transform="translate(150.000000, 264.000000)">
                    <g id="Collapse-box-1">
                        <g id="Status-box-1" transform="translate(15.000000, 90.000000)">
                            <path d="M67.91,31.27 C67.9698291,31.5087207 68.0000562,31.7538962 68,32 L68,45.3 C67.9841317,53.5919031 63.5062321,61.23337 56.28,65.3 L50.47,68.57 C49.5571638,69.0831103 48.4428362,69.0831103 47.53,68.57 L41.72,65.3 C34.4937679,61.23337 30.0158683,53.5919031 30,45.3 L30,32 C30,31.32 30.27,29.02 33.66,27.32 C36.73,25.78 41.89,25 49,25 C64.09,25 67.32,28.93 67.91,31.27 Z M65,45.27 L65,32 C65,32 64,28 49,28 C33,28 33,32 33,32 L33,45.3 C32.9995752,52.5239266 36.8947728,59.186664 43.19,62.73 L49,66 L54.81,62.7 C61.1052272,59.156664 65.0004248,52.4939266 65,45.27 Z M48.5,59 C47.6715729,59 47,58.3284271 47,57.5 C47,56.6715729 47.6715729,56 48.5,56 C49.3284271,56 50,56.6715729 50,57.5 C50,58.3284271 49.3284271,59 48.5,59 Z M48.5,33.5 C49.3284271,33.5 50,34.1715729 50,35 L50,51 C50,51.8284271 49.3284271,52.5 48.5,52.5 C47.6715729,52.5 47,51.8284271 47,51 L47,35 C47,34.1715729 47.6715729,33.5 48.5,33.5 Z" id="attribute-large-icon"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
	</SvgIcon>
));

export default AttributeAlertLargeIcon;
