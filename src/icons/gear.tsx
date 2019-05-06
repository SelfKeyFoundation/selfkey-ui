import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '24px !important',
    height: '24px !important',
    stroke: '#93B0C1',
    '&:hover': {
      stroke: 'white',
    }
  }
};

export const GearIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (

  <SvgIcon {...props} viewBox="0 0 24 24" version="1.1">
    <defs></defs>
    <g id="🖥-Main-Dashboard" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <g id="301-Dashboard-+-Null-State" transform="translate(-1236.000000, -505.000000)">
        <g id="My-Crypto" transform="translate(150.000000, 478.000000)">
          <g id="Area-header" transform="translate(30.000000, 21.000000)">
            <g id="icon-settings" transform="translate(1056.000000, 6.000000)">
              <circle id="Oval" cx="12" cy="12" r="3.75"></circle>
              <path d="M23.25,13.5 L23.25,10.5 L19.9845,9.9555 C19.788,9.1875 19.4865,8.4645 19.092,7.8 L21.0165,5.106 L18.894,2.985 L16.2,4.908 C15.5355,4.5135 14.8125,4.212 14.0445,4.0155 L13.5,0.75 L10.5,0.75 L9.9555,4.0155 C9.1875,4.212 8.4645,4.5135 7.8,4.908 L5.106,2.985 L2.985,5.106 L4.908,7.8 C4.5135,8.4645 4.212,9.1875 4.0155,9.9555 L0.75,10.5 L0.75,13.5 L4.0155,14.0445 C4.212,14.8125 4.5135,15.5355 4.908,16.2 L2.985,18.894 L5.106,21.015 L7.8,19.092 C8.4645,19.4865 9.1875,19.788 9.9555,19.9845 L10.5,23.25 L13.5,23.25 L14.0445,19.9845 C14.8125,19.788 15.5355,19.4865 16.2,19.092 L18.894,21.0165 L21.015,18.8955 L19.092,16.2 C19.4865,15.5355 19.788,14.8125 19.9845,14.0445 L23.25,13.5 Z" id="Shape"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </SvgIcon>
));

export default GearIcon;
