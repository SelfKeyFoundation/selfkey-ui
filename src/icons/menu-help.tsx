import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
};

export const MenuHelpIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '16px', height: props.height || '19px' }} {...props} viewBox={props.viewBox || "0 0 16 19"}>
            <defs></defs>
            <g id="🖥-Main-Dashboard-mhi" stroke="none" strokeWidth="1" fillRule="evenodd">
                <g id="300.4-Navigation-collapsed-mhi" transform="translate(-20.000000, -1263.000000)">
                    <g id="Menu-mhi">
                        <g id="Bottom-menu" transform="translate(20.000000, 1263.000000)">
                            <path d="M14.2222222,1.49213975e-13 L1.77777778,1.49213975e-13 C0.791111111,1.49213975e-13 0,0.8 0,1.77777778 L0,14.2222222 C0,15.2 0.791111111,16 1.77777778,16 L5.33333333,16 L8,18.6666667 L10.6666667,16 L14.2222222,16 C15.2,16 16,15.2 16,14.2222222 L16,1.77777778 C16,0.8 15.2,1.49213975e-13 14.2222222,1.49213975e-13 Z M14.2222222,14.2222222 L9.92888889,14.2222222 L9.40444444,14.7466667 L8,16.1511111 L6.58666667,14.7377778 L6.07111111,14.2222222 L1.77777778,14.2222222 L1.77777778,1.77777778 L14.2222222,1.77777778 L14.2222222,14.2222222 Z M7.11111111,11.5555556 L8.88888889,11.5555556 L8.88888889,13.3333333 L7.11111111,13.3333333 L7.11111111,11.5555556 Z M8,4.44444444 C8.97777778,4.44444444 9.77777778,5.24444444 9.77777778,6.22222222 C9.77777778,8 7.11111111,7.77777778 7.11111111,10.6666667 L8.88888889,10.6666667 C8.88888889,8.66666667 11.5555556,8.44444444 11.5555556,6.22222222 C11.5555556,4.25777778 9.96444444,2.66666667 8,2.66666667 C6.03555556,2.66666667 4.44444444,4.25777778 4.44444444,6.22222222 L6.22222222,6.22222222 C6.22222222,5.24444444 7.02222222,4.44444444 8,4.44444444 Z" id="icon-menu-help"></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default MenuHelpIcon;
