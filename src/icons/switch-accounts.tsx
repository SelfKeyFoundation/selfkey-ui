import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {};

export const SwitchAccountsIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '16px', height: props.height || '16px' }} {...props} viewBox={props.viewBox || "0 0 16 16"}>
            <defs></defs>
            <g id="🖥-Main-Dashboard-sai" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="300.4-Navigation-collapsed-sai" transform="translate(-20.000000, -1314.000000)" fill="#93A4AF" fill-rule="nonzero">
                    <g id="Menu">
                        <g id="Bottom-menu" transform="translate(20.000000, 1263.000000)">
                            <path d="M8,51 C3.584,51 0,54.584 0,59 C0,63.416 3.584,67 8,67 C12.416,67 16,63.416 16,59 C16,54.584 12.416,51 8,51 Z M8,65.4 C4.472,65.4 1.6,62.528 1.6,59 C1.6,55.472 4.472,52.6 8,52.6 C11.528,52.6 14.4,55.472 14.4,59 C14.4,62.528 11.528,65.4 8,65.4 Z M10.4,54.6 L10.4,56.6 L7.2,56.6 L7.2,58.2 L10.4,58.2 L10.4,60.2 L13.2,57.4 L10.4,54.6 Z M5.6,57.8 L2.8,60.6 L5.6,63.4 L5.6,61.4 L8.8,61.4 L8.8,59.8 L5.6,59.8 L5.6,57.8 Z" id="icon-switch-accounts"></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default SwitchAccountsIcon;
