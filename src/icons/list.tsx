import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export const ListIcon = (props: SvgIconProps) => (
    <SvgIcon style={{ width: props.width || '32px', height: props.height || '16px' }} {...props} viewBox={props.viewBox || '0 0 32 16'}>
        <g id="🌈-UI-Guidelines" stroke="none" strokeWidth="1" fillRule="evenodd">
            <g id="3.-Style-Guide---Forms" transform="translate(-1098.000000, -863.000000)" fill="inherit">
                <g id="Line-3-Buttons" transform="translate(39.000000, 559.000000)">
                    <g id="button-groups" transform="translate(979.000000, 242.000000)">
                        <g id="Button-group" transform="translate(7.000000, 48.000000)">
                            <g id="button-list" transform="translate(59.000000, 0.000000)">
                                <path d="M14,30 L17.2,30 L17.2,26.8 L14,26.8 L14,30 Z M14,17.2096 L17.2,17.2096 L17.2,14.0096 L14,14.0096 L14,17.2096 Z M14,23.6 L17.2,23.6 L17.2,20.4 L14,20.4 L14,23.6 Z M20.4,30 L46,30 L46,26.8 L20.4,26.8 L20.4,30 Z M20.4,17.2 L46,17.2 L46,14 L20.4,14 L20.4,17.2 Z M20.4,23.6 L46,23.6 L46,20.4 L20.4,20.4 L20.4,23.6 Z" id="icon-list"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
);

export default ListIcon;
