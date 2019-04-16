import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '27px !important',
    height: '45px !important'
  }
};

export const SimpleHourglassIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
    <SvgIcon {...props} viewBox='0 0 27 45'>
        <title>icon-simple-hourglass</title>
        <g id="💻-ID-Dashboard-simle-hourglass-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="410.1-Marketplace-Applications-Statuses-simple-hourglass-icon" transform="translate(-202.000000, -502.000000)" fill="#93B0C1">
                <g id="Content" transform="translate(150.000000, 264.000000)">
                    <g id="Collapse-box-1">
                        <g id="Status-box-2" transform="translate(15.000000, 213.000000)">
                            <path d="M63.72,37.4 L63.72,28.4 C63.72,26.7431458 62.3768542,25.4 60.72,25.4 L40.72,25.4 C39.0631458,25.4 37.72,26.7431458 37.72,28.4 L37.72,37.4 C37.721724,38.2515717 38.0852731,39.0622861 38.72,39.63 L47.35,47.4 L38.72,55.17 C38.0852731,55.7377139 37.721724,56.5484283 37.72,57.4 L37.72,66.4 C37.72,68.0568542 39.0631458,69.4 40.72,69.4 L60.72,69.4 C62.3768542,69.4 63.72,68.0568542 63.72,66.4 L63.72,57.4 C63.718276,56.5484283 63.3547269,55.7377139 62.72,55.17 L54.09,47.4 L62.72,39.63 C63.3547269,39.0622861 63.718276,38.2515717 63.72,37.4 L63.72,37.4 Z M60.72,66.4 L40.72,66.4 L40.72,65.4 L60.72,65.4 L60.72,66.4 Z M60.72,62.4 L40.72,62.4 L40.72,57.4 L49.78,49.24 C50.3854601,49.4511014 51.0445399,49.4511014 51.65,49.24 L60.72,57.4 L60.72,62.4 Z M60.72,37.4 L51.66,45.56 C51.0545399,45.3488986 50.3954601,45.3488986 49.79,45.56 L40.72,37.4 L40.72,28.4 L60.72,28.4 L60.72,37.4 Z" id="icon-simple-hourglass"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default SimpleHourglassIcon;




